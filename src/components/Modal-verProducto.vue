<template>
  <div>
    <b-btn v-b-modal="'modal-producto-' + index">Ver</b-btn>
    <b-modal :id="'modal-producto-' + index" size="xl" title="BootstrapVue">
      <div class="producto">
        <div class="detalles-producto">
          <h3 class="name text-center">{{ producto.name }}</h3>
          <div class="container-description">
            <span class="description">{{ producto.description }}</span>
          </div>

          <div class="cantidad">
            <small><b>Disponible:</b></small>
            <input class="form-control w-25 m-2 p-3 text-center" type="text" placeholder="1" disabled />
          </div>
          <h4 class="title">$ {{ producto.precio }}</h4>

        </div>
        <div class="d-flex">
          <div class="img bg-dark  d-flex">
            <img src="https://picsum.photos/500/300" alt="">
          </div>
          <div class="d-flex flex-column">
            <div class="img  d-flex">
              <img src="https://picsum.photos/90/90" alt="">
            </div>
            <div class="img  d-flex">
              <img src="https://picsum.photos/90/90" alt="">
            </div>
            <div class="img  d-flex">
              <img src="https://picsum.photos/90/90" alt="">
            </div>
            <div class="img  d-flex">
              <img src="https://picsum.photos/90/90" alt="">
            </div>
          </div>

        </div>


      </div>

    </b-modal>
  </div>
  <!--
  <div>
    
    <b-btn v-b-modal="modalId(index)">Launch demo modal</b-btn>
    <b-modal :id="'modal' + index" title="Bootstrap-Vue">
      <p clas="my-4">Hello from modal {{ index }}!</p>
    </b-modal>
  </div>
-->


</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  props: ["index", "producto"],
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@100;200;300;400;500;600;700;800&display=swap');

* {
  font-family: 'Anek Malayalam', sans-serif;
  font-weight: 400;
}

.producto {
  display: flex;
  padding: 0.5em;
  margin: 0.5em;
  width: 100%;
}

.detalles-producto {
  width: 40%;
  padding: 1em;
}

.name,
.description,
.title {
  padding: 0.6em;
  font-size: 1.1em;
  color: rgba(19, 12, 12, 0.9);
}

.cantidad {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0.7em;
}

.container-description {
  font-weight: 400;
  font-size: 0.8em;
  padding: 1.1em;
  margin: 0.6em;
  border: 1px solid rgba(0, 0, 0, 0.297);
  border-radius: 5px;
}

.title {
  font-size: 1.7em;
}

.img {
  padding: 0.5em;
  border-radius: 5px;
}

.img img {
  border-radius: 5px;
  overflow: hidden;

}

.img img:hover {
  transform: scale(0.99999);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
