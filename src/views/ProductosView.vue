<template>
  <div class="about">
    <h2 class="text-bold m-2">Registrar Producto</h2>
    <form
      @submit.prevent="nuevoProducto(producto)"
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
        class="w-75 m-2 p-2"
        type="text"
        placeholder="Nombre"
        v-model="producto.name"
      />
      <input
        class="w-75 m-2 p-2"
        type="text"
        placeholder="Descripcion"
        v-model="producto.description"
      />
      <button class="btn btn-primary w-25 m-2 p-2" type="submit">
        Nuevo Producto
      </button>
    </form>
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
          <div class="d-flex justify-content-center align-items-center row m-1 p-1 w-90">
            <div class="d-flex col-1 m-1 align-items-center justify-content-center">
              {{ index }}
            </div>
            <div class="col m-1 p-2">
              <input
                type="text"
                :value="item.name"
                class="form-control bg-ligh col-7 p-3 rounded text-center disabled"
                :disabled="[editando ? '' : disabled]"
              />
            </div>
            <div class="col m-1 p-2">
              <textarea
                type="text"
                :value="item.description"
                class="form-control bg-light col-12 p-4 rounded text-center border disabled"
                :disabled="[editando ? '' : disabled]"
              />
            </div>
            <div class="col m-1 p-2">imagen</div>
            <div class="col-3 m-1 p-2 border-dark rounded">
              <button class="btn btn-success m-2 p-2" >Editar</button>
              <button class="btn btn-warning m-2 p-2" :disabled="[editando ? '' : disabled]">Actualizar</button>
              <button class="btn btn-danger m-2 p-2" @click.prevent="eliminarProducto(item._id)">Eliminar</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      editando: false,
      producto: {
        name: "",
        description: "",
      },
    };
  },
  computed: {
    ...mapState(["token", "productos"]),
  },
  methods: {
    ...mapActions(["datosProtegidos", "nuevoProducto","eliminarProducto", "cerrarSesion"]),
  },
  created() {
    this.datosProtegidos();
  },
  mounted() {},
};
</script>