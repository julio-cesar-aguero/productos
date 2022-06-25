<template>
  <b-row class="justify-content-md-center" align-v="stretch">
    <div id="user-view" class="container col-12">
      <Carrusel class="w-100"></Carrusel>
      <b-col sm="8" md="4" xl="3">
        <div header="carrito-vacio" class="
          border
          bg-dark
          carrito-area
          col-12
          d-flex
          flex-row
          p-1
          text-white
          rounded
          h-10
        " v-if="carro.length === 0">
          <h2>Carrito Vacio</h2>
        </div>
        <Carrito v-else></Carrito>
      </b-col>
      <b-col xl="8" class="">
        <div class=" container d-flex flex-column justify-content-center align-items-center col-12 rounded">

          <h1 class="title">Nuestros Productos</h1>
          <div>

            <b-card-header header-tag="nav">
              <b-nav class="nav-tabs">
                <b-nav-item :active="tab === 1" @click="tab = 1">Más vendidos</b-nav-item>
                <b-nav-item :active="tab === 2" @click="tab = 2">A - Z</b-nav-item>
                <b-nav-item :active="tab === 3" @click="tab = 3">Todos</b-nav-item>
              </b-nav>

            </b-card-header>
            
              <Pagination></Pagination>
            
            <Productos v-if="tab === 1" :tipo="tab" :productos="productos">1</Productos>
            <Productos v-if="tab === 2" :tipo="tab" :productos="productos">2</Productos>
            <Productos v-if="tab === 3" :tipo="tab" :productos="productos">3</Productos>
          </div>
          <Pagination></Pagination>
        </div>
        
      </b-col>

    </div>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Pagination from "../components/Pagination.vue"
import Productos from "../components/Productos.vue"
import Carrusel from "../components/Carrusel.vue";
import Carrito from "../components/Carrito.vue";
import Card from "../components/Card.vue"
export default {

  data() {
    return {
      tab: 1
    }
  },
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
    Productos,
    Pagination
  },
  methods: {
    ...mapActions([
      "datosProtegidos",
      "agregarCarrito",
      "quitarCarro",
      "aumentarCarritoAction",
      "disminuirCarritoAction",
    ]),
    doSomething() {
      console.log('shown');
    }

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
