<template> 
    <div>     
      <div class="card m-2" style="width: 18rem;"> 
            <img v-if="seriesObject.poster_path != null" :src="`https://image.tmdb.org/t/p/w342${seriesObject.poster_path}`" class="card-img-top" :alt="seriesObject.name">
            <img v-else src="../assets/img/broken-1.png" alt="Not found">
      </div>
            <div class="card-body d-none"> 
                <p class="card-text">
                    <span>Titotlo Originale: </span>
                        <span>{{seriesObject.original_name}} </span>
                        </p> 
                <p class="card-text"> 
                    {{seriesObject.name}}</p>
                <p class="card-text">
                    <span> 
                        Descrizione:
                    </span>
                        {{seriesObject.overview}}</p> 
                <p>
                    <span> 
                        Originale:
                    </span> 
                    {{seriesObject.original_language}}  
                    <lang-flag 
                        :iso="seriesObject.original_language" /> 
                </p>
                <p>
                    <span>Voto: {{star(seriesObject.vote_average)}} </span>
                </p>
                <p class="d-inline" v-for="number in star(seriesObject.vote_average)" :key="number">
                   <font-awesome-icon icon="fa-solid fa-pepper-hot" />
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