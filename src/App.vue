<template>
  <div id="app">
    <Header 
      @searchHeader="searchInApi"/>
    
     <Main 
      :movie="films"
      :seriesTv="series"/> 

              
     
  </div>
</template>

<script>
import Header from './components/Header.vue' 
import Main from "./components/Main.vue" 
import axios from "axios"; 

export default {
  name: 'App',  
  components: { 
    Header, 
    Main,

  },  
  data: function(){
    return{
      films:[], 
      series : [],
    }
  },

  methods: { 
    searchInApi:function( search){ 
      
        // Search in movie
        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=d755169d575162efa23b254cbdafa103&language=it-IT&page=1&include_adult=false&query=${search}` ) 
            .then((response) =>{
              this.films = response.data.results;
              console.table(this.films);
            }) 
          
            .catch((error) =>{
              console.log(error)
            }); 
       
        // Search in Series
        axios.
          get(`https://api.themoviedb.org/3/search/tv?api_key=d755169d575162efa23b254cbdafa103&language=it-IT&page=1&include_adult=false&query=${search}` ) 
            .then((response) =>{
              this.series = response.data.results;
              console.table(this.series);
            }) 
          
            .catch((error) =>{
              console.log(error)
            }); 
        },
     
      }, 
}
</script>

<style lang="scss" scoped>


</style>
