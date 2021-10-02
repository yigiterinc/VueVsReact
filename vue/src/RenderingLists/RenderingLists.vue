<template>
  <div>
    <h1>Names</h1>
    <ul>
      <li v-for="(person, index) in people" :key="index">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          id: 0,
          name: 'Yigit',
        },
        {
          id: 1,
          name: 'Gulbike',
        },
        {
          id: 2,
          name: 'Mete',
        },
        {
          id: 3,
          name: 'Jason',
        },
        {
          id: 4,
          name: 'Matt',
        },
        {
          id: 5,
          name: 'Corey',
        },
      ],
    }
  },
}
</script>

<style></style>
