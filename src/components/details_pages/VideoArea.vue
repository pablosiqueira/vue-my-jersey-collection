<template>
    <div class="p-2 bd-highlight d-block mx-auto ">
              <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" :src="video_src"
                     :title="video_title" :alt="video_alt"></iframe>
                </div>
            </div>

</template>

<script>
export default {
  name: 'VideoArea',
  props: {
    video_src : String,
    video_title : String,
    video_alt : String
  }
}
</script>

<style scoped>
.bd-highlight{
    max-width: 750px;
}
</style>