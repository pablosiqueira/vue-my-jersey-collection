<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand font-lobster fs-2"><router-link to="/home">My Jersey Collection</router-link></a>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <ul class="navbar-nav">
              <li>
                <router-link to="/home" class="nav-link active nav_item text_form">Home</router-link>
              </li>
              <li>
                <router-link to="/jersey-list" class="nav-link active nav_item text_form">List</router-link>
              </li>
              <li>
                <a class="nav-link active nav_item text_form" aria-current="page" href="https://pablosiqueira.github.io/" target="_blank">
                Other Projects</a>
              </li>
            </ul>
            <b-navbar-nav class="ml-auto">
              <span class="navbar-brand font-lobster fs-2">By Pablo Siqueira</span>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
nav{
    position: fixed;
    top: 0;
}
a, nav, .navbar-toggler {
  color: white;
}
a:hover{
  color: yellow;
}
.font-lobster{
    font-family: 'Lobster', cursive;
    color: white;
}
li, .navbar-text{
    font-family: 'Nanum Gothic', sans-serif;
}
.navbar{
  background-color: darkred;
}
</style>