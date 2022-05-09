<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <a class="navbar-brand" href="#">Rod Select</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#"
          >Inicio</a
        >
        <a v-if="token" class="nav-item nav-link" @click="cerrarSesion">Cerrar Sesión</a>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapState,mapActions } from "vuex";
export default {
    name: 'Navbar',
    computed: {
    ...mapState(["token"]),
    },
    methods: {
    ...mapActions(["cerrarSesion"]),
  },

};
</script>

<style>
</style>