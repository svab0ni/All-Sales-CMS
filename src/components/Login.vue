<template>
  <div>
    <div>
      <input type="text" v-model="username" id="username">
      <input type="text" v-model="password" id="password">
      <input type="text" v-model="token" id="token">
      <button type="button" v-on:click="login()"></button>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'

export default {
  name: 'login',
  data () {
    return {
      username: null,
      password: null,
      token: 'OVDJE TREBA ICI TOKEN'
    }
  },
  methods: {
    login () {
      api.login({
        username: this.username,
        password: this.password
      }).then(function (response) {
        this.token = response.data.token
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
