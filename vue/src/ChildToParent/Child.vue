<template>
  <div>
    <button @click="buttonClicked">Submit</button>
  </div>
</template>

<script>
export default {
  methods: {
    buttonClicked: function () {
      this.$emit('buttonClicked') // Emits a buttonClicked event to parent
    },
  },
}
</script>

<style></style>
