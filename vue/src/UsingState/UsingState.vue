<template>
  <div>
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

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style></style>
