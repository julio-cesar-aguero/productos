<template>
  <div class="about">
    <h1>Ruta protegida</h1>
    <span>{{token}}</span>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['token'])
  },
  methods: {
    async datosProtegidos(){
      try {
        const res = await fetch('https://jwt-api-rod.herokuapp.com/api/admin',{
          headers:{
            'Content-Type': 'application/json',
            'auth-token': this.token
          }
        })
        const dataDB = await res.json()
        console.log(dataDB)
      } catch (error) {
        
      }
    }
  },
  created(){
    this.datosProtegidos();
  }

}
</script>