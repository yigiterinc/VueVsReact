<template>
  <div id="app">
    <hello-methods />
  </div>
</template>

<script>
import HelloMethods from './components/Methods/HelloMethods.vue'

export default {
  name: 'App',
  components: { HelloMethods },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
