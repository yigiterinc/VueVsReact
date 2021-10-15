<template>
  <div>
    <h3>Yigit's Favorite Cities are:</h3>
    <p v-for="city in favCities" :key="city">{{ city }}</p>
    <h3>Yigit's Favorite Cities in US are:</h3>
    <p v-for="town in favCitiesInUS" :key="town">{{ town }}</p>
    <button @click="addBostonToFavCities">
      Why is Boston not in there? Click to add
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    favCitiesInUS: function () {
      return this.favCities.filter((city) => this.usCities.includes(city))
    },
  },
  data() {
    return {
      favCities: [
        'Istanbul',
        'München',
        'Los Angeles',
        'Rome',
        'Florence',
        'London',
        'San Francisco',
      ],
      usCities: [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Arizona',
        'San Francisco',
        'Boston',
      ],
    }
  },
  methods: {
    addBostonToFavCities() {
      if (this.favCities.includes('Boston')) return

      this.favCities.push('Boston')
    },
  },
}
</script>

<style></style>
