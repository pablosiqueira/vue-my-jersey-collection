<template>
    <div id="borussia-dortmund-98-99-home" class="pb-3">
        <Title cresturl="borussia.png" club="Borussia Dortmund" desc="17/18 Season Home Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://elegant-clarke-e140bf.netlify.app/#/borussiadortmund-17-18-home"/>
    
        <ImageArea img_src = "borussia-17-18-home/borussia3.jpg" img_alt = "The Borussia Dortmund squad celebrating the conquering of 
        the 16/17 DFB Cup. Marco Reus is raising the throphy in the center of the image."/>

        <TextArea content = "The jersey had its debut when Borussia won their fourth 
                  DFB Cup in the end of the 16/17 season. The final match was against Eintracht Frankfurt." />

        <ImageArea img_src = "borussia-17-18-home/borussia2.jpg" img_alt = "The Borussia Dortmund team is 
        celebrating a goal during a match."/>

        <TextArea content = "Many great players wore the mantle in that season like Marco Reus,Pierre-Emerick 
        Aubameyang, Shinji Kagawa and Jadon Sancho." />
    
        <VideoArea video_src = "https://www.youtube.com/embed/yDWz38BUdHw" video_title = "Borussia Dortmund Best Goals Season 2017/18 - 
        Reus, Batshuayi & More" />
    </div>
</template>

<script>
import Title from '@/components/details_pages/Title'
import ImageArea from '@/components/details_pages/ImageArea'
import TextArea from '@/components/details_pages/TextArea'
import VideoArea from '@/components/details_pages/VideoArea'


export default {
  title: 'Borussia Dortmund 17/18 Home',
  components: {
    Title,
    ImageArea,
    TextArea,
    VideoArea
  },
  mounted () {
  window.scrollTo(0, 0)
  }
}
</script>