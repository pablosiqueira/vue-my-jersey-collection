<template>
    <div id="celtic-18-19-home" class="pb-3">
        <Title cresturl="celtic.png" club="Celtic" desc="18/19 Season Home Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://elegant-clarke-e140bf.netlify.app/#/celtic-18-19-home"/>
    
        <ImageArea img_src = "celtic-18-19-home/celtic3.jpg" img_alt = "The Celtic team is raising the scottish championship throphy."/>

        <TextArea content = "The 18/19 season was very special for the Celtic team because they won all their domestic tournaments: 
                  Scottish Premiership, League Cup and Scottish Cup. They also played the Champions League (knocked out on group 
                  stage in 3rd place) and the Europa League (knocked out on the round of 32)." />

        <ImageArea img_src = "celtic-18-19-home/celtic1.jpg" img_alt = "Four Celtic players are celebrating
                a goal."/>

        <TextArea content = "This jersey was used by many great players like Scott Brown, 
                  Odsonne Édouard, Scott Sinclair and James Forrest." />
    
        <VideoArea video_src = "https://www.youtube.com/embed/ZzqCqgZJooI" video_title = "The 2018/2019 Celtic Treble Treble Winning Season" />
    </div>
</template>

<script>
import Title from '@/components/details_pages/Title'
import ImageArea from '@/components/details_pages/ImageArea'
import TextArea from '@/components/details_pages/TextArea'
import VideoArea from '@/components/details_pages/VideoArea'


export default {
  title:'Celtic 18/19 Home',
  components: {
    Title,
    ImageArea,
    TextArea,
    VideoArea
  },
  mounted () {
  window.scrollTo(0, 0)
    document.getElementById('favicon').href = 'https://raw.githubusercontent.com/pablosiqueira/myjerseycollection/main/details_pages/icons/celtic.ico'
  }
}
</script>