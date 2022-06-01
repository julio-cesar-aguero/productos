<template>
  <div>
    <div class="container-fluid bg-ligth d-flex col-15 pt-5">
      <div
        class="container d-flex flex-column justify-content-start col-8 rounded"
      >
        <Carrusel class="w-100"></Carrusel>
        <h1 class="title">Nuestros Productos</h1>
        <b-container class="w-100 col-12 bv-example-row">
          <b-row cols="1" cols-md="2" cols-lg="3">
            <b-col v-for="(item, index) of productos" :key="index">
              <div class="w-100 m-1 producto pb-2">
                <b-card
                  :title="item.name"
                  :img-src="'http://localhost:5010/img/productos/' + item.imgProducto"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem"
                  class="w-100"
                >
                  <b-card-text>
                    {{item.description}}
                  </b-card-text>

                  <b-button
                    @click.prevent="agregarCarro(item)"
                    variant="primary"
                    >Agregar al carrito</b-button
                  >
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div
        header="carrito-vacio"
        class="
          border
          bg-dark
          carrito-area
          col-4
          d-flex
          flex-column
          m-1
          p-5
          text-white
          rounded
          h-10
        "
        v-if="carro.length === 0"
      ><h2>Carrito Vacio</h2></div>
      <Carrito v-else></Carrito>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Carrusel from "../components/Carrusel.vue";
import Carrito from "../components/Carrito.vue";
export default {
  computed: {
    ...mapState(["token", "productos", "carro", "user"]),
  },
  watch: {
    carrito: {
      immediate: true,
      handler(value) {
        console.log("carrito", value);
      },
    },
  },
  components: {
    Carrusel,
    Carrito,
  },
  methods: {
    ...mapActions([
      "datosProtegidos",
      "agregarCarrito",
      "quitarCarro",
      "aumentarCarritoAction",
      "disminuirCarritoAction",
    ]),
    
    agregarCarro(item) {
      const articulo = {
        id: item._id,
        name: item.name,
        description: item.description,
        cantidad: 1,
        precio: 50,
      };
      this.agregarCarrito(articulo);
    },
  },
  created() {
    this.datosProtegidos();
    this.productos_local = localStorage.getItem("productos");
    this.productos_local = JSON.parse(this.productos_local);
    console.log("Created");
  },
};
</script>

<style>
</style>