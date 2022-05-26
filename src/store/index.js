import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: ''
    },
    token: null,
    productos: [],
    producto: {},
    carro: [],
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setUser(state, payload){
      state.user.name = payload;
    }
    ,
    setProductos(state, payload) {
      if (payload) {
        state.productos = payload;
      }
    },
    setCarrito(state, payload) {
      state.carro.unshift(payload);
    },
    deleteCarrito(state, payload) {
      var indice = state.carro.indexOf(payload); // obtenemos el indice
      state.carro.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
    },
    deleteProducto(state, payload) {
      state.productos.splice(state.productos.indexOf(state.activeNote), 1);
    },
    aumentarCarrito(state, payload){
      //con inventario usar if(state.carro[payload].cantidad < cantidadTotal){state.carro[payload].cantidad++;}
      state.carro[payload].cantidad++;
    },
    disminuirCarrito(state, payload){
      if(state.carro[payload].cantidad>1){
        state.carro[payload].cantidad--;
      }
    }
  },
  actions: {
    //user
    setUserAction({commit},user){
      commit("setUser",user);

    },
    //carrito
    aumentarCarritoAction({commit}, id){
      commit("aumentarCarrito",id);
    },
    disminuirCarritoAction({commit}, id){
      commit("disminuirCarrito",id);
    },
    agregarCarrito({ commit, state }, articulo) {
      const artFind = state.carro.findIndex(function (item) {
        return item.id === articulo.id;
      });

      if (artFind >= 0) {
        commit("aumentarCarrito", artFind);
        //console.log("encontre", artFind);
        //console.log("quiero modificar", state.carro[artFind].cantidad);
        //state.carro[artFind].cantidad++;
      } else {
        commit("setCarrito", articulo);
      }
    },
    quitarCarro({ commit }, id) {
      console.log(id);
      commit("deleteCarrito", id);
    },
    //Login

    async login({ commit }, usuario) {
      console.log(usuario);
      //try {
      const res = await fetch("http://localhost:5010/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      const resDB = await res.json();
      commit("setUser",resDB.name);
      try {
        console.log(resDB);
        if (!resDB) {
          throw new error("No hay respuesta del servidor :(");
        }
        // Almacenar token
        commit("setToken", resDB.data.token);
        localStorage.setItem("token", resDB.data.token);
        localStorage.setItem("userName", resDB.name);
        localStorage.setItem("Rol", resDB.roles);
        console.log("roles", resDB.roles);
        if (resDB.roles === "admin") {
          router.push({ name: "home" });
        } else {
          router.push({ name: "home-user" });
        }
      } catch (error) {
        console.log("El Error", error.message);
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
      localStorage.removeItem("Rol");
      commit("setToken", null);
      commit("setUser", null);

      console.log(router.currentRoute.name);
      if (router.currentRoute.name != "login") router.push({ name: "login" });
    },

    //Solicitar Productos

    async datosProtegidos({ commit }) {
      try {
        const res = await fetch("http://localhost:5010/api/admin/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });

        // Almacenar Productos

        //Vuex

        const dataDB = await res.json();
        console.log(dataDB);
        commit("setProductos", dataDB);

        //localStorage

        localStorage.setItem("productos", JSON.stringify(dataDB));
      } catch (error) {
        console.log(error);
      }
    },

    // Nuevo Producto https://jwt-api-rod.herokuapp.com/api/admin/nuevo-producto/

    async nuevoProducto({ commit }, producto) {
      var myHeaders = new Headers();

      myHeaders.append("auth-token", localStorage.getItem("token"));

      var formdata = new FormData();

      formdata.append("name", producto.name);
      formdata.append("description", producto.description);
      formdata.append("imgProducto", producto.imgProducto);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:5010/api/admin/nuevo-producto/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },

    // Eliminar Producto

    async eliminarProducto({ commit }, id) {
      try {
        const res = await fetch(
          "http://localhost:5010/api/admin/eliminar/" + id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        );

        //Respaldo lista Actual

        const data = this.state.productos;

        // Si no existe respuesta del servidor
        const dataDB = await res.json();
        if (!dataDB) {
          return new Error("¡ Imposible Eliminar !");
        }
        // Eliminar producto de lista local
        await data.splice(id, 1);
        commit("deleteProducto", id);
        // Actualizar Lista
        //commit("setProductos", data);
      } catch (error) {
        console.log(error.message);
      }
    },

    // Actualizar Articulo

    async editarProducto({ commit }, productoUpdate) {
      console.log("Vuex", productoUpdate);
      const data = {
        name: productoUpdate.name,
        description: productoUpdate.description,
        imgProducto: productoUpdate.imgProducto,
      };
      console.log("Vuex data", productoUpdate);
      try {
        const res = await fetch(
          "http://localhost:5010/api/admin/editar/" + productoUpdate.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify(data),
          }
        );
        const dataDB = await res.json();

        //commit("deleteProducto", dataDB);
        // Almacenar Productos
        console.log("editado", dataDB);
        //localStorage.setItem("productos", JSON.stringify(dataDB));
        //router.push({name: 'home'})
      } catch (error) {
        console.log(error);
      }
    },
  },
});
