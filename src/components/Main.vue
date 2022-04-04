<template>
          <div class="container-fluid"> 
                <div class="row">
                  <Film v-for="(element, index) in movie" :key="index"  
                  :filmObject="element"/>
                </div>
          </div>
                   
  
     

</template>



<script>
import Film from "./Film.vue";



export default { 
    name : "MainPage", 
    data: function(){
      return{
      
      }
    },   
    props:{
      movie : Array
      }, 
    components:{
        Film,
    }, 

    methods: { 
     
  }, 
}


</script>

<style lang="scss" scoped> 
  @import "../assets/style/style.scss";


</style>