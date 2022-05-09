<template>
  <div class="about">
    
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
    <div class="productos w-100 bg-light">
      <div class="row m-3 p-2 w-80  bg-info text-white rounded">
            <div class="col m-2 p-2 w-1 ">
              ID:
            </div>
            <div class="col m-2 p-2 ">
              NOMBRE:
            </div>
            <div class="col m-2 p-2 ">
              DESCRIPCION:
            </div>
            <div class="col m-2 p-2 ">
              IMAGEN:
            </div>
            <div class="col m-2 p-2 ">
              OPCIONES:
            </div>

          </div>
      <ul id="example-1" class="list-unstyled">
        <li class="w-80 border-bottom border-darkrounded m-3" v-for="(item, index) in productos" :key="index">
          <div class="row m-3 p-3 w-90 ">
            <div class="col m-1 p-2 ">
              {{index}}
            </div>
            <div class="col m-1 p-2 ">
              {{item.name}}
            </div>
            <div class="col m-1 p-2 ">
              {{item.description}}
            </div>
            <div class="col m-1 p-2 ">
              imagen
            </div>
            <div class="col m-1  p-2 border-dark rounded">
              <button class="btn btn-warning m-2 p-2">Actualizar</button>
              <button class="btn btn-danger m-2 p-2">Eliminar</button>
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