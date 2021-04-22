<template>
    <div id="milan-19-20-home" class="pb-3">
        <Title cresturl="milan.png" club="Milan" desc="19/20 Season Home Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://pablosiqueira.github.io/myjerseycollection/details_pages/milan-19-20-home.html"/>
    
        <ImageArea img_src = "milan-18-19-home/milan1.jpg" img_alt = "Milan payers celebrating a goal during a match."/>

        <TextArea content = "In the 19/20 season, Milan only competed in Serie A and in the Coppa Italia. The club was classified 
        for the Europa League but, due to financial fair play problems, it was exluded from the competition. No titles were won on 
        that season. The team placed 6th in the league and it was knocked out from the Coppa Italia in the 
        semi-finals stage losing in the aggregated to Juventus that, later on, lost the final to Napoli."/>

        <ImageArea img_src = "milan-18-19-home/milan3.jpg" img_alt = "Photo from the presentation of Zlatan Ibrahimović in Milan at 
        december 2019. Ibrahimović is holding a Milan jersey where in its back is printed the name Ibrahimović and the number 21."/>

        <TextArea content = "The highlight of the season came with the return of the swedish star Zlatan Ibrahimović in the middle 
        of the season, on 27 december 2019, in a free transfer after the end of his contract with the north american club Los Angeles Galaxy.
        He signed a contract with Milan for six months with an option for extention until the end of the 20/21 season." note = "1"/>

        <ImageArea img_src = "milan-18-19-home/milan2.jpg" img_alt = "Ibrahimović is celebrating a goal with two Milan teammates."/>

        <TextArea content = "Even though Ibra was 38 years old at the time, He proved to still be in great shape, finishing that season
                  with 11 goals and 5 assists in 20 games. Because of that, his contract was extended for the next season." note ="2"/>
    
        <VideoArea video_src = "https://www.youtube.com/embed/sEiPKHHZsW4" video_title = "Zlatan Ibrahimović: goals from the 
        2019/20 season." />

        <References :items = "list_ref" />

    </div>
</template>

<script>
import Title from '@/components/details_pages/Title'
import ImageArea from '@/components/details_pages/ImageArea'
import TextArea from '@/components/details_pages/TextArea'
import VideoArea from '@/components/details_pages/VideoArea'
import References from '@/components/details_pages/References'


export default {
  title: 'Milan 19/20 Home',
  components: {
    Title,
    ImageArea,
    TextArea,
    VideoArea,
    References
  },
  data(){
    return {list_ref: [
        {title: 'NBC Sports: Zlatan welcomes ‘top-level challenge’ at AC Milan', 
        link: 'https://soccer.nbcsports.com/2020/01/03/zlatan-welcomes-top-level-challenge-ac-milan/'},
        {title: 'Wikipedia: Zlatan Ibrahimović', 
        link: 'https://en.wikipedia.org/wiki/Zlatan_Ibrahimovi%C4%87'}
        ]}
  },
  mounted () {
  window.scrollTo(0, 0)
}
}
</script>