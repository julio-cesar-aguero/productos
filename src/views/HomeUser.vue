<template>
  <div class="container-fluid bg-primary d-flex w-100 p-5">
    <div
      class="container justify-content-start w-60 min-h-100 bg-info rounded m-2"
    >
      <h1 class="title m-2">Inicio Usuario</h1>

      <div>
        <b-table :items="items" :fields="fields" striped responsive="sm">
          <template #cell(show_details)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? "Hide" : "Show" }} Details
            </b-button>

            <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
            <b-form-checkbox
              v-model="row.detailsShowing"
              @change="row.toggleDetails"
            >
              Details via check
            </b-form-checkbox>
          </template>

          <template #row-details="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
                <b-col>{{ row.item.age }}</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
                <b-col>{{ row.item.isActive }}</b-col>
              </b-row>

              <b-button size="sm" @click="row.toggleDetails"
                >Hide Details</b-button
              >
            </b-card>
          </template>
        </b-table>
      </div>
    </div>

    <div class="carrito-area w-50 p-2 m-2 bg-secondary rounded">
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
       fields: ['first_name', 'last_name', 'show_details'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          {
            isActive: false,
            age: 89,
            first_name: 'Geneva',
            last_name: 'Wilson',
            _showDetails: true
          },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
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