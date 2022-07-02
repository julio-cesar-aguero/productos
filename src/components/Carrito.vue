<template>
  <div id="carrito" header="carrito" class="
      border
      carrito-area
      col-12
      d-flex
      flex-column
      text-white
      rounded
      h-50
    ">
    <div class="rounded col-12 text-dark d-flex flex-column">
      <div class="container d-flex flex-column justify-content-between my-1">
        <div class="
            col-12
            d-flex
            flex-column
            p-4
            rounded
            infCompra
            justify-content-start
            align-items-start
            text-white
          ">
          <small>Cantidad: {{ totalCantidad }}</small>

          <h4>Total: {{ totalPrecio }}</h4>
        </div>
        <div class="
            buttons-gen
            
          ">
          <button class="button-gen-a btn" @click="vaciarCarro">Vaciar Carrito</button>
          <ModalVenta class="button-gen-b" :class="totalCantidad > 0 ? '' : 'disabled'"></ModalVenta>
        </div>
      </div>
    </div>
    <b-col v-for="(item, index) in carro" :key="index" class="col-12 text-dark">
      <div class="w-100 producto p-1">
        <b-card id="card" >
          <div class="d-flex justify-content-around contenido p-1">
            <div class="
                inf
                col-12
                d-flex
                align-items-center
                justify-content-between
              ">
              <b-card-text>
                <p id="name-item">{{ item.name }}</p>
              </b-card-text>
            </div>
            <div class="rigth d-flex flex-column">
              <div class="options col-12">
                <b-button class="btn-quitar w-100" @click.prevent="quitarCarro(item.id)" >
                  X
                </b-button>
              </div>
            </div>
          </div>
          <span id="cantidad-item">Cantidad:</span>
          <div class="precio m-2 d-flex justify-content-center pb-1">
            <button class="
                btn-min
                rounded
                col-2
                w-20
                d-flex
                justify-content-center
                align-items-center
                text-white
              " @click.prevent="disminuirCarritoAction(index)">
              -
            </button>
            <div class="col-4 cantidad font-italic">
              <h2 class="title">{{ item.cantidad }}</h2>
            </div>

            <button class="
                btn-max
                rounded
                col-2
                w-40
                d-flex
                justify-content-center
                align-items-center
                text-white
              " @click.prevent="aumentarCarritoAction(index)">
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
    ...mapGetters(["totalCantidad", "totalPrecio"]),
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
    vaciarCarro() {
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

<style scoped>
/*Estilos contenedor carrito*/
#carrito{
  background-color: #2e2322;
  color: #2091d8;
}
.infCompra small{
  color: #f8efed;
  font-weight: 700;
}
.infCompra h4{
  color: #ebebeb;
}
/* Estilos de tarjeta de productos del carrito*/
#card{
  background-color: #c3daed;
}
#name-item{
  color: #2e2322;
  font-weight: 800;
}
#cantidad-item{
  font-weight: 400;
}
.buttons-gen{
  background-color: #2091d8;
  display: flex;
  padding: 1em;
}
.button-gen-a, .button-gen-b{
margin: 0.5em;
}
.button-gen-a{
  background-color: #f8efed;
  
}
.btn-min,
.btn-max{
  background-color: #f1632a;
}

.btn-quitar{
  color: #f1632a;
}
#card:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>