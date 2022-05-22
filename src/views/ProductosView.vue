<template>
  <div class="about mb-5">
    <form
      class="
        w-50
        p-4
        container-fluid
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
      @submit.prevent="agregarProducto"
    >
      <h2 class="text-bold m-2">Registrar Producto</h2>
      <input
        class="form-control w-75 m-2 p-2"
        type="text"
        placeholder="Nombre"
        v-model="producto.name"
        autofocus
        required
        minlength="5"
      />
      <textarea
        class="form-control w-75 m-2 p-2"
        type="text"
        placeholder="Descripcion"
        v-model="producto.description"
        autofocus
        required
        minlength="30"
      ></textarea>

      <input
        class="form-control w-75"
        type="file"
        @change="handleFileUpload($event)"
      />

      <button class="btn btn-primary w-25 m-2 p-2" @click.prevent="agregarProducto">
        Agregar
      </button>
    </form>

    <b-modal
      id="modal-1"
      title="Actualizar Producto"
      class="w-100"
      hide-footer
      hide-header-close
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <form
        class="
          d-flex
          w-100
          flex-column
          align-items-center
          justify-content-center
          p-2
        "
        @submit.prevent="editar(productoUpdate)"
      >
        <b-form-input
          class="m-2 form-control p-3 text-center"
          type="text"
          placeholder="Nombre"
          v-model="productoUpdate.name"
        />
        <b-form-input
          class="m-2 form-control p-3 text-center"
          type="text"
          placeholder="Descripcion"
          v-model="productoUpdate.description"
        />
        <div
          class="buttons d-flex justify-content-center align-items-center p-4"
        >
          <b-button class="btn btn-danger m-2" @click="hideModal"
            >Cancelar</b-button
          >
          <b-button class="btn btn-warning m-2" type="submit"
            >Actualizar</b-button
          >
        </div>
      </form>
    </b-modal>
    <div class="col-12 container d-flex flex-column align-items-center rounded">
      <div
        class="
          col-12
          d-flex
          justify-content-center
          align-items-center
          bg-info
          text-white
          p-3
        "
      >
        <div class="col-1">ID:</div>
        <div class="col-3">NOMBRE:</div>
        <div class="col-3">DESCRIPCION:</div>
        <div class="col-4">IMAGEN:</div>
        <div class="col-1">OPCIONES:</div>
      </div>
      <div
        class="
          col-12
          d-flex
          justify-content-center
          align-items-center
          text-dark
          p-4
          border border-top-0 border-info
        "
        v-for="(item, index) of productos"
        :key="index"
        v-show="!idProducto"
      >
        <div class="col-1">
          {{ index }}
        </div>
        <div class="col-3">
          {{ item.name }}
        </div>
        <div class="col-3">
          {{ item.description }}
        </div>
        <div class="col-4 w-5 h-5 rounded-circle">
          <img class="w-5 h-5 rounded-circle" width="80" height="80" v-bind:src="'http://localhost:5010/img/productos/' + item.imgProducto" alt="imagen de producto">
          
        </div>
        <div class="col-1">
          <div
            class="col-1 d-flex justify-content-center align-items-center data"
          >
            <b-button
              class="btn btn-warning m-1 p-2"
              @click.prevent="showModal(index)"
              ref="btnShow"
              >Editar</b-button
            >
            <button
              class="btn btn-danger m-1 p-2"
              @click.prevent="eliminar(index, item._id)"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BIconTextareaResize } from "bootstrap-vue";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "warning",
      footerTextVariant: "dark",
      idProducto: false,
      editando: false,
      productos_local: [],
      producto: {
        name: "",
        description: "",
        imgProducto: "",
      },
      productoUpdate: {
        id: "",
        name: "",
        description: "",
        imgProducto: "",
      },
    };
  },
  computed: {
    ...mapState(["token", "productos"]),
  },
  methods: {
    ...mapActions([
      "datosProtegidos",
      "nuevoProducto",
      "eliminarProducto",
      "editarProducto",
      "cerrarSesion",
    ]),
    handleFileUpload(e) {
      this.producto.imgProducto = e.target.files[0];
      
    },
    showModal(index) {
      console.log("modal", index);
      this.productoUpdate.id = this.productos_local[index]._id;
      this.productoUpdate.name = this.productos_local[index].name;
      this.productoUpdate.description = this.productos_local[index].description;
      this.$root.$emit("bv::show::modal", "modal-1");
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
    toggleModal() {
      this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
    },
    agregarProducto: function () {
      //console.log("es vacio ?",.isEmptyObject())
      try {
        if (!this.producto) return new error();
        console.log("imagen frontend");

        this.nuevoProducto(this.producto)
        this.producto.name = "";
        this.producto.description = "";
      } catch (error) {
        console.log("error al agregar", error);
      }
    },
    editar(productoUpdate) {
      console.log("Editar", productoUpdate);
      this.editarProducto(productoUpdate);
      this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
      this.datosProtegidos();
    },
    guardarTarea: function (index) {
      console.log("Editar", index);
      this.idProducto = false;
    },
    eliminar(index, id) {
      //console.log(index);
      //console.log(this.productos_local[index]);

      this.eliminarProducto(id);
      this.datosProtegidos();
      this.productos_local = localStorage.getItem("productos");
      this.productos_local = JSON.parse(this.productos_local);
    },
  },
  watch: {
    productos: {
      handler(old, newValue) {
        if (old ) {
          console.log("Actualizado", newValue);
          this.productos_local = this.productos;
        } else {
          console.log("Vacio");
          this.productos_local = [];
        }
      },
      deep: true,
    },
  },
  created() {
    this.datosProtegidos();
    this.productos_local = localStorage.getItem("productos");
    this.productos_local = JSON.parse(this.productos_local);
  },
  mounted() {
    /*for (var i of this.productos) {
    this.productos_local.push(i);
    }*/
    //this.productos_local = localStorage.getItem('productos');
    // Se parsea para poder ser usado en js con JSON.parse :)
  },
  /*:disabled="[editando ? '' : disabled]"
  <div class="productos w-100 bg-light">
      
      <ul id="example-1" class="list-unstyled">
        
        <li
          class=" w-80 border-bottom border-darkrounded m-3"
          v-for="(item, index) in productos"
          :key="index"
        >
          <div class="d-flex justify-content-center align-items-center row m-1 p-1 w-90" >
            <div class="d-flex col-1 m-1 align-items-center justify-content-center">
              {{ index }}
            </div>
            <div class="col m-1 p-2">
              {{item.name}}
            </div>
            <div class="col m-1 p-2">
              {{item.description}}
            </div>
            <div class="col m-1 p-2">imagen</div>
            <div class="col-3 m-1 p-2 border-dark rounded">
              <button class="btn btn-warning m-2 p-2 text-white" >Editar</button>
              <button class="btn btn-danger m-2 p-2" @click="eliminarProducto(item._id)">Eliminar</button>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center row m-1 p-1 w-90">
            <div class="d-flex col-1 m-1 align-items-center justify-content-center">
              {{ index }}
            </div>
            <div class="col m-1 p-2">
              <input
                type="text"
                :value="item.name"
                class="form-control bg-ligh col-7 p-3 rounded text-center"
              />
            </div>
            <div class="col m-1 p-2">
              <textarea
                type="text"
                :value="item.description"
                class="form-control bg-light col-12 p-4 rounded text-center border"
                
              />
            </div>
            <div class="col m-1 p-2">imagen</div>
            <div class="col-3 m-1 p-2 border-dark rounded">
              <button class="btn btn-success m-2 p-2" >Guardar</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  */
};
</script>