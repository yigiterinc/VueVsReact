<template>
  <div>
    <button @click="toggleApplyStyles">Click me</button>
    <p :class="{ textStyle: stylesApplied }">
      Click the button to {{ stylesApplied ? 'unstyle' : 'style' }} me
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stylesApplied: false,
    }
  },
  methods: {
    toggleApplyStyles: function () {
      this.stylesApplied = !this.stylesApplied
    },
  },
}
</script>

<style>
.textStyle {
  font-size: 25px;
  color: red;
  letter-spacing: 120%;
}
</style>
