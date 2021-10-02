<template>
  <div id="app">
    <parent />
  </div>
</template>

<script>
import Parent from './ChildToParent/Parent.vue'

export default {
  name: 'App',
  components: { Parent },
}
</script>

<style>
#a RenderingListspp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
