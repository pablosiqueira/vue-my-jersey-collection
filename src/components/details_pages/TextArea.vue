<template>
    <div class="p-2 bd-highlight d-block mx-auto">
        <p>{{content}}<a v-if="note" :href="'#note-' + note"><sup>[{{note}}]</sup></a></p>
    </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    content : String,
    note: String
  }
}
</script>

<style scoped>
p{
    font-size: large;
    font-weight:500;
    font-weight: normal;
    font-family: 'Prompt', sans-serif;
    color: black;
}
.bd-highlight{
    max-width: 750px;  
}
</style>