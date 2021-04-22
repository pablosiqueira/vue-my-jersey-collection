<template>
    <div id="Title">
        <section class="page-content pt-5">
            <div class="d-flex flex-column  justify-content-center align-items-center bd-highlight">
              <div class="p-2 bd-highlight ">
                <img :src="require('@/assets/crests/' + cresturl + '')" :alt="club + ' Crest'" class="crest img-fluid pt-3">
              </div>
              <div class="pt-2 bd-highlight ">
                <h1 class="text-center">{{club}}</h1>
              </div>
              <div class="pb-2 bd-highlight ">
                <h2 class="fst-italic mb-3 text-center">{{desc}}</h2>
              </div>
              <div class=" bd-highlight">
                <div class="d-flex flex-column  justify-content-center align-items-center bd-highlight"> 
                  <div class="author-box">
                    <p class="author">{{author}}</p>
                  </div>
                  <div class="author-box">
                    <time :datetime="datet">{{date}}</time>
                  </div>
                </div>  
              </div>
            </div>
            
            <div class="d-flex flex-row  justify-content-center align-items-center bd-highlight pb-3" > 
              <div v-for="item in socialnet" :key="item.index" class="p-2 bd-highlight">                 
                <ShareNetwork
                    :network= "item"
                    :url= "my_url"
                    title= "My Jersey Collection by Pablo Siqueira"
                    :description= "club + ' ' + desc"
                    :hashtags="club">
                    <img :src="require('@/assets/details_pages/social-icons/' + item + '.svg')" class="icon-box">
                </ShareNetwork>
              </div>
            </div>  
            
        </section>
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    cresturl: String,
    club: String,
    desc : String,
    author : String,
    date : String,
    datet : String,
    my_url : String
  },
  data(){
    return {socialnet: ['facebook', 'twitter', 'whatsapp']}
  }
}
</script>

<style scoped>
.page-content{
  color: black;
}
.crest{
    max-height: 200px;
    max-width: 150px;
}
h1{
    font-family: 'Lobster', cursive;
}
h2{
    font-size: large;
}
h2, p, date{
    font-family: 'Nanum Gothic', sans-serif;
}
.author{
    font-weight: bold;
    margin-bottom: 0;
}

.icon-box{
    max-height: 30px;
    max-width: 30px;
    height: 30px;
    width: 30px
}

</style>