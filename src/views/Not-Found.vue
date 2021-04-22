<template>
      <div id="error" class="main-div justify-content-center text-center pb-5">
        <h2 class="alert">Code 404 <br> Page Not Found</h2>
        <img src="@/assets/error/cantona.jpg" class="d-block mx-auto img-fluid">
        <h4 class="pt-3 pb-3">Sorry, nothing here.</h4>
        <button @click="$router.go(-1)" class="btn" type="submit">
          <b-icon icon="arrow-left-short" scale="2" ></b-icon> <a>Back</a></button>
      </div>
</template>

<script>

export default {
  title: 'Error 404 - Page Not Found',
  components: {
  
  },

}
</script>

<style scoped>
.b-icon{
  margin-bottom: .1rem;
}
.alert{
  font-weight: bold;
}
.main-div{
    font-weight: normal;
    font-family: 'Prompt', sans-serif;
}
.btn{
  background-color: darkred;
  color: white;
}
.btn:hover{
  color: yellow;
}
.alert{
  padding-top: 4rem;
}
.img-fluid{
  max-height: 400px;
}
</style>