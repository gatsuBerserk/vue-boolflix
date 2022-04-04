<template>  
    
      <div class="card m-2" style="width: 18rem;">
            <img :src="`https://image.tmdb.org/t/p/w342${filmObject.backdrop_path}`" class="card-img-top" :alt="filmObject.title">
            <div class="card-body"> 
                <p class="card-text">
                    Titotlo Originale:
                        {{filmObject.original_title}}</p> 
                <p class="card-text">
                    {{filmObject.title}}</p>
                <p class="card-text">
                    Descrizione: 
                        {{filmObject.overview}}</p> 
                <p class="card-text"> 
                    Lingua originale:
                        {{filmObject.original_language}} 
                    <lang-flag 
                        :iso="filmObject.original_language" />  
                </p>
                <p v-for="n in 5 - star(filmObject.vote_average)" :key="n">
                  <i class="fa-solid fa-star fs-1"></i>
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
          return Math.ceil(vote / 2);

        }
    }

}
</script>

<style lang="scss" scoped> 
@import "../assets/style/style.scss"; 

</style>