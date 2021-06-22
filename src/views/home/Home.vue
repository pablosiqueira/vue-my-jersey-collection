<template>
  <div id="home" class="pt-5">

    <Carousel/>

    <section class="pt-3">
        <h1 class="text-center fs-1">Football Jerseys Around The World</h1>
        <h2 class="text-center fst-italic mx-5 pt-2">Every jersey has its own history to tell.</h2>
    </section>

    <CardGrid/>

  </div>    
</template>

<script>
import CardGrid from '@/components/CardGrid'
import Carousel from '@/components/Carousel'


export default {
  name: 'Home',
  title: 'My Jersey Collection',
  components: {
    CardGrid,
    Carousel

  },
  mounted () {
  window.scrollTo(0, 0)
  document.getElementById('favicon').href = 'https://raw.githubusercontent.com/pablosiqueira/myjerseycollection/main/details_pages/icons/favicon.ico'
  }
}
</script>

<style scoped>
h1, h2{
  color: darkred;
}
h1{
    font-family: 'Lobster', cursive;
}
h2{
  font-family: 'Nanum Gothic', sans-serif;
  font-size: x-large;
}
</style>