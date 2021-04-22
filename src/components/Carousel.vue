<template>
  <div id="carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="50"
      img-height="50"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">

        <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100 img-1" :src="require('@/assets/home/oldtraf.jpg')" alt="image slot">
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100 img-1" :src="require('@/assets/home/signal.jpg')" alt="image slot">
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100 img-1" :src="require('@/assets/home/mt.jpg')" alt="image slot">
        </template>
      </b-carousel-slide>

    
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',  
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
      onSlideStart(slide) {
        this.sliding = true
      },
      // eslint-disable-next-line no-unused-vars
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.img-1{
    max-height: 400px;
    object-fit: cover;
}
.img-2{
    object-position: top;
}
</style>