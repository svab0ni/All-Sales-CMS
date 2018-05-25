<template>
  <div>
    <el-row>
      <div class="content-header">
        <h3 class="content-header-title">Edit user</h3>
      </div>
    </el-row>
      <el-row class="input-group">
        <div class="input-field-wrapper">
          <div class="label-container">
            <label for="email">Email</label>
          </div>
          <el-input id="email" placeholder="Please input" v-model="user[0]['email']"></el-input>
        </div>

        <div class="input-field-wrapper">
          <div class="label-container">
            <label for="name">Name</label>
          </div>
          <el-input id="name" placeholder="Please input" v-model="user[0]['firstname']"></el-input>
        </div>
      </el-row>

      <el-row class="input-group">
        <div class="input-field-wrapper">
          <div class="label-container">
            <label for="lastname">Lastname</label>
          </div>
          <el-input id="lastname" placeholder="Please input" v-model="user[0]['lastname']"></el-input>
        </div>

        <div class="input-field-wrapper">
          <div class="label-container">
            <label for="username">Username</label>
          </div>
          <el-input id="username" placeholder="Please input" v-model="user[0]['username']"></el-input>
        </div>
      </el-row>
      <el-row class="input-group-button">
        <el-button v-on:click="submit">Edit</el-button>
      </el-row>
  </div>
</template>

<script>
import api from '@/api/api'
import { mapGetters } from 'vuex'

export default {
  name: 'editUser',
  mounted: function () {
    this.getUser()
  },
  data () {
    return {
      user: [],
      value: ''
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
    getUser () {
      let vm = this
      api.fetchUser(this.authToken, this.$route.params.id).then(function (response) {
        vm.user.push(response.data)
        console.log(vm.user[0])
      })
    },
    submit: function () {
      api.updateUser(this.authToken, this.user[0]).then(function () {
        this.$router.replace('/dashboard/users')
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
