<template>
  <div>
    <h1>Vista Ventas</h1>
    <ul id="example-1">
      <li v-for="(item, index) in ventas" :key="index">
        <b-card class="m-2" header="">
          <h2>Venta: {{ index }}</h2>
          <div class="detalles h-25 w-100 p-1">

            <input class="form-control w-25 m-2 p-2" type="text">
          </div>


          <div class=" rounded d-flex flex-column justify-content-center align-items-center ">

            <div>

              <b-collapse id="item._id" v-model="visible" class="mt-2">
                <b-card>
                  <h2>Productos</h2>
                  <div class="collapse productos d-flex overflow-auto p-2 h-50 w-100 justify-content-center"
                    v-for="(producto, index) in item.productos" :key="index">
                    <input class="form-control w-25 m-2 p-2" type="text" :value="producto.name" disabled>
                    <input class="form-control w-25 m-2 p-2" type="text" :value="producto.cantidad" disabled>
                    <input class="form-control w-25 m-2 p-2" type="text" :value="producto.precio" disabled>

                  </div>
                </b-card>
              </b-collapse>
            </div>




          </div>
        </b-card>
      </li>


    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      visible: true
    }
  },
  computed: {
    ...mapState(["ventas"]),
  },
  mounted() {
    this.leerVentas();
    console.log("ventas")
  },
  methods: {
    ...mapActions([
      "leerVentas",

    ]),

  }
}
</script>

<style>
</style>