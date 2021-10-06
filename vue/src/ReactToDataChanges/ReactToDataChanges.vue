<template>
  <div>
    <input v-model="number1" type="number" name="number 1" />
    <input v-model="number2" type="number" name="number 2" />
    {{ sum }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
      sum: 0,
    }
  },
  watch: {
    number1: function (val) {
      this.sum = parseInt(val) + parseInt(this.number2)
    },
    number2: function (val) {
      this.sum = parseInt(this.number1) + parseInt(val)
    },
  },
}
</script>

<style></style>
