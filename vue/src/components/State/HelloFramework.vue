<template>
  <div id="app">
    <h1>Hello {{ currentFramework }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFramework: ' Vue!',
      alternative: ' React!',
    }
  },
}
</script>
