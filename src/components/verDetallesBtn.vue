<template>
  <div>
     <button class="btn" @click="() =>{
             visible = !(visible)
              

            }">Ver</button>
            <div v-show="visible " class="rounded d-flex flex-column justify-content-center align-items-center ">
              <div>
                <b-collapse id="item._id" v-model="visible" class="mt-2">
                  <b-card class="bg-transparent">
                    <h2 class="text-dark">Productos</h2>
                    <div class="inf d-flex px-1">
                      <input disabled class="form-control w-35  p-1 m-1 bg-dark text-white" value="Nombre:">
                      <input disabled class="form-control w-25  p-1 m-1 bg-dark text-white" value="Cantidad:">
                      <input disabled class="form-control w-25  p-1 m-1 bg-dark text-white" value="Costo Unitario">
                    </div>
                    
                    <div class="collapse productos d-flex overflow-auto px-1 h-50 w-100 justify-content-between"
                      v-for="(producto, index) in item.productos" :key="index">
                      <input class="form-control w-35  p-1 m-1" type="text" :value="producto.name" disabled>
                      <input class="form-control w-25  p-1 m-1" type="text" :value="producto.cantidad" disabled>
                      <input class="form-control w-25  p-1 m-1" type="text" :value="producto.precio" disabled>
                    </div>
                  </b-card>
                </b-collapse>
              </div>
            </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
    
        visible: false,
       
      
    }
  },

  props: ["item"],

}
</script>

<style scoped>
.collapse{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 400ms;
}
.collapse:hover{
  transform: scale(1.01);

}
</style>