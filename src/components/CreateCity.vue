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
        <el-input id="name" placeholder="Please input" v-model="city.name"></el-input>
      </div>

      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="acronym">Acronym</label>
        </div>
        <el-input id="acronym" placeholder="Please input" v-model="city.acronym"></el-input>
      </div>
    </el-row>

    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="zipcode">Zipcode</label>
        </div>
        <el-input id="zipcode" placeholder="Please input" v-model="city.zipcode"></el-input>
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
  data () {
    return {
      city: {
        'name': '',
        'zipcode': '',
        'acronym': ''
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
      api.createCity(this.authToken, this.city)
      this.$router.push('/dashboard/cities')
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
