<template>
    <div id="hjk-18-19-home" class="pb-3">
        <Title cresturl="hjk2.png" club="HJK Helsinki" desc="13/14 Season Home Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://elegant-clarke-e140bf.netlify.app/#/hjk-13-14-home"/>
    
        <ImageArea img_src = "hjk-13-14-home/hjk1.jpg" img_alt = "The HJK squad is lined up for a team photo before a match."/>

        <TextArea content = "Helsingin Jalkapalloklubi (The Football Club of Helsinki), known as HJK Helsinki, or simply as HJK, is a professional football 
        club based in Helsinki, Finland. The club competes in the Finnish Veikkausliiga. Founded in 1907, the club has spent most of its 
        history in the top tier of Finnish football. The club's home ground is the 10,770-seat Bolt Arena, where they have played since 2000.
        Generally considered as Finland's biggest club, HJK is the most successful Finnish club in terms of championship titles with 30. The 
        club has also won 14 Finnish Cups and 5 Finnish League Cups. Many of Finland's most successful players have played for HJK 
        before moving abroad." note = "1"/>

        <ImageArea img_src = "hjk-13-14-home/hjk2.jpg" img_alt = "Some HJK players are celebrating a goal during a match."/>

        <TextArea content = "HJK is the only Finnish club that has participated in the UEFA Champions League group stage. In 1998, they beat 
        Metz in the play-off round to clinch their place in the competition for the following season. HJK has also participated in the UEFA 
        Europa League, in 2014–15, defeating Rapid Wien in the play-off round. The club's highest score in a European competition came during 
        the 2011–12 season, with a 13–0 aggregate victory over Welsh champions Bangor City, which included a 10–0 home win.
        In 2014, HJK became the first Finnish club to play in the UEFA Europa League group stage after defeating Rapid Wien in the play-off 
        round. HJK, with wins over Torino and Copenhagen at home, finished third in their group with six points." note = "1"/>
    
        <VideoArea video_src = "https://www.youtube.com/embed/uwLNPzJj0U0" video_title = "Highlights of HJK (2) versus Torino (1) 
        in the 14/15 Europa League." />

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
  title: 'HJK 13/14 Home',
  components: {
    Title,
    ImageArea,
    TextArea,
    VideoArea,
    References
  },
  data(){
    return {list_ref: [
        {title: 'Wikipedia: Helsingin Jalkapalloklubi', link: 'https://en.wikipedia.org/wiki/Helsingin_Jalkapalloklubi'},
        ]}
  },
  mounted () {
  window.scrollTo(0, 0)
  document.getElementById('favicon').href = 'https://raw.githubusercontent.com/pablosiqueira/myjerseycollection/main/details_pages/icons/hjk.ico'
}
}
</script>