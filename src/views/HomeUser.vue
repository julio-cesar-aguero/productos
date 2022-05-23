<template>
  <div class="container-fluid bg-primary d-flex col-14 pt-5">
    <div class="container justify-content-around col-9 bg-info rounded">
      <h1 class="title m-3 p-5">Inicio Usuario</h1>
      <b-container class="bv-example-row">
        <b-row cols="1" cols-md="2" cols-lg="3">
          <b-col v-for="(item, index) of productos" :key="index">
            <div class="w-100 producto p-1">
              <b-card
                :title="item.name"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 25rem"
                class="w-100"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>

                <b-button href="#" variant="primary"
                  >Agregar al carrito</b-button
                >
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="carrito-area col-3 p-2 m-2 bg-secondary rounded h-60">
      <h2>Carrito</h2>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      productos_local: [],
      fields: ["first_name", "last_name", "show_details"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  computed: {
    ...mapState(["token", "productos"]),
  },
  methods: {
    ...mapActions(["datosProtegidos"]),
  },
  created() {
    this.datosProtegidos();
    this.productos_local = localStorage.getItem("productos");
    this.productos_local = JSON.parse(this.productos_local);
  },
  watch: {},
};
</script>

<style>
</style>