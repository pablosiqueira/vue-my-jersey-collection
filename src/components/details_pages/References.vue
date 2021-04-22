<template>
    <div id = "refences" class="p-2 bd-highlight border-top border-secondary mt-4">  
        <p>References:</p>
        <ul>
          <li v-for="(item,index) in items" :key="item.index" :id="'note-' + increment(index)">
            <a :href="item.link" target="_blank" >{{increment(index)}}. {{item.title}}
            <b-icon icon="box-arrow-up-right" ></b-icon> </a> 
          </li>
        </ul>       
      </div> 
</template>

<script>
export default {
  name: 'References',
  props: {
    items: Array
  },
  methods:{
    increment(value){
      return value + 1;
    }
  }
}
</script>

<style scoped>
.bd-highlight{
    width: 100%;
    max-width: 750px;
    display: block;
    margin-inline: auto;
}
p{
  margin-block-end: 0.5rem;
  font-size: large;
  font-weight: bolder;
  font-family: 'Prompt', sans-serif;   
}
ul{
  margin-block-start: 0.5rem;
  padding-inline-start: 1rem;
}
li{
  list-style: none;
  font-size: medium;
  font-family: 'Nanum Gothic', sans-serif;  
  font-style: italic; 
}
a{
  color: black;
}
a:hover{
  color: red;
}
</style>