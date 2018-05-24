<template>
  <div>
    <el-row>
      <div class="content-header">
        <h3 class="content-header-title">Create user</h3>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="email">Email</label>
        </div>
        <el-input id="email" placeholder="Please input" v-model="user.email"></el-input>
      </div>

      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="name">Name</label>
        </div>
        <el-input id="name" placeholder="Please input" v-model="user.firstname"></el-input>
      </div>
    </el-row>

    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="lastname">Lastname</label>
        </div>
        <el-input id="lastname" placeholder="Please input" v-model="user.lastname"></el-input>
      </div>

      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="username">Username</label>
        </div>
        <el-input id="username" placeholder="Please input" v-model="user.username"></el-input>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="password">Password</label>
        </div>
        <el-input id="password" placeholder="Please input" v-model="user.password"></el-input>
      </div>
    </el-row>
    <el-row class="input-group-button">
      <el-button v-on:click="submit">Create</el-button>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/api'
import { mapGetters } from 'vuex'

export default {
  name: 'createUser',
  data () {
    return {
      user: {
        'email': '',
        'lastname': '',
        'firstname': '',
        'username': '',
        'password': ''
      }
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
    submit: function () {
      let vm = this
      api.createUser(this.authToken, this.user).then(function (response) {
        vm.$router.push('/dashboard/users')
      })
    }
  }
}
</script>

<style>
  .content-header {
    height: 200px;
    margin-left: 10px;
  }

  .input-group {
    width: 440px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .input-field-wrapper {
    display: inline-block;
    width: 45%;
  }

  .label-container {
    text-align: left;
  }
  .input-group-button {
    width: 440px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    alignment: center;
  }
</style>
