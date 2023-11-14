<template>
  <div class="venta-view">
    <div class="d-flex justify-content-around">
      <h1>Vista Ventas</h1>

      <div class="d-flex flex-column p-2 align-items-center justify-content-center">

        <div class="box-reporte">
          <ModalReporte></ModalReporte>
        </div>
      </div>
    </div>
    <b-card-header header-tag="nav">
      <b-nav class="nav-tabs">
        <b-nav-item :active="tab === 1" @click="tab = 1">Ultimas Ventas</b-nav-item>
        <b-nav-item :active="tab === 2" @click="tab = 2">Mas </b-nav-item>
        <b-nav-item :active="tab === 3" @click="tab = 3">Todos</b-nav-item>
      </b-nav>
    </b-card-header>
    <div v-if="tab === 1">
      <Pagination></Pagination>
      <ul id="ventas" class="list-unstyled">
        <li v-for="(item, index) in ventas " :key="index">
          <b-alert show>
            <b-card header="">
              <div class="detalles w-100  d-flex">
                <h5>Venta: {{ index }}</h5>
                <div class="username w-4 d-flex align-items-center flex-column">
                  <label for="username"><b>Nombre Vendedor:</b></label>
                  <input disabled name="username" class="form-control w-75 text-left m-1 bg-white" type="text"
                    v-model="ventas[index].detalles.username">
                </div>
                <div class="productos w-10 d-flex align-items-center flex-column">
                  <label for="productos-total"><b>Total Productos:</b></label>
                  <input disabled name="productos-total" class="form-control w-50 m-1 py-1 text-center  bg-white"
                    type="text" v-model="ventas[index].detalles.articulosTotal">
                </div>
                <div class="username w-10 d-flex align-items-center flex-column">
                  <label for="username"><b>Importe:</b></label>
                  <input disabled name="username" class="form-control w-50 m-1 py-1 text-center  bg-white" type="text"
                    v-model="ventas[index].detalles.importe">
                </div>
                <div class="username w-10 d-flex align-items-center flex-column">
                  <label for="username"><b>Cambio:</b></label>
                  <input disabled name="username" class="form-control w-50 m-1 py-1 text-center  bg-white" type="text"
                    v-model="ventas[index].detalles.cambio">
                </div>
                
                <div class="username w-25 d-flex  flex-column">
                  <label for="username"><b>
                      <h5>TOTAL:</h5>
                    </b></label>
                  <input disabled name="username" class="form-control w-100 m-1 text-center py-1  bg-white" type="text"
                    v-model="ventas[index].detalles.Total">
                </div>
              </div>
              <verDetalles :item="item"></verDetalles>
            </b-card>
          </b-alert>
        </li>
      </ul>
      <Pagination></Pagination>
    </div>
    <div v-if="tab === 2"></div>
    <div v-if="tab === 3"></div>

  </div>
</template>

<script>

import ModalReporte from '../components/Modal-reportePDF.vue';
import verDetalles from '../components/verDetallesBtn.vue'
import Pagination from '../components/Pagination.vue'
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      tab: 1
    }
  },
  components: {
    verDetalles,
    Pagination,
    ModalReporte,

  },
  computed: {
    ...mapState(["ventas"]),
    sortedArray: function () {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }

      return this.arrays.sort(compare);
    }
  },
  mounted() {
    this.leerVentas();
    console.log("ventas", this.ventas)
  },
  methods: {
    ...mapActions([
      "leerVentas",

    ]),

  }
}
</script>

<style scoped>
.venta-view {
  background-color: #f2f2f2;
}

.box-reporte {
  background-color: rgba(0, 0, 255, 0.125);
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 1em;
}
</style>