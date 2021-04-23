<template>
    <div id="celtic-18-19-home" class="pb-3">
        <Title cresturl="sampdoria.png" club="Sampdoria" desc="17/18 Season Home Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://elegant-clarke-e140bf.netlify.app/#/sampdoria-17-18-home"/>
    
        <ImageArea img_src = "sampdoria-17-18-home/sampdoria1.jpg" img_alt = "The Celtic team is raising the scottish championship throphy."/>

        <TextArea content = "The 2017–18 season was Unione Calcio Sampdoria's 61st season in Serie A, 
                  and their 6th consecutive season in the top-flight. The club competed in Serie A and in the Coppa Italia, 
                  finishing 10th in the league after spending most of the campaign in 6th, and being eliminated in the latter 
                  competition in the round of 16. The season was the second in charge for former Empoli manager Marco Giampaolo. 
                  Veteran Italian striker Fabio Quagliarella was the club's top scorer, with 19 league goals." 
                  note = "1"/>

    
        <VideoArea video_src = "https://www.youtube.com/embed/JMKgdbIWIVE" video_title = "Match highlights of Sampdoria (3) 
            against Juventus(1) from the 17/18 season." />

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
  title: 'Sampdoria 17/18 Home',
  components: {
    Title,
    ImageArea,
    TextArea,
    VideoArea,
    References
  },
  data(){
    return {list_ref: [
        {title: '2017–18 U.C. Sampdoria season', link: 'https://en.wikipedia.org/wiki/2017%E2%80%9318_U.C._Sampdoria_season'},
        ]}
  },
  mounted () {
  window.scrollTo(0, 0)
}
}
</script>