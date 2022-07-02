<template>
  <b-navbar toggleable class="navbar d-flex" fill sticky>
    <b-navbar-brand href="#">
      NavBar
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
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
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
  background-color: #2091d8;
  font-weight: 300;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title {
  color: aqua;
  font-weight: 200;
}
</style>