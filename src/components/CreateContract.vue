<template>
  <div>
    <el-row>
      <div class="content-header">
        <h3 class="content-header-title">Edit Contract</h3>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="email">Email</label>
        </div>
        <el-input id="email" placeholder="Please input" v-model="contract.email"></el-input>
      </div>
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="name">Name</label>
        </div>
        <el-input id="name" placeholder="Please input" v-model="contract.name"></el-input>
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
  name: 'createContract',
  data () {
    return {
      contract: {
        'name': '',
        'email': ''
      },
      value: ''
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
    submit: function () {
      api.createContract(this.authToken, this.contract)
      this.$router.replace('/dashboard/contracts')
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
