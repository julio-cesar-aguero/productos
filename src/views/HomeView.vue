<template>
  <div class="home container p-5">
    <h1>Iniciar Sesión</h1>
    <form
      @submit.prevent="login(usuario)"
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
      <input
        class="w-75 m-2 p-2"
        type="email"
        placeholder="email"
        v-model="usuario.email"
      />
      <input
        class="w-75 m-2 p-2"
        type="password"
        placeholder="pass"
        v-model="usuario.password"
      />
      <button class="btn btn-primary w-25 m-2 p-2" type="submit">Acceder</button>
    </form>
    {{ usuario }}
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      usuario: {
        email: "anahi4@prueba.com",
        password: "123456",
      },
    };
  },
  methods: {
    ...mapActions(["login","cerrarSesion"]),
  },
  mounted() {
    console.log(`the component is now mounted.`)
    this.cerrarSesion();
  }
};
</script>
