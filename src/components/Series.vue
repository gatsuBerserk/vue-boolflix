<template>  
    
      <div class="card m-2" style="width: 18rem;">
            <img :src="`https://image.tmdb.org/t/p/w342${seriesObject.backdrop_path}`" class="card-img-top" :alt="seriesObject.name">
            <div class="card-body"> 
                <p class="card-text">
                    Titotlo Originale:
                        {{seriesObject.original_name}}</p> 
                <p class="card-text">
                    {{seriesObject.name}}</p>
                <p class="card-text">
                    Descrizione: 
                        {{seriesObject.overview}}</p> 
                <p>Lingua Originale: {{seriesObject.original_language}}  
                    <lang-flag 
                        :iso="seriesObject.original_language" /> 
                </p>
                <p class="card-text" v-for="n in 5 - star(filmObject.vote_average)" :key="n">
                    <i class="fa-solid fa-star"></i> 
                </p>
            </div>
        </div>
</template>

<script> 
export default { 
    name: "SeriesCard", 
    props:[
        "seriesObject"], 
     methods:{
        star: function (n){
          return Math.ceil(n / 2);

        }
    }


}
</script>

<style lang="scss" scoped> 
@import "../assets/style/style.scss"; 

</style>