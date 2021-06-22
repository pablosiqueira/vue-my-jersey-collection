<template>
    <div id="manutd-98-99-home" class="pb-3">
        <Title cresturl="mtd.png" club="Manchester United" desc="98/99 Season Home Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://elegant-clarke-e140bf.netlify.app/#/manutd-98-99-home"/>
    
        <ImageArea img_src = "manutd-98-99-home/manutd1.jpg" img_alt = "Manchester United players (Beckham, Giggs, Sheringham and Cole) 
        are forming a free kick barrier during a match in 1999."/>

        <TextArea content = "The 1998–99 season was the most successful season in the history of Manchester United Football Club.
        After finishing the previous season without winning any titles, 
        United won the treble of trophies (Premier League, FA Cup and UEFA Champions League)." />

        <ImageArea img_src = "manutd-98-99-home/manutd2.jpg" img_alt = "The Manchester United squad is celebrating the 98/99 Premier League 
        title in the field. The goalkeeper Peter Schmeichel is holding the throphy."/>

        <TextArea content = "This jersey was used by many great players like David Beckham, Ryan Giggs, Roy Keane, Paul Scholes." />
    
        <VideoArea video_src = "https://www.youtube.com/embed/uigMSfM-_Mk" video_title = "Manchester United FC - Football'S Greatest Teams 
        - Treble Winners - 1998-1999" video_alt = "Video description: Football's Greatest Teams - Manchester United . A profile of the iconic 
         Manchester United team that won the treble in the 1998/99 season. Includes interviews with Sir Alex Ferguson, Peter Schmeichel 
         and Gary Neville."/>
    </div>
</template>

<script>
import Title from '@/components/details_pages/Title'
import ImageArea from '@/components/details_pages/ImageArea'
import TextArea from '@/components/details_pages/TextArea'
import VideoArea from '@/components/details_pages/VideoArea'


export default {
  title: 'Manchester United 98/99 Home',
  components: {
    Title,
    ImageArea,
    TextArea,
    VideoArea
  },
  mounted () {
  window.scrollTo(0, 0)
  document.getElementById('favicon').href = 'https://raw.githubusercontent.com/pablosiqueira/myjerseycollection/main/details_pages/icons/manutd.ico'
}
}
</script>