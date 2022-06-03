<template>
  <div
    header="carrito"
    class="
      border
      bg-dark
      carrito-area
      col-4
      d-flex
      flex-column
      m-1
      text-white
      rounded
      h-60
    "
  >
    <div class="bg-secondary rounded col-12 text-dark d-flex flex-column">
      <div class="container d-flex justify-content-between my-2">
        <div
          class="
            col-8
            d-flex
            flex-column
            p-4
            rounded
            infCompra
            justify-content-start
            align-items-start
            bg-dark
            text-white
          "
        >
          <small>Cantidad: {{ totalCantidad }}</small>

          <h4>Total: {{totalPrecio}}</h4>
        </div>
        <div
          class="
            button
            d-flex
            flex-column
            justify-content-center
            align-items-center
            btn btn-prim
            ary
          "
        >
          <button class="btn btn-warning m-1" @click="vaciarCarro">Vaciar Carrito</button>
          <ModalVenta class="btn btn-danger m-1 " :class="totalCantidad > 0 ? '' : 'disabled' "></ModalVenta>
        </div>
      </div>
    </div>
    <b-col v-for="(item, index) in carro" :key="index" class="col-12 text-dark">
      <div class="w-100 producto p-1">
        <b-card  class="bg-indigo">
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
                <p>{{ item.name }}</p>
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
            <button
              class="
                btn btn-success
                rounded
                col-2
                w-20
                d-flex
                justify-content-center
                align-items-center
                text-white
              "
              @click.prevent="disminuirCarritoAction(index)"
            >
              -
            </button>
            <div class="col-4 cantidad font-italic">
              <h2 class="title">{{ item.cantidad }}</h2>
            </div>

            <button
              class="
                btn btn-success
                rounded
                col-2
                w-40
                d-flex
                justify-content-center
                align-items-center
                text-white
              "
              @click.prevent="aumentarCarritoAction(index)"
            >
              +
            </button>
          </div>
          <div class="col-12 rounded d-flex flex-row justify-content-around">
            <div class="precio">
              <p>Precio: {{ item.precio }}</p>
            </div>

            <div class="precio">
              <h2>Total:</h2>
              <h4 class="font-weight-bold text-monospace">
                ${{ item.cantidad * item.precio }}
              </h4>
            </div>
          </div>
        </b-card>
      </div>
    </b-col>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import ModalVenta from "../components/Modal-venta.vue";

export default {
  componets: {
    ModalVenta,
  },
  computed: {
    ...mapState(["token", "productos", "carro", "user"]),
    ...mapGetters(["totalCantidad","totalPrecio"]),
    ...mapMutations(["vaciarCarrito"]),
  },
  methods: {
    ...mapActions([
      "datosProtegidos",
      "agregarCarrito",
      "quitarCarro",
      "aumentarCarritoAction",
      "disminuirCarritoAction",
    ]),
    vaciarCarro(){
      this.$store.commit("vaciarCarrito")
    }
    ,
    agregarCarro(item) {
      //console.log(item)
      const articulo = {
        id: item._id,
        name: item.name,
        cantidad: 1,
        precio: item.precio,
      };
      this.agregarCarrito(articulo);
    },
  },
  components: { ModalVenta },
};
</script>

<style>
</style>