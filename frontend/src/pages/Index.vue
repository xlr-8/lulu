<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <div>
      <button @click="getGreetings">Get Greetings</button>
      <h1 v-if="greetings != ''">{{greetings}}</h1>
      <h1 v-else>{{noGreetings}}</h1>
      <p class="error" v-if="errorMessage"></p>
    </div>
  </q-page>
</template>

<style scoped>
.error {
  color: red;
}
</style>

<script>

import { API } from '../components/Axios'

export default {
  name: 'ShowGreetings',
  data () {
    return {
      greetings: '',
      noGreetings: 'Click it!',
      errorMessage: ''
    }
  },
  methods: {
    getGreetings: function () {
      console.log("Greetings:", this.greetings);
      API.get('/')
        .then(response => {
          console.log(response)
          console.log(response.data)
          console.log(response.data.message)
          this.greetings = response.data.message
        })
        .catch(e => {
          this.errorMessage = e
        })
      console.log("Greetings:", this.greetings);
    }
  }
}
</script>
