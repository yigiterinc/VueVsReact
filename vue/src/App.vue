<template>
  <div id="app">
    <styling />
  </div>
</template>

<script>
import Styling from './components/Styling/Styling.vue'

export default {
  name: 'App',
  components: { Styling },
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
