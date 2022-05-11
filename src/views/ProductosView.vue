<template>
  <div class="about">
    <h2 class="text-bold m-2">Registrar Producto</h2>
    <div
      class="
        w-50
        p-5
        container-fluid
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <input
        class="form-control w-75 m-2 p-2"
        type="text"
        placeholder="Nombre"
        v-model="producto.name"
      />
      <input
        class="form-control w-75 m-2 p-2"
        type="text"
        placeholder="Descripcion"
        v-model="producto.description"
      />
      <button
        class="btn btn-primary w-25 m-2 p-2"
        @click.prevent="agregarProducto"
      >
        Agregar
      </button>
    </div>
    <div class="mt-3" v-for="(item,index) of productos_local" :key="index">
      <div class="alert alert-primary" role="alert">
        <div class="d-flex justify-content-around">

          <div class="d-flex justify-content-center align-items-center">
            {{ index }}   -   {{item.name}}   -   {{item.description}}  -  {{item.imagen}}
          </div>
          <div>
            <button class="btn btn-success m-2 p-2" @click="editarTarea(index)"> OK </button>
            <button class="btn btn-danger m-2 p-2"> X </button>
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
      idProducto: 2,
      editando: false,
      productos_local: [],
      producto: {
        name: "",
        description: "",
        imagen: "",
      },
    };
  },
  computed: {
    ...mapState(["token", "productos"]),
  },
  methods: {
    //@submit.prevent="nuevoProducto(producto)" ...mapActions(["datosProtegidos", "nuevoProducto","eliminarProducto","editarProducto", "cerrarSesion"]),
    agregarProducto: function () {
      console.log("diste click", this.producto.name, this.producto.description);
      this.productos_local.push({
        name: this.producto.name,
        description: this.producto.description,
      })
      this.producto.name = "";
      this.producto.description = "";
    },
    editarTarea: function(index){
      console.log("Editar", index)
    }
    ,
    editar(item) {
      console.log(item);
    },
  },
  created() {
    //this.datosProtegidos();
  },
  mounted() {
    /*:disabled="[editando ? '' : disabled]"
  <div class="productos w-100 bg-light">
      <div class="row d-flex justify-content-center align-items-center row m-1 p-1 w-90 bg-info text-white rounded">
        <div class="col-1 pl-2">ID:</div>
        <div class="col m-2 p-2">NOMBRE:</div>
        <div class="col m-2 p-2">DESCRIPCION:</div>
        <div class="col m-2 p-2">IMAGEN:</div>
        <div class="col m-2 p-2">OPCIONES:</div>
      </div>
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
  },
};
</script>