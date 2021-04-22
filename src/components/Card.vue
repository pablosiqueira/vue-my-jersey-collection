<template>
    <div id="Card">

     <b-col class="card p-0 m-3" >
                <img :src="require('@/assets/card/' + imgUrl + '')" class="card-img-top" :alt="desc">
                <div class="card-body">
                  <h5 class="card-title text-center">{{title}}</h5>
                  <h5 class="card-subtitle text-center">{{season}}</h5>
                  <p class="card-text">
                    <ul class="text_form">
                      <li v-if="!personalization" class="half-line-top"></li>
                      <li>Brand: {{brand}}</li>
                      <li>Country: {{country}}</li>
                      <li v-if="personalization">Personalization: {{personalization}}</li>
                      <li v-else class="half-line-bottom"></li>
                    </ul>
                  </p>
                  <router-link :to="club_page" class="btn d-block mx-auto" >Details</router-link>
                </div>
            </b-col>
    </div>   
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    season: String,
    brand: String,
    country: String,
    desc: String,
    imgUrl: String,
    personalization: String,
    club_page : String
  }
}
</script>

<style scoped>
.card{
  border-color: darkred;
  max-width: 18rem;
}
.half-line-top{
  padding-top: .15rem;
}
.half-line-bottom{
  padding-bottom: 1.3rem;
}
.card-title{
    font-weight: bold;
}
.card-subtitle{
    font-style: italic;
    font-size: medium;
    margin-top: -0.375rem;
    margin-bottom: 1rem;
}
.btn{
    background-color: darkred;
    border-color: darkred;
    color: white;
}
.btn:hover{
  color:yellow;
}
img{
    object-fit: cover;
    height: 250px;
    object-position: 0 10%;
}
.text_form{
    font-weight: normal;
    font-family: 'Prompt', sans-serif;
    list-style-type: none; /* Remove bullets */
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margins */
}
</style>