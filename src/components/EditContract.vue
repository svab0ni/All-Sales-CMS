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
        <el-input id="email" placeholder="Please input" v-model="contract[0]['email']"></el-input>
      </div>
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="name">Name</label>
        </div>
        <el-input id="name" placeholder="Please input" v-model="contract[0]['name']"></el-input>
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
  name: 'editContract',
  mounted: function () {
    this.getContract()
  },
  data () {
    return {
      contract: [],
      value: ''
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
    getContract () {
      let vm = this
      api.fetchContract(this.authToken, this.$route.params.id).then(function (response) {
        vm.contract.push(response.data)
        console.log(response.data)
      })
    },
    submit: function () {
      api.updateContract(this.authToken, this.contract[0])
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
