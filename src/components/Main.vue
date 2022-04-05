<template>
        <div id="main">
          <div class="container mt-3"> 
                <div class="row justify-content-center "> 
                  <h1>Film</h1>
                  <Film v-for="(element, index) in movie" :key="index"  
                  :filmObject="element"/>
                </div>
          </div> 
          <div class="container"> 
                <div class="row justify-content-center"> 
                  <h1>Serie</h1>
                  <Series v-for="(element, index) in seriesTv" :key="index"  
                  :seriesObject="element"/>
                </div>
          </div> 

        </div>              
  
     

</template>



<script>
import Film from "./Film.vue";
import Series from "./Series.vue";


export default { 
    name : "MainPage", 
    data: function(){
      return{
      
      }
    },   
    props:{
      movie : Array,
      seriesTv : Array
      }, 
    components:{
        Film,
        Series,
    }, 

    methods: { 
     
  }, 
}


</script>

<style lang="scss" scoped> 
  @import "../assets/style/style.scss"; 
  #main{
    margin: 0 auto;
  } 
  h1{
    color: yellow;
  } 

</style>