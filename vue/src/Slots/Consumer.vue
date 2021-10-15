<template>
  <div>
    <h3>Component in slot 1:</h3>
    <slot name="slot1"></slot>
    <h3>Hello slot1</h3>
    <slot name="slot2"></slot>
    <h3>Component in slot 3:</h3>
    <slot name="slot3"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
