<template>
  <div>
    <div  v-b-modal="'modal-producto-' + index">Ver</div>
    <!-- modal -->
    <b-modal :id="'modal-producto-' + index" size="xl" title="BootstrapVue" hide-header>
      <div class="producto">
        <!-- detalles -->
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
        <!-- galeria de imagenes -->
        <div id="galeria" class="d-flex w-60">


          <!--  <img src="https://picsum.photos/500/300" alt="">
            <small>{{ picked }}</small> -->
          <div id="img" class="d-flex text-white">
            <div id="container-img" style="width: 600px">
              <zoom-on-hover  :img-normal="'http://localhost:3000/images/productos/' + producto.folderfile+'/'+producto.imgProducto[picked]"
                :img-zoom="'http://localhost:3000/images/productos/' + producto.folderfile+'/'+producto.imgProducto[picked]" :scale="imageShow.scale"
                @loaded="imageShow.scale" @resized="imageShow.scale"></zoom-on-hover>
              <!-- 
<div class="options">
                <button class="btn btn-light">-</button>
                <div class="scale">
                  <select name="select" v-model="imageShow.scale">
                    <option value="1.0">escala 1.0</option>
                    <option value="2.0" selected>escala 2.0</option>
                    <option value="3.0">escala 3</option>
                  </select>
                </div>
                <button class="btn btn-light">+</button>
              </div>
               -->

            </div>




          </div>

          <div class="container-cards" >
            <div class="picked d-none"  v-for="(img,index) of producto.imgProducto" :key="index">
              <input type="radio" name="option" :id="'item'+index" :value="index" v-model="picked">
            </div>


            <div class="cards"  v-for="(img,index) of producto.imgProducto" :key="index">
            
              <label :id="'selector'+index" class="card" :for="'item'+index">
                <div class="img-prev d-flex" :class="'img'+index">
                  <img :src="'http://localhost:3000/images/productos/' + producto.folderfile+'/'+producto.imgProducto[index]" alt="">
                </div>
              </label>
              


            </div>



          </div>



        </div>


      </div>

    </b-modal>
  </div>



</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";


export default {
  data() {
    return {
      picked: 0,
      selectImg: {
        imgValue: '',
        optionValue: 1
      },
      imageShow: {
        scale: 3.5
      }
      ,




    }
  },


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
}

.producto #galeria {
  position: relative;
  display: flex;
  padding: 0.5em;
  margin: 0.5em;
  width: 90%;
  height: 70vh;
  background-color: rgba(210, 203, 203, 0.264);
  border-radius: 5px;
  overflow: hidden;
}
.container-cards
{
  
  width: 20%;
  padding: 0.2em;
  
  overflow-y: auto;
}
.cards{
  width: 100%;
  margin-right: 0.5em;
}
.card {
  width: 90%;
  margin: 0.3em;
  transform-style: preserve-3d;
  cursor: pointer;
}

.img-prev {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.img-prev img{
  width: 80px;
  height: 80px;
}

#item-1:checked~.cards #selector-1 {
  outline: 2px solid rgba(12, 12, 207, 0.611);
}

#item-2:checked~.cards #selector-2 {
  outline: 2px solid rgba(12, 12, 207, 0.611);
}

#item-3:checked~.cards #selector-3 {
  outline: 2px solid rgba(12, 12, 207, 0.611);
}

#item-4:checked~.cards #selector-4 {
  outline: 2px solid rgba(12, 12, 207, 0.611);
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

.container-img {
  width: 50%;
  height: 300px;
  padding: 0.5em;
  border-radius: 5px;
  overflow: hidden;
}

#img{
  width: 85%;
  
  display: flex;
  justify-content: center;
  align-items: center;
}
#img img{
  width: 100%;
  image-resolution: auto;
}
#img img:hover {
  transform: scale(0.999999);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.options {
  background-color: rgba(25, 24, 24, 0.833);
  padding: 0.2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
}

.options button {
  font-weight: 600;
  padding: 0.2em 0.7em;
  margin: 0.4em;
}

.scale {
  background-color: rgba(35, 35, 133, 0.755);
  padding: 1em;
  color: #f2f2f2;
  font-weight: 700;
  border-radius: 0.6em;
}
</style>
