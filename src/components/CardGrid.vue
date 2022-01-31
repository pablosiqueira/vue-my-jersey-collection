<template>
    <div id="cardgrid">
        <b-container fluid class="pb-3" id="shirts">

        <b-row class="justify-content-center ">

          <Card title = "Manchester United"  season="98/99 Home" brand = "Umbro" country = "England" desc = "David Beckham wearing
                the Manchester United home jersey of the 98/99 season during a match." imgUrl = "manutd.jpg" 
                personalization = "Beckham #7" club_page = "/manutd-98-99-home"/>

          <Card title = "Borussia Dortmund" season="17/18 Home" brand = "Puma" country = "Germany" desc = "Marco Reus wearing the 17/18 season 
            home kit of Borussia Dortmund during a match." imgUrl = "borussia1.jpg" 
                personalization = "Reus #11" club_page = "/borussiadortmund-17-18-home"/>

          <Card title = "Celtic" season="18/19 Home" brand = "New Balance" country = "Scotland" desc = "Celtic player wearing the home jersey of 
                the team during a match from the 18/19 season." imgUrl = "celtic.jpg" 
                club_page = "/celtic-18-19-home"/>

          <Card title = "HJK" season="13/14 Home" brand = "Adidas" country = "Finland" desc = "HJK palyer with his right arm raised 
                wearing the team home jersey during a match in 2014." imgUrl = "hjk.jpg"  personalization="Forsell #9"
                club_page = "/hjk-13-14-home"/>

          <Card title = "Milan" season="19/20 Home" brand = "Puma" country = "Italy" desc = "Ibrahimović wearing the Milan home
                jersey during a match of the 19/20 season." imgUrl = "milan.jpeg"  club_page = "/milan-19-20-home"/>

          <Card title = "São Paulo" season="2012 Away" brand = "Reebok" country = "Brazil" desc = "Luís Fabiano is wearing the
                2012 away jersey of São Paulo. He is running with his right fist raised." imgUrl = "spfclf.jpg"  personalization="L.Fabiano #9"
                club_page = "/spfc-12-away"/>

          <Card title = "Manchester United"  season="95/96 Away" brand = "Umbro" country = "England" desc = "Eric Cantona wearing
                the Manchester United away jersey of the 95/96 season." imgUrl = "cantona.jpg" 
                personalization = "Cantona #7" club_page = "/manutd-94-95-away"/>

            <Card title = "Ajax"  season="94/95 Home" brand = "Umbro" country = "Netherlands" desc = "Jari Litmanen running and
            screaming during an Ajax match." imgUrl = "ajax.jpg" 
            club_page = "/ajax-94-95-home"/>

        </b-row>
        </b-container>
    </div>   
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'CardGrid',
  props: {
    
  },
  components:{
      Card
  }

}
</script>

<style scoped>

</style>