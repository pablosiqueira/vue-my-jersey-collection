<template>
    <div id="france-08-home" class="pb-3">
        <Title cresturl="france.png" club="French National Team" desc="Euro 2008 Home Jersey" author="Pablo Siqueira" datet = "2021-02-25 09:00"
        date = "25 February 2021" my_url="https://elegant-clarke-e140bf.netlify.app/#/france-08-home"/>
    
        <ImageArea img_src = "france-08-home/france1.jpg" img_alt = "The players from the french team
                  are lined up for a team photo before a match."/>

        <TextArea content = "After the 2nd place in the 2006 Germany world cup, the French team returned to play an international tournament 
        in the Euro 2008. Despite their great campaign on Germany two years prior, they couldn't get past the group stage in the Euro 
        where they played against Romania, Italy and Netherlands. The jersey was replaced in 2009." />

        <ImageArea img_src = "france-08-home/france2.jpg" img_alt = "The french team is playing against Netherlands in
                the Euro 2008. Henry is jumping in the center of the image while a dutch player is heading the ball behind him. Other three
                french players are marking two dutch players."/>

        <TextArea content = "This jersey was used by many great players like Thierry Henry, Frank Ribéry, Patrice Evra, Nicolas Anelka 
        and Karim Benzema." />
    
    </div>
</template>

<script>
import Title from '@/components/details_pages/Title'
import ImageArea from '@/components/details_pages/ImageArea'
import TextArea from '@/components/details_pages/TextArea'



export default {
  title: 'France 08 Home',
  components: {
    Title,
    ImageArea,
    TextArea,
  },
  mounted () {
  window.scrollTo(0, 0)
  document.getElementById('favicon').href = 'https://raw.githubusercontent.com/pablosiqueira/myjerseycollection/main/details_pages/icons/france.ico'
  }
}
</script>