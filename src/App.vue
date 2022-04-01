<template>
  <div id="app">
    <Header @searchHeader="searchFromHeader"/> 
    <Main :sendSearchFromApp="searchFilm" />
  </div>
</template>

<script>
import Header from './components/Header.vue' 
import Main from "./components/Main.vue"

export default {
  name: 'App', 
  data: function(){
    return{
      searchFilm:"",
    }
  },
  components: { 
    Header, 
    Main,
    
  }, 
  methods: {
    searchFromHeader(search){
      this.searchFilm = search;
      console.log(this.searchFilm + " App")
    },
  },
}
</script>

<style lang="scss" scoped>


</style>
