<template>
     <b-col sm=12 md=3 class="card p-0 m-3" >
                <img :src="require('@/assets/card/' + imgUrl + '')" class="card-img-top" :alt="desc">
                <div class="card-body">
                  <h4 class="text-center"><b>{{title}}</b></h4>
                  <h5 class="text-center"><i>{{season}}</i></h5>
                  <p class="card-text">
                    <ul class="text_form">
                      <li>Brand: {{brand}}</li>
                      <li>Country: {{country}}</li>
                      <li v-if="personalization">Personalization: {{personalization}}</li>
                    </ul>
                  </p>                  
                </div>
                <div class="mx-3 mb-4"><router-link :to="club_page" class="btn d-block mx-auto" >Details</router-link></div>
            </b-col>  
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

h4{
    font-size: large;
}
h5{
  font-size: medium;
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