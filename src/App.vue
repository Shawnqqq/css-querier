<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/css.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  border:0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 12px;
}
</style>
