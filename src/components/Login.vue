<template>
  <div v-loading="loading" class="login-block">
    <div class="login-block-inner">
      <h3 style="color: #4CAF50;!important; font-size: 28px; font-weight: 400!important;">All Sales CMS</h3>
      <div class="login-input-div">
        <input class="login-input-field" type="text" v-model="username" id="username" placeholder="username">
      </div>
      <div class="login-input-div">
        <input class="login-input-field"  type="password" v-model="password" id="password" placeholder="password">
      </div>
      <div>
        <el-button v-on:click="login()" class="login-button">LOGIN</el-button>
      </div>
      <div style="text-align: center" v-if="error">
        <span class="errorMsg">
          {{ errorMessage }}
        </span>
      </div>
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
      error: false,
      loading: false,
      errorMessage: ''
    }
  },
  methods: {
    login () {
      if (this.username === null || this.username === '' || this.password === null || this.password === '') {
        this.showError('You cannot leave any fields blank!')
        return
      }
      this.loading = true
      let self = this
      api.login({
        username: this.username,
        password: this.password
      }).then(function (response) {
        if (response.data.token === null) {
          self.loading = false
          self.showError('A user with those credentials does not exist!')
        } else {
          self.$store.commit('setAuthToken', response.data.token)
        }
      })
    },
    showError (str) {
      this.errorMessage = str
      this.error = true
      let self = this
      setTimeout(function () {
        self.error = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.login-block {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.login-block-inner {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.login-input-div {
  font-family: "Roboto", sans-serif;
  outline: none;
  background: #f2f2f2;
  width: 100%;
  border-width: 0px;
  border: none;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.login-input-field {
  font-family: "Roboto", sans-serif;
  background: inherit;
  border: none;
  width: 100%;
  outline: none;
}
.login-button{
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  cursor: pointer;
}
.login-eror {
  color: red;
}
  h3 {
    font-family: "Roboto", sans-serif;
  }
</style>
