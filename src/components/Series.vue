<template>          
      <div class="card m-2" style="width: 18rem;">  
          <figure>
            <img v-if="seriesObject.poster_path != null" :src="`https://image.tmdb.org/t/p/w342${seriesObject.poster_path}`" class="card-img-top" :alt="seriesObject.name"> 
            <img class="not" v-else src="../assets/img/broken-1.png" alt="Not found">
          </figure>
            <div class="card-body"> 
                <p class="card-text">
                    <span>Titotlo Originale: </span>
                        <span>{{seriesObject.original_name}} </span>
                        </p> 
                <p class="card-text"> 
                    {{seriesObject.name}}</p>
                <p class="card-text overview">
                    <span> 
                        Descrizione:
                    </span>
                        {{reduceDescription}}</p> 
                <p>
                    <span> 
                        Originale:
                    </span> 
                    {{seriesObject.original_language}}  
                    <lang-flag 
                        :iso="seriesObject.original_language" /> 
                </p>
                <p>
                    <span>Voto: {{vote}}</span>
                </p>
                <p class="d-inline" v-for="number in vote" :key="number">
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
        computed:{
            reduceDescription: function(){
                if(this.seriesObject.overview.length  > 100){
                     return this.seriesObject.overview.slice(0,100);
                }else{
                    return document;
                }
            }, 
            vote: function (){
                return Math.round( this.seriesObject.vote_average / 2);
        } 
        },
    //  methods:{
    //     star: function (vote){
    //       return Math.round(vote / 2);
    //     }, 
    // }


}
</script>

<style lang="scss" scoped> 
@import "../assets/style/style.scss";  
.card{
    img.not{
    width: 100%; 
    height: 100%; 
    } 

    .overview{
        height: 100px;
        overflow: auto;
    }

    .card-body{
        display: none;
    }
   
    &:hover{
        figure{
            display: none;          
         }
        .card-body{
        display: block;
        } 
    } 

}

</style>