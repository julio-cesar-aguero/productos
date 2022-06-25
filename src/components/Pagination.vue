<template>
  
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="active">
      <a class="page-link" href="#">2 <span class="sr-only"></span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>

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