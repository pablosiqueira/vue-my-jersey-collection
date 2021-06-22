<template>
      <div class="pt-5 pb-2">
        <section class = "text-center title pt-4 pb-1">
          <h1 class="pb-1">Jersey List</h1>
          <h4>Total of 10 jerseys from 8 different countries.</h4>
        </section>
      
        <b-container fluid class="p-4 bg-light main">
          <b-row class="text-center" align-h="center">

            <b-col v-for="club in clubs" :key="club.index" class="p-4">
              <router-link :to="club.page" class="link">
              <b-img :src="require('@/assets/card/' + club.imgurl + '')"  center rounded="circle" :class="club.imgstyle"
              :alt="description"></b-img>
              <h5 class="pt-2">{{club.name}}</h5>
              <h6>{{club.kit}}</h6>
              </router-link>
            </b-col>

          </b-row>
        </b-container>

        

      </div>
</template>

<script>

export default {
  title: 'Jersey List',
  components: {
  },
  data(){
    return { clubs: [
      {name: 'Manchester United', kit: '98/99 Home', imgurl: 'manutd.jpg', page:'/manutd-98-99-home', imgstyle: 'img-1',
      description: 'David Beckham wearing the Manchester United home jersey of the 98/99 season during a match.'},
      {name: 'Borussia Dortmund', kit: '17/18 Home', imgurl: 'borussia1.jpg', page:'/borussiadortmund-17-18-home', imgstyle: 'img-2',
      description: 'Marco Reus wearing the 17/18 season home kit of Borussia Dortmund during a match.'},
      {name: 'France', kit: '2008 Home', imgurl: 'france.jpg', page:'/france-08-home', imgstyle: 'img-1',
      description: 'Thierry Henry wearing the blue french kit during a match in 2008. He is holding the ball of the game after a goal.'},
      {name: 'Celtic', kit: '18/19 Home', imgurl: 'celtic.jpg', page:'/celtic-18-19-home', imgstyle: 'img-1',
      description: 'Celtic player wearing the home jersey of the team during a match from the 18/19 season.'},
      {name: 'Sampdoria', kit: '17/18 Home', imgurl: 'samp1.png', page:'/sampdoria-17-18-home', imgstyle: 'img-1',
      description: 'A Sampdoria player wearing the team home jersey during a match from the 17/18 season.'},
      {name: 'HJK', kit: '13/14 Home', imgurl: 'hjk.jpg', page:'/hjk-13-14-home', imgstyle: 'img-1',
      description: 'HJK palyer with his right arm raised wearing the team home jersey during a match in 2014.'},
      {name: 'Milan', kit: '19/20 Home', imgurl: 'milan.jpeg', page:'/milan-19-20-home', imgstyle: 'img-1',
      description: 'Ibrahimović wearing the Milan home jersey during a match of the 19/20 season.'},
      {name: 'São Paulo', kit: '2012 Away', imgurl: 'spfclf.jpg', page:'/spfc-12-away', imgstyle: 'img-1',
      description: 'Luís Fabiano is wearing the 2012 away jersey of São Paulo. He is running with his right fist raised.'},
      {name: 'Manchester United', kit: '94/95 Away', imgurl: 'cantona.jpg', page:'/manutd-94-95-away', imgstyle: 'img-1',
      description: 'Eric Cantona wearing the Manchester United away jersey of the 95/96 season.'},
      {name: 'Ajax', kit: '94/95 Home', imgurl: 'ajax.jpg', page:'/ajax-94-95-home', imgstyle: 'img-2',
      description: 'Jari Litmanen running and screaming during an Ajax match.'},
    ]
    }
  },
  mounted () {
  window.scrollTo(0, 0)
  document.getElementById('favicon').href = 'https://raw.githubusercontent.com/pablosiqueira/myjerseycollection/main/details_pages/icons/favicon.ico'
}
}
</script>

<style scoped>
.img-1, .img-2{
    height: 150px;
    width: 150px;
    object-fit: cover;
    transition: .5s;
}
.img-1:hover, .img-2:hover{
    transform: scale(1.1);
}
.img-1{
  object-position: top;
}
.img-2{
  object-position: 10%;
}

.main{
  max-width: 1200px;
  background-color: transparent!important;
}
.link, section{
  color: black;
}

h5,h6{
    font-family: 'Prompt', sans-serif;
}
h5{
  font-weight: bold;
}
h4{
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 600;
  font-style: italic;
}
h1{
  font-size: xxx-large;
  font-family: 'Lobster', cursive;
}
</style>