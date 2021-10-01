<template>
  <div>
    <input v-model="inputState" type="text" />
    <br />
    {{ inputState }}
    <br />
    <button @click="changeInputState()">Click to say goodbye</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputState: 'Hello',
    }
  },
  methods: {
    changeInputState: function () {
      this.inputState = 'Goodbye'
    },
  },
}
</script>

<style></style>
