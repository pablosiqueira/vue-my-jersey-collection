<template>
    <div id="spfc-12-away" class="pb-3">
        <Title cresturl="spfc.png" club="São Paulo F.C." desc="2012 Season Away Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://elegant-clarke-e140bf.netlify.app/#/spfc-12-away"/>
    
        <ImageArea img_src = "spfc-12-away/spfc1.jpg" img_alt = "Photo of the 2012 Copa Sudamericana title celebration after the final 
        match. The São Paulo captain Rogério Ceni is raising the throphy and Lucas Moura is on his side with arms raised."/>

        <TextArea content = "The 2012 season was very special for São Paulo FC because, for the first time in its history, the club conquered 
        the Copa Sudamericana in a tense final against argentine club Tigre that refused to play the second half of the last game of
        the final in the Morumbi stadium. São Paulo was leading that game with 2-0."/>

        <ImageArea img_src = "spfc-12-away/spfc3.jpg" img_alt = "The São Pauo team is posing for a photo before a match of the 2012 Copa 
        do Brasil."/>

        <TextArea content = "The team didn't have sucess in the Paulistão and Copa do Brasil where it was knocked out in the semi-finals of 
        both competitions. While in the Brasileirão 1st division, Fluminense was the champion and São Paulo ended in the 4th position, 
        gaining acess to the Copa Libertadores of the next year."/>

        <ImageArea img_src = "spfc-12-away/spfc2.jpg" img_alt = "Luís Fabiano is Running in the center of the image, going towards the 
        camera."/>

        <TextArea content = "Luís Fabiano was the top scorer of the team in that year with 32 goals. He was the 2nd highest scoring player 
        in the 1st division with 17 goals, only behind Fred from Fluminense that scored 20 times."/>
    
        <VideoArea video_src = "https://www.youtube.com/embed/jbnQ8qSd4Ag" video_title = "The 10 most beautiful goals of Luís 
        Fabiano on São Paulo" />

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
  title: 'São Paulo 2012 Away',
  components: {
    Title,
    ImageArea,
    TextArea,
    VideoArea,
    References
  },
  data(){
    return {list_ref: [
        {title: '2012 São Paulo FC season', link: 'https://en.wikipedia.org/wiki/2012_S%C3%A3o_Paulo_FC_season'},
        ]}
  },
  mounted () {
  window.scrollTo(0, 0)
}
}
</script>