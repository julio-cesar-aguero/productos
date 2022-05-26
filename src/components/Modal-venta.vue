<template>
  <div>
    <div>
      <b-button  v-b-modal.modal-1 class="btn btn-danger"
        >Finalizar Pedido</b-button
      >

      <b-modal
        id="modal-1"
        size="lg"
        header-bg-variant="primary"
        title="detalles de compra"
        class="
          modal-title
          col-11
          text-center
          bg-dark
          w-100
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
        hide-header-close
        hide-footer
      >
        <div
          class="
            col-12
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <input
            class="form-control w-75 m-2 p-2"
            type="text"
            :value="user.name"
            autofocus
            required
            minlength="5"
            disabled
          />
          <input
            class="form-control w-75 m-2 p-2"
            type="text"
            :value="totalCantidad"
            autofocus
            required
            disabled
          />
          <input
            class="form-control w-75 m-2 p-2"
            type="text"
            :value="totalPrecio"
            autofocus
            required
            disabled
          />
          <div class="buttons">
            <button id="btn-pay" class="btn btn-warning p-2 m-2" @click="hideModal">Pagar</button>
            <button class="btn btn-danger p-2 m-2" @click="hideModal">Cancelar venta</button>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "modal-venta",

  computed: {
    ...mapState(["token", "productos", "carro", "user"]),
    ...mapGetters(["totalCantidad","totalPrecio"]),
  },
  methods:{
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
  }
};
</script>

