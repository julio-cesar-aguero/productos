<template>
  <b-row>
    <div id="user-view" class="container-fluid col-12">
      <b-col sm="8" md="4" xl="3">
        <div header="carrito-vacio" class="
          border
          bg-dark
          carrito-area
          col-12
          d-flex
          flex-row
          m-1
          p-1
          text-white
          rounded
          h-10
        " v-if="carro.length === 0">
          <h2>Carrito Vacio</h2>
        </div>
        <Carrito v-else></Carrito>
      </b-col>
      <div class="container d-flex flex-column justify-content-center align-items-center col-8 rounded">
        <Carrusel class="w-100"></Carrusel>
        <h1 class="title">Nuestros Productos</h1>
        <b-container class="col-12 bv-example-row">

          <div>
            <b-card no-body>
              <b-card-header header-tag="nav">
                <b-nav card-header tabs>
                  <b-nav-item active>Más Vendidos</b-nav-item>
                  <b-nav-item>A-Z</b-nav-item>
                  <b-nav-item>Categorias</b-nav-item>
                </b-nav>
              </b-card-header>

              <b-card-body class="text-center">
                <b-row cols="1" cols-md="2" cols-lg="3">

                  <b-card-group deck columns class="d-flex" v-for="(item, index) of productos" :key="index">

                    <Card :item="item" :indice="index"></Card>

                  </b-card-group>

                </b-row>
              </b-card-body>
            </b-card>
          </div>

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

<style scoped>
#user-view {
  background-color: #f2f2f2;

  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;

}
</style>
