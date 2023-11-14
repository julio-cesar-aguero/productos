<template>
  <b-row class="col-12" align-v="stretch">
    <div id="carrusel" class="col-12">
      <Carrusel class="w-50"></Carrusel>
      <Carrusel class="w-50"></Carrusel>
    </div>
    <div id="user-view" class="container col-12 ">



      <b-col xl="12" class="col-12">
        <div class="container">

          <h1 class="title">Nuestros Productos</h1>
          <div class="container-productos col-12">

            <b-card-header class="d-flex">
              
                <b-nav-item link-classes="text-dark" class="nav-item " :active="tab === 1" @click="tab = 1">
                  Más vendidos</b-nav-item>
                <b-nav-item link-classes="text-dark" class="nav-item " :active="tab === 2" @click="tab = 2">
                  A - Z</b-nav-item>
                <b-nav-item link-classes="text-dark" class="nav-item " :active="tab === 3" @click="tab = 3">
                  Precio</b-nav-item>
              

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
  background-color: #A5C9CA;

  display: flex;
  flex-wrap: wrap;
  gap: 0.2em;
  justify-content: center;
}

#carrusel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  color: #f2f2f2;
  background-color: #2c3333d4;
  border-radius: 5px;

}

.title {

  color: #395B64;
  font-weight: 200;

}

.container-productos {
  background-color: #c9d1d116;
  transition: all 3s;
}

.card-header li a {
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: #060606;

}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  border: none;
  border-radius: 1px;
  padding: 0.5em;
  margin: 0.2em;
  color: #e83a3a14;
  overflow: hidden;
  box-shadow: #2c33331a 0px 0px 0px 1px, #e7f6f243 0px 0px 0px 1px inset;
}

.nav-item .active {
  border-radius: 2px;
  font-weight: 200;
  background-color: #e7f6f2e5;
  color: #dad3d3;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transform: scale(0.99999);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
</style>
