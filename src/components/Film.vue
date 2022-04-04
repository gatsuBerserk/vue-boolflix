<template>  
    
      <div class="card m-2" style="width: 18rem;">
            <img src="#" class="card-img-top" alt="...">
            <div class="card-body"> 
                <p class="card-text">
                    Titotlo Originale:
                        {{filmObject.original_title}}</p> 
                <p class="card-text">
                    {{filmObject.title}}</p>
                <p class="card-text">
                    Descrizionefw-bold: 
                        {{filmObject.overview}}</p> 
                <p class="card-text"> 
                    Lingua originale:
                        {{filmObject.original_language}} 
                    <lang-flag 
                        :iso="seriesObject.original_language" />  
                </p>
                <p class="card-text">
                    Voto Medio:
                        {{filmObject.vote_average}}</p>
            </div>
        </div>
</template>

<script>
export default { 
    name: "FilmCard",  
    props:[
        "filmObject"
        ]

}
</script>

<style lang="scss" scoped> 
@import "../assets/style/style.scss"; 

</style>