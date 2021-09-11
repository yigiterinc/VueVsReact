<template>
  <div class="main-container">
    <h3 class="label">I am a styled label</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.main-container {
  position: absolute;
  left: 50%;
  top: 45%;
  margin: 0;
  transform: translate(-50%, -50%);
  text-align: center;
}

.label {
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
}
</style>
