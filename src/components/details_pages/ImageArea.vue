<template>
    <div class="p-2 bd-highlight d-block mx-auto">
            <p>
            <img :src="require('@/assets/details_pages/pages/' + img_src + '')" class="img-fluid d-block mx-auto" 
            :alt="img_alt">
            </p>
    </div> 
</template>

<script>
export default {
  name: 'ImageArea',
  props: {
    img_src : String,
    img_alt : String
  }
}
</script>

<style scoped>
img{
    max-height: 400px;
    height: auto;
    width: fit-content;   
}
.bd-highlight{
    max-width: 750px;  
}
</style>