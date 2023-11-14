<template>
  <div>
    <div>
      <b-button v-b-modal.modal-1 class="btn btn-danger">Finalizar Pedido</b-button>

      <b-modal id="modal-1" size="l" classes="my-class" body-bg-variant="my-class" header-bg-variant="dark"
            header-text-variant="light" title="detalles de compra" hide-header-close hide-footer>
        <div class="container-form">
          <form>
            <p v-if="errors.length">
              <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
            </p>

            <div class="name col-12 d-flex justify-content-center align-items-center p-2">
              <label class="col-4 p-1">Nombre:</label>
              <input class="form-control w-100 m-2 p-2" type="text" :value="user.name" autofocus required minlength="5"
                disabled />
            </div>
            <div class="articulos col-12 d-flex justify-content-center align-items-center p-2">
              <label class="col-4 p-1">Articulos:</label>
              <input class="form-control w-100 m-2 p-2" type="number" :value="totalCantidad" autofocus required
                disabled />
            </div>
            <div class="articulos col-12 d-flex justify-content-center align-items-center p-2">
              <label class="col-4 p-1">Costo Total:</label>
              <input class="form-control w-75 m-2 p-2" type="number" :value="totalPrecio" autofocus required disabled />
            </div>
            <div class="articulos col-12 d-flex justify-content-center align-items-center p-2">
              <label class="col-4 p-1">Importe:</label>
              <input class="form-control w-75 m-2 p-2" type="number" v-model="pago.importe"
                @keyup="pago.cambio = totalPrecio - pago.importe" autofocus required />
            </div>
            <div class="articulos col-12 d-flex justify-content-center align-items-center p-2">
              <label class="col-4 p-1">Cambio:</label>
              <input class="form-control w-75 m-2 p-2" type="number" v-model="pago.cambio" autofocus required
                disabled />
            </div>

            <div class="buttons d-flex w-100 justify-content-center">
              <button id="btn-pay" class="btn btn-warning p-2 m-2" @click.prevent="pagar">
                Pagar
              </button>
              <button class="btn btn-danger p-2 m-2" @click.prevent="hideModal">
                Cancelar venta
              </button>
            </div>
          </form>
        </div>

      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "modal-venta",
  data() {
    return {
      errors: ["error"],
      pago: {
        importe: 0,
        cambio: 0,
      },
    };
  },
  computed: {
    ...mapState(["token", "productos", "carro", "user"]),
    ...mapGetters(["totalCantidad", "totalPrecio"]),
  },
  methods: {
    ...mapActions(["nuevaVenta"]),
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
    pagar() {
      this.errors = [];
      try {
        if (this.user.name === " ") {
          this.errors.push("Nombre requerido!");
        }
        if (this.pago.importe < this.totalPrecio) {

          this.errors.push("Ingresa un importe valido!");
        } else {
          const sumaUtilidad = this.carro.map(item => item.utilidad).reduce((prev, curr) => prev + curr, 0);
          console.log(sumaUtilidad);
          const data = [
            {
              usuarioVentas: this.user.name,
              articulosTotal: this.totalCantidad,
              importe: parseFloat(this.pago.importe),
              cambio: Math.abs(parseFloat(this.pago.cambio)),
              Total: this.totalPrecio,
              username: localStorage.getItem("userName"),

            },
            this.carro,
          ];
          console.log(data);
          this.nuevaVenta(data);
          this.hideModal()
        }
      } catch (error) {
        console.log(error.message);
        this.errors.push(error.message);
      }
    },
  },
};
</script>
<style scoped>
.container-form{
  display:flex;
  justify-content: center;
  align-items: center;
}
.container-form form{
  width: 75%;
  padding: 2em;
}
 .my-class {
  background: black;
  color: white;
}

.my-second-class > .modal-dialog > .modal-content > .modal-header {
  background: black;
  color: white;
}
</style>