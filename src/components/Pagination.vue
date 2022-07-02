<template>
  
  <b-pagination v-model="currentPage" pills :total-rows="rows" ></b-pagination>

</template>

<script>
export default {

}
</script>

<style scoped>
.pagination{
    
    display: flex;
    justify-content: center;
    margin: 0.2em 1em;
    padding: 0.4em 0.8em;
    color: red;
}
.page-item{
    
}
.link{
    background-color: #f2f2f2;
    color: rgba(27, 26, 26, 0.814);
    font-weight: 300;
    font-size: 1.1em;
}
.active .link{
    
    background-color: rgba(255, 0, 0, 0.159);
}

</style>