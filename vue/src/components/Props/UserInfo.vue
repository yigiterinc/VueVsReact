<template>
  <div class="address">
    <p>Name: Yigit</p>
    <Address
      street="randomStrasse"
      :postalCode="80999"
      :houseNumber="32"
    ></Address>
  </div>
</template>

<script>
import Address from '@/components/Address.vue'

export default {
  data() {
    return {}
  },
  components: {
    Address,
  },
}
</script>

<style></style>
