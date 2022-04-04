<template>
  <div id="app">
    <Header 
      @searchHeader="getApiFilm"/>
    <Main 
      :movie="films"/>
              
     
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
    }
  },

  methods: {
     getApiFilm(search){ 
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d755169d575162efa23b254cbdafa103&language=en-US&page=1&include_adult=false&query=${search}` ) 
          .then((response) =>{
            this.films = response.data.results;
            console.table(this.films);
          }) 
        
          .catch((error) =>{
            console.log(error)
          }); 
      } 
    },
}
</script>

<style lang="scss" scoped>


</style>
