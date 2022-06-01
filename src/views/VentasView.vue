<template>
  <div>
      <h1>Vista Ventas</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
     mounted() {
        this.leerVentas();
        console.log("ventas")
    },
     methods: {
    ...mapActions([
      "leerVentas",
      
    ]),
   
    }
}
</script>

<style>

</style>