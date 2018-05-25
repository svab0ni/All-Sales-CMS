<template>
  <div>
    <el-row>
      <div class="content-header">
        <h3 class="content-header-title">Create offer</h3>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="name">Name</label>
        </div>
        <el-input id="name" placeholder="Please input" v-model="offer.name"></el-input>
      </div>
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="image">Image Url</label>
        </div>
        <el-input id="image" placeholder="Please input" v-model="offer.imageUrl"></el-input>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="currentPrice">Current Price</label>
        </div>
        <el-input id="currentPrice" placeholder="Please input" v-model="offer.currentPrice"></el-input>
      </div>
      <div class="input-field-wrapper">
        <div class="label-container">
          <label for="previousPrice">Previous Price</label>
        </div>
        <el-input id="previousPrice" placeholder="Please input" v-model="offer.previousPrice"></el-input>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="big-input-field-wrapper">
        <div class="label-container">
          <label for="subtitle">Subtitle</label>
        </div>
        <el-input type="textarea" id="subtitle" placeholder="Please input" v-model="offer.subtitle"></el-input>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="big-input-field-wrapper">
        <div class="label-container">
          <label for="title">Title</label>
        </div>
        <el-input type="textarea" id="title" placeholder="Please input" v-model="offer.title"></el-input>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="big-input-field-wrapper">
        <div class="label-container">
          <label for="short-description">Short description</label>
        </div>
        <el-input type="textarea" id="short-description" placeholder="Please input" v-model="offer.shortDescription"></el-input>
      </div>
    </el-row>
    <el-row class="input-group">
      <div class="input-field-wrapper">
        <label for="city">City</label>
        <template>
          <el-select id="city" @change="handleCitySelect" v-model="offer.offerCity.name" placeholder="Select">
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
          <el-select id="city" @change="handleContractSelect" v-model="offer.offerContract.name" clearable placeholder="Select">
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
          <el-checkbox v-bind:checked="offer.published" v-model="offer.published">Published</el-checkbox>
        </template>
      </div>
      <div class="input-field-wrapper">
        <template>
          <!-- `checked` should be true or false -->
          <el-checkbox v-bind:checked="offer.processed" v-model="offer.processed">Processed</el-checkbox>
        </template>
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
  name: 'createOffer',
  mounted: function () {
    this.getCities()
    this.getContracts()
  },
  data () {
    return {
      offer: {
        'name': '',
        'imageUrl': '',
        'subtitle': '',
        'title': '',
        'previousPrice': '',
        'currentPrice': '',
        'shortDescription': '',
        'offerCity': {
          'name': ''
        },
        'offerContract': {
          'name': ''
        },
        'published': 0,
        'processed': 0
      },
      cities: [],
      contracts: [],
      city: '',
      contract: ''
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
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
      let vm = this
      api.createOffer(this.authToken, this.offer).then(function () {
        vm.$router.replace('/dashboard/offers')
      })
    },
    handleCitySelect (val) {
      this.offer['offerCity'] = val
    },
    handleContractSelect (val) {
      this.offer['offerContract'] = val
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
