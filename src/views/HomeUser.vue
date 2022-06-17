<template>
  <b-row>
    <div class="container-fluid bg-ligth d-flex flex-row col-12 px-5">
      <div class="col-4">
        <div header="carrito-vacio" class="
          border
          bg-dark
          carrito-area
          col-12
          d-flex
          flex-column
          m-1
          p-1
          text-white
          rounded
          h-10
        " v-if="carro.length === 0">
          <h2>Carrito Vacio</h2>
        </div>
        <Carrito v-else></Carrito>
      </div>
      <div class="container d-flex flex-column justify-content-start col-7 rounded">
        <Carrusel class="w-100"></Carrusel>
        <h1 class="title">Nuestros Productos</h1>
        <b-container class="col-12 bv-example-row">
          <b-row cols="1" cols-md="2" cols-lg="3">
            <b-col>
              <b-card-group title="Mas Vendidos">
                <h2>Más vendidos</h2>
              </b-card-group>
            </b-col>

          </b-row>
          <b-row cols="1" cols-md="2" cols-lg="3">

            <b-card-group deck columns class="d-flex" v-for="(item, index) of productos" :key="index">

              <Card :item="item" :indice="index"></Card>

            </b-card-group>

          </b-row>
        </b-container>
      </div>


    </div>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Carrusel from "../components/Carrusel.vue";
import Carrito from "../components/Carrito.vue";
import Card from "../components/Card.vue"
export default {
  computed: {
    ...mapState(["token", "productos", "carro", "user"]),
  },
  watch: {
    carrito: {
      immediate: true,
      handler(value) {
        //console.log("carrito", value);
      },
    },
  },
  components: {
    Carrusel,
    Carrito,
    Card,
  },
  methods: {
    ...mapActions([
      "datosProtegidos",
      "agregarCarrito",
      "quitarCarro",
      "aumentarCarritoAction",
      "disminuirCarritoAction",
    ]),

  },
  created() {
    this.datosProtegidos();
    this.productos_local = localStorage.getItem("productos");
    this.productos_local = JSON.parse(this.productos_local);

  },
};
</script>

<style>
</style>