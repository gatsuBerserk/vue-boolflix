<template>
  <div> 
      <pre> {{sendSearchFromApp}}v</pre>
  </div>
</template>

<script>
export default { 
    name : "MainPage", 
    props:{
      sendSearchFromApp : String
    },

}
</script>

<style lang="scss" scoped> 
  @import "../assets/style/style.scss";


</style>