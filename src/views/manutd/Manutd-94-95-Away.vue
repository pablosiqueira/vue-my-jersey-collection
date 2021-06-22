<template>
    <div id="manutd-94-95-away" class="pb-3">
        <Title cresturl="mtd.png" club="Manchester United" desc="94/95 Season Away Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://elegant-clarke-e140bf.netlify.app/#/manutd-94-95-away"/>
    
        <ImageArea img_src = "manutd-94-95-away/manutd1.jpg" img_alt = "Eric Cantona is kicking a hooligan in the match angainst Crystal
        Palcae on january 25 1995"/>

        <TextArea content = "The 94/95 season of the Manchester United was marked by the incident in the away game against Crystal Palace where the french
        star Eric Cantona lost his mind and did a kung-fu style kick at a fan after receiving racist and xenophobic insults. The incident
        ocurred when Cantona was getting off the field after receiving a red card during the match. The punishment for that event was a ban
        of eight months and fines of £10,800 by the club and £10,000 by the Football Association." note = "1" />

        <ImageArea img_src = "manutd-94-95-away/manutd3.jpg" img_alt = "Two United players celebrating a goal"/>

        <TextArea content = "The kick became an iconic moment in the football history alongside the United black away jersey wore by the
        great Eric Cantona. After the ban, Cantona returned to the club and played there until his retirement in 97." note = "2"/>
    
        <VideoArea video_src = "https://www.youtube.com/embed/C7PSY7KYThk" video_title = "Eric Cantona kung-fu kick on Crystal Palace fan."/>

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
  title: 'Manchester United 94/95 Away',
  components: {
    Title,
    ImageArea,
    TextArea,
    VideoArea,
    References
  },
  data(){
    return {list_ref: [
        {title: 'Wikipedia - 1994–95 Manchester United F.C. season', 
        link: 'https://en.wikipedia.org/wiki/1994%E2%80%9395_Manchester_United_F.C._season'},
        {title: 'The Guardian - Eric Cantona and the hooligan: the impact of the kung-fu kick 25 years on', 
        link: 'https://www.theguardian.com/football/2020/jan/25/eric-cantona-kung-fu-kick-hooligan-25-years-later'},
        ]}
  },
  mounted () {
  window.scrollTo(0, 0)
  document.getElementById('favicon').href = 'https://raw.githubusercontent.com/pablosiqueira/myjerseycollection/main/details_pages/icons/manutd.ico'
}
}
</script>

