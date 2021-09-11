<template>
  <div class="address">
    <p>City: {{ city }}</p>
    <p>Street: {{ street }}</p>
    <p>House No: {{ houseNumber }}</p>
    <p>Postal Code: {{ postalCode }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    city: {
      type: String,
      default: 'Munich',
    },
    street: {
      type: String,
      required: true,
    },
    houseNumber: {
      type: Number,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style></style>
