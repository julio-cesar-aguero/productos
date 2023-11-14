<template>
  <b-navbar toggleable class="navbar d-flex" fill sticky>
    <b-navbar-brand href="/login">
      <div id="logo-container"><img src="../assets/rodselect.png" alt=""></div>
    </b-navbar-brand>
    <div class="d-flex align-items-center">
      <b-navbar-form toggleable>
        <SidebarVue></SidebarVue>
      </b-navbar-form>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
    </div>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Cerrar Sesión</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import SidebarVue from "./Sidebar.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapState(["token", "carrito", "user"]),
  },
  components: {
    SidebarVue,
  }
  ,
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
};
</script>

<style scoped>
.navbar {
  background-color: #E7F6F2;
  font-weight: 300;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#logo-container{
  width: 100px;
  height: 60px;
}
#logo-container img{
  width: 100%;
  height: 100%;
}

.title {
  color: #395B64;
  font-weight: 200;
}
</style>