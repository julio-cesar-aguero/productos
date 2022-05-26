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
          <div class="col-8 d-flex flex-column p-4 rounded infCompra  justify-content-start align-items-start bg-info">
            
              <span>Nombre del cliente: </span>
              <small class="m-2"><b>{{ user.name }}</b></small>
            
            
              <small>Cantidad: 0</small>
            
            
              <h4>SubTotal: 0</h4>
          </div>
          <div class="button d-flex justify-content-center align-items-center">
            <button class="btn btn-warning p-4 ">Comprar</button>
          </div>
        </div>
      </div>
      <b-col
        v-for="(item, index) in carro"
        :key="index"
        class="col-12 text-dark"
      >
        <div class="w-100 producto p-1">
          <b-card :header="item.name" class="bg-indigo">
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
import { mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapState(["token", "productos", "carro", "user"]),
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

}
</script>

<style>

</style>