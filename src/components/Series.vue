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
                <p>Voto: {{star(seriesObject.vote_average)}} </p>
                <p class="d-inline" v-for="number in star(seriesObject.vote_average)" :key="number">
                    <span>*</span>
                </p>
            </div>
        </div>
</template>

<script> 
export default { 
    name: "SeriesCard", 
    props:[
        "seriesObject"
        ], 
     methods:{
        star: function (vote){
          return Math.round(vote / 2);
        }
    }


}
</script>

<style lang="scss" scoped> 
@import "../assets/style/style.scss"; 

</style>