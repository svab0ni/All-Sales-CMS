<template>
  <div>
    <el-row>
      <div class="content-header">
        <h3 class="content-header-title">Edit offer</h3>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="name">Name</label>
        </div>
        <el-input id="name" placeholder="Please input" v-model="offer[0]['name']"></el-input>
      </div>
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="image">Image Url</label>
        </div>
        <el-input id="image" placeholder="Please input" v-model="offer[0]['imageUrl']"></el-input>
      </div>
    </el-row>

    <el-row class="input-group">
      <div class="big-input-field-wrapper">
        <div class="label-container">
          <label for="subtitle">Subtitle</label>
        </div>
        <el-input type="textarea" id="subtitle" placeholder="Please input" v-model="offer[0]['subtitle']"></el-input>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="big-input-field-wrapper">
        <div class="label-container">
          <label for="title">Title</label>
        </div>
        <el-input type="textarea" id="title" placeholder="Please input" v-model="offer[0]['title']"></el-input>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="big-input-field-wrapper">
        <div class="label-container">
          <label for="short-description">Short description</label>
        </div>
        <el-input type="textarea" id="short-description" placeholder="Please input" v-model="offer[0]['shortDescription']"></el-input>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
      <label for="city">City</label>
      <template>
        <el-select id="city" @change="handleCitySelect" placeholder="Select">
          <el-option
            v-for="item in cities"
            :key="item.id"
            :label="item.name"
            :value="item">
          </el-option>
        </el-select>
      </template>
      </div>
      <div class="input-field-wrapper">
        <label for="contract">Contract</label>
        <template>
          <el-select id="city" @change="handleContractSelect" clearable placeholder="Select">
            <el-option
              v-for="item in contracts"
              :key="item.id"
              :label="item.name"
              :value="item">
            </el-option>
          </el-select>
        </template>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
        <template>
          <!-- `checked` should be true or false -->
          <el-checkbox v-bind:checked="offer[0]['published']" v-model="offer[0]['published']">Published</el-checkbox>
        </template>
      </div>
      <div class="input-field-wrapper">
        <template>
          <!-- `checked` should be true or false -->
          <el-checkbox v-bind:checked="offer[0]['processed']" v-model="offer[0]['processed']">Processed</el-checkbox>
        </template>
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
  name: 'editoffer',
  mounted: function () {
    this.getOffer()
    this.getCities()
    this.getContracts()
  },
  data () {
    return {
      offer: [],
      cities: [],
      contracts: [],
      city: []
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
    getOffer () {
      let vm = this
      api.fetchOffer(this.authToken, this.$route.params.id).then(function (response) {
        vm.offer.push(response.data)
        console.log(vm.offer)
      })
    },
    getCities () {
      let vm = this
      api.fetchCities(this.authToken).then(function (response) {
        for (let i in response.data) {
          vm.cities.push(response.data[i])
        }
      })
      console.log(this.cities)
    },
    getContracts () {
      let vm = this
      api.fetchContracts(this.authToken).then(function (response) {
        for (let i in response.data) {
          vm.contracts.push(response.data[i])
        }
      })
      console.log(this.cities)
    },
    submit: function () {
      api.updateOffer(this.authToken, this.offer[0])
      this.$router.replace('/dashboard/offers')
    },
    handleCitySelect (val) {
      this.offer[0]['offerCity'] = val
    },
    handleContractSelect (val) {
      this.offer[0]['offerContract'] = val
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
  .big-input-field-wrapper {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    padding-bottom: 15px;
  }
</style>
