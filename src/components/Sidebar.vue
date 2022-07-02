<template>
  <div>
    <div v-b-toggle.sidebar-backdrop>
      <div class="cart">
        <img src="../assets/shopping-cart.png" alt="">
        <small>{{totalCantidad}}</small>
      </div>
    </div>

    <b-sidebar id="sidebar-backdrop" title="Sidebar with backdrop" :backdrop-variant="variant" backdrop shadow hide-header>
      <b-col sm="12" md="12" xl="12">
        <div header="carrito-vacio" class="
          border
          carrito-area
          
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
    </b-sidebar>
  </div>
</template>

<script>
import { mapState, mapActions,mapGetters } from "vuex";
import Carrito from './Carrito.vue'
export default {
  computed: {
    ...mapState(["token", "productos", "carro", "user"]),
    ...mapGetters(["totalCantidad", "totalPrecio"]),
  },
components:{
  Carrito
}
}
</script>

<style scoped>
.cart{
  background-color: #22222216;
  position: relative;
  width: 55px;
  margin-right: 100px;
  border-radius: 50%;
  color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.cart:hover{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.cart img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.cart small{
  color: #f2f2f2;
  width: 100%;
  height: 100%;
  font-size: 0.90000001em;
  font-weight: 600;
  position: absolute;
  left: 10%;
  top: 25%;
}
</style>