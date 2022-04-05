<template>  
    
      <div class="card m-2" style="width: 18rem;">
            <img :src="`https://image.tmdb.org/t/p/w342${filmObject.poster_path}`" class="card-img-top" :alt="filmObject.title">
            <div class="card-body"> 
                <p class="card-text">
                    Titotlo Originale:
                        {{filmObject.original_title}}</p> 
                <p class="card-text">
                    {{filmObject.title}}</p>
                <p class="card-text info">
                    Descrizione: 
                        {{filmObject.overview}}</p> 
                <p class="card-text"> 
                    Lingua originale:
                        {{filmObject.original_language}} 
                    <lang-flag 
                        :iso="filmObject.original_language" />  
                </p> 
                <p class="card-text info" > 
                    voto: 
                        {{star(filmObject.vote_average)}} 
                </p> 
                <p class="d-inline" v-for="number in star(filmObject.vote_average)" :key="number">
                   <font-awesome-icon icon="fa-solid fa-pepper-hot" />
                </p>
            </div>
        </div>
</template>

<script>
export default { 
    name: "FilmCard",  
    props:[
        "filmObject"
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