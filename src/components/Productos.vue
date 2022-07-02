<template>
    <div class="w-100">



        <div class="w-100" v-if="tipo === 1">



            <b-card-body class="text-center">
                <b-row cols="1" cols-md="2" cols-lg="3">

                    <b-card-group deck columns class="d-flex" v-for="(item, index) of productos" :key="index">

                        <Card :item="item" :indice="index"></Card>


                    </b-card-group>

                </b-row>
            </b-card-body>

        </div>
        <div class="w-100" v-if="tipo === 2">


            <b-card-body class="text-center">
                <b-row cols="1" cols-md="2" cols-lg="4">

                    <b-card-group deck columns class="d-flex" v-for="(productos, index) in sortedArray" :key="index">

                        <Card :item="productos" :indice="index"></Card>


                    </b-card-group>

                </b-row>
            </b-card-body>

        </div>
        <div class="w-100" v-if="tipo === 3">

            <b-card-body class="text-center">
                <b-row cols="1" cols-md="2" cols-lg="4">

                    <b-card-group deck columns class="d-flex" v-for="(productos, index) in sortedArrayPrecio"
                        :key="index">

                        <Card :item="productos" :indice="index"></Card>


                    </b-card-group>

                </b-row>
            </b-card-body>
        </div>

    </div>
</template>

<script>
import Card from "../components/Card.vue"
export default {
    components: {
        Card
    },
    props: ["productos", "tipo"],
    computed: {
        sortedArray: function () {
            function compare(a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            }

            return this.productos.sort(compare);
        },
        sortedArrayPrecio: function () {
            function compare(a, b) {
                if (a.precio < b.precio)
                    return -1;
                if (a.precio > b.precio)
                    return 1;
                return 0;
            }

            return this.productos.sort(compare);
        }
    }

}
</script>

<style>
</style>