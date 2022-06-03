<template>
  <div>
    <h1>Vista Ventas</h1>
    <ul id="example-1" class="list-unstyled">
      <li v-for="(item, index) in ventas " :key="index">
        <b-alert show variant="success">
          <b-card class="m-2 bg-transparent" header="">
            <h2>Venta: {{ index }}</h2>
            <div class="detalles h-50 w-100 p-1 d-flex">
              <div class="username w-10 d-flex align-items-center flex-column">
                <label for="username"><b>Nombre Vendedor:</b></label>
                <input disabled name="username" class="form-control w-100 m-2 py-2 text-left  bg-white" type="text"
                  v-model="ventas[index].detalles.username">
              </div>
              <div class="productos w-10 d-flex align-items-center flex-column">
                <label for="productos-total"><b>Total Productos:</b></label>
                <input disabled name="productos-total" class="form-control w-75 m-2 py-2 text-center  bg-white" type="text"
                  v-model="ventas[index].detalles.articulosTotal">
              </div>
              <div class="username w-10 d-flex align-items-center flex-column">
                <label for="username"><b>Importe:</b></label>
                <input disabled name="username" class="form-control w-75 m-2 py-2 text-center  bg-white" type="text"
                  v-model="ventas[index].detalles.importe">
              </div>
              <div class="username w-10 d-flex align-items-center flex-column">
                <label for="username"><b>Cambio:</b></label>
                <input disabled name="username" class="form-control w-75 m-2 py-2 text-center  bg-white" type="text"
                  v-model="ventas[index].detalles.cambio">
              </div>
              <div class="username w-25 d-flex  flex-column">
                <label for="username"><b><h2>TOTAL:</h2></b></label>
                <input  disabled name="username" class="form-control w-100 m-2 text-center py-4  bg-white" type="text"
                  v-model="ventas[index].detalles.Total">
              </div>

            </div>
            <div class=" rounded d-flex flex-column justify-content-center align-items-center ">
              <div>
                <b-collapse id="item._id" v-model="visible" class="mt-2">
                  <b-card class="bg-transparent">
                    <h2 class="text-dark">Productos</h2>
                    <div class="inf d-flex px-1">
                      <input disabled class="form-control w-35  p-1 m-1 bg-dark text-white" value="Nombre:">
                      <input disabled class="form-control w-25  p-1 m-1 bg-dark text-white" value="Cantidad:">
                      <input disabled class="form-control w-25  p-1 m-1 bg-dark text-white" value="Costo Unitario">
                    </div>
                    <div class="collapse productos d-flex overflow-auto px-1 h-50 w-100 justify-content-between"
                      v-for="(producto, index) in item.productos" :key="index">
                      <input class="form-control w-35  p-1 m-1" type="text" :value="producto.name" disabled>
                      <input class="form-control w-25  p-1 m-1" type="text" :value="producto.cantidad" disabled>
                      <input class="form-control w-25  p-1 m-1" type="text" :value="producto.precio" disabled>
                    </div>
                  </b-card>
                </b-collapse>
              </div>
            </div>
          </b-card>
        </b-alert>

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