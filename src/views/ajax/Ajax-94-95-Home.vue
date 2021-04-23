<template>
    <div id="ajax-94-95-home" class="pb-3">
        <Title cresturl="ajax.png" club="AFC Ajax" desc="94/95 Season Home Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://elegant-clarke-e140bf.netlify.app/#/ajax-94-95-home"/>
    
        <ImageArea img_src = "ajax-94-95-home/ajax1.jpg" img_alt = "The Ajax squad is lined up for a team photo before a match."/>

        <TextArea content = "During the 1994–95 Dutch football season, AFC Ajax competed in the Eredivisie. Ajax won a league-cup double. 
        They won their 25th Dutch title in style, not losing a single match all season and scoring 106 goals. Ajax also won their fourth 
        European Cup, defeating A.C. Milan 1-0 in the final. Ajax also won the Intercontinental Cup, defeating Gremio. This Ajax squad is 
        considered to be one of the best teams in football history." note = "1" />

        <ImageArea img_src = "ajax-94-95-home/ajax2.jpg" img_alt = "Three Ajax players celebrating during a match."/>

        <TextArea content = "Most of the squad was composed of now well known dutch players like Seedorf, Davids, Rijkaard, van der Sar, 
        Kluivert, Overmars, Blind and the de Boer brothers. And one of the few foreigners in the team was the foward Jari Litmanen, the 
        greatest finnish player of all time, that was the clubs' top scorer in that season with 25 goals."/>
    
        <VideoArea video_src = "https://www.youtube.com/embed/Em9icyP8tjM" video_title = "Ajax TOP 10 GOALS - Champions League '94/'95."/>

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
  title: "Ajax 94/95 Home",
  components: {
    Title,
    ImageArea,
    TextArea,
    VideoArea,
    References
  },
  data(){
    return {list_ref: [
        {title: 'Wikipedia - 1994–95 AFC Ajax season', 
        link: 'https://en.wikipedia.org/wiki/1994%E2%80%9395_AFC_Ajax_season'},
        ]}
  },
  mounted () {
  window.scrollTo(0, 0)
}
}
</script>