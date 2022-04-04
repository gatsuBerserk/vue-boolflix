<template>  
    
      <div class="card m-2" style="width: 18rem;">
            <img src="#" class="card-img-top" alt="...">
            <div class="card-body"> 
                <p class="card-text">
                    Titotlo Originale:
                        {{seriesObject.original_name}}</p> 
                <p class="card-text">
                    {{seriesObject.name}}</p>
                <p class="card-text">
                    Descrizionefw-bold: 
                        {{seriesObject.overview}}</p> 
                <p class="card-text">
                    Lingua originale:
                        {{seriesObject.original_language}}</p>
                <p class="card-text">
                    Voto Medio:
                        {{seriesObject.vote_average}}</p>
            </div>
        </div>
</template>

<script>
export default { 
    name: "SeriesCard", 
    props:[
        "seriesObject"]


}
</script>

<style lang="scss" scoped> 
@import "../assets/style/style.scss"; 

</style>