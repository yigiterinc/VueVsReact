<template>
  <form action="#">
    <input v-model="username" type="text" />
    <child @buttonClicked="handleButtonClicked" />
  </form>
</template>

<script>
import Child from './Child.vue'

export default {
  components: { Child },
  data() {
    return {
      username: '',
    }
  },
  methods: {
    handleButtonClicked: function () {
      console.log(this.username)
    },
  },
}
</script>

<style></style>
