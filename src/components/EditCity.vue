<template>
  <div>
    <el-row>
      <div class="content-header">
        <h3 class="content-header-title">Edit City</h3>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="name">Name</label>
        </div>
        <el-input id="name" placeholder="Please input" v-model="city[0]['name']"></el-input>
      </div>

      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="acronym">Acronym</label>
        </div>
        <el-input id="acronym" placeholder="Please input" v-model="city[0]['acronym']"></el-input>
      </div>
    </el-row>

    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="zipcode">Zipcode</label>
        </div>
        <el-input id="zipcode" placeholder="Please input" v-model="city[0]['zipcode']"></el-input>
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
  name: 'editCity',
  mounted: function () {
    this.getCity()
  },
  data () {
    return {
      city: [],
      value: ''
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
    getCity () {
      let vm = this
      api.fetchCity(this.authToken, this.$route.params.id).then(function (response) {
        vm.city.push(response.data)
        console.log(vm.city[0])
      })
    },
    submit: function () {
      api.updateCity(this.authToken, this.city[0])
      this.$router.replace('/dashboard/cities')
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
