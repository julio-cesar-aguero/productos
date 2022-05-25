<template>
  <div class="container-fluid bg-primary d-flex col-15 pt-5">
    <div
      class="
        container
        d-flex
        flex-column
        justify-content-start
        col-8
        bg-info
        rounded
      "
    >
      <h1 class="title">Inicio Usuario</h1>
      <b-container class="w-100 col-12 bv-example-row">
        <b-row cols="1" cols-md="2" cols-lg="3">
          <b-col v-for="(item, index) of productos" :key="index">
            <div class="w-100 m-1 producto pb-2">
              <b-card
                :title="item.name"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="w-100"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
      class="
        carrito-area
        col-4
        d-flex
        flex-column
        p-1
        m-2
        bg-secondary
        text-white
        rounded
        h-60
      "
    >
      <h2>Carrito</h2>
      <b-col
        v-for="(item, index) in carro"
        :key="index"
        class="col-12 text-dark"
      >
        <div class="w-100 producto p-1">
          <b-card :header="item.name" class="" footer="">
            <div class="d-flex justify-content-around contenido p-1">
              <div
                class="
                  inf
                  col-6
                  d-flex
                  align-items-center
                  justify-content-between
                "
              >
                <b-card-text>
                  <p>{{ item.description }}</p>
                </b-card-text>
              </div>
              <div class="rigth d-flex flex-column">
                <div class="options col-12">
                  <b-button
                    class="w-100"
                    @click.prevent="quitarCarro(item.id)"
                    variant="danger"
                  >
                    X
                  </b-button>
                </div>
              </div>
            </div>
            <span>Cantidad:</span>
            <div class="precio m-2 d-flex justify-content-center pb-1">
              <div
                class="
                  rounded
                  bg-success
                  col-2
                  w-40
                  d-flex
                  justify-content-center
                  align-items-center
                  text-white
                "
              >
                -
              </div>
              <div class="col-4 cantidad">
                <h2 class="title">{{item.cantidad}}</h2>
              </div>

              <div
                class="
                  rounded
                  bg-success
                  col-2
                  w-40
                  d-flex
                  justify-content-center
                  align-items-center
                  text-white
                "
              >
                +
              </div>
            </div>
            <div class="col-12 rounded d-flex p-1 d-flex flex-column">
              <div class="precio m-1">
                <p>Precio: {{item.precio}}</p>
              </div>

              <div class="precio">
                <h4>${{item.cantidad * item.precio}}</h4>
              </div>
            </div>
          </b-card>
        </div>
      </b-col>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["token", "productos", "carro"]),
  },
  watch: {
    carrito: {
      immediate: true,
      handler(value) {
        console.log("carrito", value);
      },
    },
  },
  methods: {
    ...mapActions(["datosProtegidos", "agregarCarrito","quitarCarro"]),
    agregarCarro(item) {
      const articulo = {
        id: item._id,
        name: item.name,
        description: item.description,
        cantidad: 1,
        precio: 50.0,
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