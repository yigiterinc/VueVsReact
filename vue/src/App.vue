<template>
  <div id="app">
    <form-input-binding />
  </div>
</template>

<script>
import FormInputBinding from '../src/FormInputBinding/FormInputBinding.vue'

export default {
  name: 'App',
  components: { FormInputBinding },
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
