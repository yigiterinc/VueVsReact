<template>
  <div>
    <h2 v-if="condition1">condition1 is true</h2>
    <h2 v-else-if="condition2">condition2 is true</h2>
    <h2 v-else>all conditions are false</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      condition1: false,
      condition2: false,
    }
  },
}
</script>

<style></style>
