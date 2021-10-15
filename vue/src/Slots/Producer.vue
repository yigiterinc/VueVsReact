<template>
  <div>
    <consumer>
      <custom-button
        text="I am a button in slot 1"
        slot="slot1"
      ></custom-button>
      <h1 slot="slot2">I am in slot 2, yayyy</h1>
      <custom-button text="I am in slot 3" slot="slot3"></custom-button>
    </consumer>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue'
import Consumer from './Consumer.vue'

export default {
  components: {
    CustomButton,
    Consumer,
  },
}
</script>

<style></style>
