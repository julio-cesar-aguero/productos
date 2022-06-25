<template>
    <div class="w-100">



        <div class="w-100">



            <b-card-body class="text-center">
                <b-row cols="1" cols-md="2" cols-lg="3">

                    <b-card-group deck columns class="d-flex" v-for="(item, index) of productos" :key="index">

                        <Card :item="item" :indice="index"></Card>

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
    props: ["productos"],

}
</script>

<style>
</style>