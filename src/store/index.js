import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    productos: [],
  },
  getters: {},
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setProductos(state, payload) {
      state.productos = payload;
    },
  },
  actions: {
    //Login

    async login({ commit }, usuario) {
      console.log(usuario);
      try {
        const res = await fetch(
          "https://jwt-api-rod.herokuapp.com/api/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
          }
        );
        const resDB = await res.json();

        // Almacenar token
        commit("setToken", resDB.data.token);
        localStorage.setItem("token", resDB.data.token);
        router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
    },

    //Leer Token

    leerToken({ commit }) {
      if (localStorage.getItem("token")) {
        commit("setToken", localStorage.getItem("token"));
      } else {
        commit("setToken", null);
      }
    },

    //Cerrar Sesion

    cerrarSesion({ commit }) {
      localStorage.removeItem("token");
      localStorage.removeItem("productos");
      commit("setToken", null);
      router.push({ name: "login" });
    },

    //Solicitar Productos

    async datosProtegidos({ commit }) {
      try {
        const res = await fetch(
          "https://jwt-api-rod.herokuapp.com/api/admin/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        );
        const dataDB = await res.json();
        commit("setProductos", dataDB);
        // Almacenar Productos
        console.log("MAX", JSON.stringify(dataDB));
        localStorage.setItem("productos", JSON.stringify(dataDB));
        //router.push({name: 'productos'})
      } catch (error) {
        console.log(error);
      }
    },

    // Nuevo Producto https://jwt-api-rod.herokuapp.com/api/admin/nuevo-producto/

    async nuevoProducto({ commit }, producto) {
      try {
        const res = await fetch(
          "https://jwt-api-rod.herokuapp.com/api/admin/nuevo-producto/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify(producto),
          }
        );
        const dataDB = await res.json();

        //commit("setProductos", dataDB);
        // Almacenar Productos
        console.log("NUEVO PRODUCTO", JSON.stringify(dataDB));
        //localStorage.setItem("productos", JSON.stringify(dataDB));
        //router.push({name: 'home'})
        return
      } catch (error) {
        console.log(error);
      }
    },

    // Eliminar http://localhost:5009/api/admin/eliminar/?id=62752ff0d9180ddfb15901be
    async eliminarProducto({ commit }, id) {
      try {
        const res = await fetch(
          "https://jwt-api-rod.herokuapp.com/api/admin/eliminar/" + id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        );
        const dataDB = await res.json();

        //commit("setProductos", dataDB);
        // Almacenar Productos
        console.log("eliminado", dataDB);
        //localStorage.setItem("productos", JSON.stringify(dataDB));
        //router.push({name: 'home'})
      } catch (error) {
        console.log(error);
      }
    },

    // Actualizar Articulo

    async editarProducto({ commit },item) {
      console.log(item)
      try {
        const res = await fetch(
          "http://localhost:5010/api/admin/editar/" + item.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify(item),
          }
        );
        const dataDB = await res.json();

        //commit("setProductos", dataDB);
        // Almacenar Productos
        console.log("editado", dataDB);
        //localStorage.setItem("productos", JSON.stringify(dataDB));
        //router.push({name: 'home'})
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
