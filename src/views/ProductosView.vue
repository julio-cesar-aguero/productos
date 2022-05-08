<template>
  <div class="about">
    <br />
    <button href="/" @click="cerrarSesion">Cerrar sesion</button>
    <br />
    <h1>{{ token }}</h1>
    <div
      class="
        w-50
        p-3
        container-fluid
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <h2>Nuevo Producto</h2>
      <input class="w-75 m-2 p-2" type="text" />
      <input class="w-75 m-2 p-2" type="text" />
      <input
        class="w-75 m-2 p-2"
        type="file"
        name="producto-img"
        accept="image/png, image/jpeg"
      />
      <button class="btn btn-primary">Enviar</button>
    </div>
    <div class="productos bg-info w-100">
      <h1>zoe</h1>
      <ul id="example-1">
        <li v-for="(item, index) in productos" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["token", "productos"]),
  },
  methods: {
    ...mapActions(["datosProtegidos", "cerrarSesion"]),
  },
  created() {
    this.datosProtegidos();
  },
  mounted() {},
};
</script>