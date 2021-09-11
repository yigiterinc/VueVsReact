<template>
  <div>
    {{ sayHello() }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      to: 'Methods',
    }
  },
  methods: {
    sayHello() {
      return 'Hello ' + this.to
    },
  },
}
</script>

<style></style>
