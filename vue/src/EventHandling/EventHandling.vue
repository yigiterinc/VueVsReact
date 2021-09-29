<template>
  <div>
    <input
      v-model="username"
      id="outlined-basic"
      label="Username"
      variant="outlined"
    />
    <input
      v-model="password"
      id="outlined-basic"
      type="password"
      label="Password"
      variant="outlined"
    />

    <input
      v-model="termsAccepted"
      id="outlined-basic"
      type="checkbox"
      label="Password"
      variant="outlined"
    />

    <Button variant="contained" color="primary" @click="submitForm">
      Submit
    </Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      termsAccepted: false,
    }
  },
  methods: {
    submitForm: function () {
      console.log(this.username, this.password, this.termsAccepted)
    },
  },
}
</script>

<style></style>
