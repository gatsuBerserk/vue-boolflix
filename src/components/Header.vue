<template>
  <div>
      <div class="container-fluid">
        <div class="row"> 
          <div class="col-12 text-end"> 
            <input v-model="search" class="mx-2 rounded-pill my-border p-3" type="text" placeholder="Cerca...">
            <button @click="$emit('searchHeader', search)" class="btn btn-outline-warning rounded-pill my-size">Cerca</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script> 

export default { 
    name : "HeaderSearch",
    data: function(){
      return{
        search: "", 
        films:"", 
      }
    }, 
    methods: {   
     
    }, 

}
</script>

<style lang="scss" scoped> 
 @import "../assets/style/style.scss"; 

 button.my-size{
   width: 80px;
 } 
 input.my-border{
   border: 1px solid Tomato; 
   height: 38px;
   width: 150px;
 }

</style>