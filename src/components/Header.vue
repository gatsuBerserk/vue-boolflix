<template>
  <div>
      <div class="container-fluid">
        
        <div class="row my-header align-items-center">
          <div class="col-7">  
              <div class="text-color d-flex align-items-center">
                 <img src="../assets/img/67326110-disegno-del-logo-di-disegno-del-modello-illustrazione-vettoriale-di-icona.jpg" alt="Logo Cinema">
                <p class="mx-2">Boolfix </p>
                <p>Cinema Paradiso</p>
              </div>
          </div>
          <div class="col-5 text-end"> 
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
.my-header{
  background-color:rgb(57, 63, 70) ; 
  border-radius: 20px; 
  height: 100px;
    img{
      width: 80px; 
      border-radius:50% ;
    }
} 
.text-color{
  color: yellow;
}
 button.my-size{
   width: 80px;
 } 
 input.my-border{
   border: 1px solid Tomato; 
   height: 38px;
   width: 150px;
 }

</style>