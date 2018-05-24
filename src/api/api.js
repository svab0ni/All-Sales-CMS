import axios from 'axios'
import { API } from '@/main'

export default {
  async login (data) {
    return axios({
      method: 'POST',
      url: API + '/users/login',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  async testToken (authToken) {
    return axios({
      method: 'GET',
      url: API + '/testToken',
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchUsers (authToken) {
    return axios({
      method: 'GET',
      url: API + '/users/index',
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async updateUser (authToken, data) {
    return axios({
      method: 'PUT',
      url: API + '/users/update/' + data['id'],
      data: data,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async createUser (authToken, data) {
    return axios({
      method: 'POST',
      url: API + '/users/createAdmin',
      data: data,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchUser (authToken, id) {
    return axios({
      method: 'GET',
      url: API + '/users/find/' + id,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchOffers (authToken) {
    return axios({
      method: 'GET',
      url: API + '/offers/index',
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchOffer (authToken, id) {
    return axios({
      method: 'GET',
      url: API + '/offers/find/' + id,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async updateOffer (authToken, data) {
    return axios({
      method: 'PUT',
      url: API + '/offers/update/' + data['id'],
      data: data,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async createOffer (authToken, data) {
    return axios({
      method: 'POST',
      url: API + '/offers/create',
      data: data,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchCities (authToken) {
    return axios({
      method: 'GET',
      url: API + '/cities/index',
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchContracts (authToken) {
    return axios({
      method: 'GET',
      url: API + '/contracts/index',
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  }
}
