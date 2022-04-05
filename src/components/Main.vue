<template>
        <div id="Main">
          <div class="container-fluid"> 
                <div class="row">
                  <Film v-for="(element, index) in movie" :key="index"  
                  :filmObject="element"/>
                </div>
          </div> 
          <div class="container-fluid"> 
                <div class="row">
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



</style>