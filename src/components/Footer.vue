<template>
    <footer class="site-footer border-top pt-1" id="info">
      <div class="container pt-3">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6 class="font-lobster">About</h6>
            <p class="text-justify nav_item">Web page created by Pablo Siqueira. Bachelor in Computer Engineering and Science & Techonology 
                by the Federal University of Rio Grande do Norte (UFRN) from Brazil and former exchange student of the Lappeeranta University
              of Technology (LUT) in Finland. For more info, check my 
              <a href="https://pablosiqueira.github.io/" target="_blank">Portifolio Page</a>.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 class="font-lobster">Contact & Networks</h6>
            <ul class="footer-links nav_item">

              <li><a><b-icon icon="envelope"/>  Email: pablo16@outlook.com</a></li>

              <li><a href="https://www.linkedin.com/in/pablo-siqueira-457867150/" target="_blank"><b-icon icon="linkedin"/> Linkedin</a></li>
                  
              <li><a href="http://lattes.cnpq.br/9695010765251628" target="_blank"><b-icon icon="newspaper"/> Curriculum Lattes</a></li>
                
              <li><a href="https://github.com/pablosiqueira" target="_blank"> <b-icon icon="github"/> Github</a></li>
                
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by Pablo Siqueira. Page created using Vue CLI.
            </p>
          </div>
        </div>
      </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

.site-footer
{
  
  bottom: 0;
  width: 100%;
  background-color: darkred;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:white;
 
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0;
}
.site-footer h6
{
  font-family: 'Lobster', cursive;  
  color:white;
  font-size:23px;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  font-weight: bold;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block;
  text-decoration: none;
}
.footer-links a
{
  color:white;
  text-decoration:none;
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  font-weight: bold;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d;
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}

</style>