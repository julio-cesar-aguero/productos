<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar.vue";
export default {
    componets: {
        Navbar: Navbar,
    },
    methods: {
        ...mapActions(["leerToken"]),
    },
    created() {
        this.leerToken();
    },
    components: { Navbar }
};
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
