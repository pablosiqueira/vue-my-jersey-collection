<template>
<div id="app">
    <Header/>
    <router-view class="pt-3"/>
    <Footer/>
</div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
