<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'I am a button component',
    },
  },
}
</script>

<style></style>
