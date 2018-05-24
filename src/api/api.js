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
  async deleteUser (authToken, id) {
    return axios({
      method: 'DELETE',
      url: API + '/users/delete/' + id,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchOffers () {
    return axios({
      method: 'GET',
      url: API + '/offers/index'
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
  async searchOffers (authToken, q) {
    return axios({
      method: 'GET',
      url: API + '/offers/search/' + q
    })
  },
  async deleteOffer (authToken, id) {
    return axios({
      method: 'DELETE',
      url: API + '/offers/delete/' + id,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async fetchCities (authToken) {
    return axios({
      method: 'GET',
      url: API + '/cities/index'
    })
  },
  async fetchCity (authToken, id) {
    return axios({
      method: 'GET',
      url: API + '/cities/find/' + id,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async updateCity (authToken, data) {
    return axios({
      method: 'PUT',
      url: API + '/cities/update/' + data['id'],
      data: data,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async searchUsers (q) {
    return axios({
      method: 'GET',
      url: API + '/users/search/' + q
    })
  },
  async createCity (authToken, data) {
    return axios({
      method: 'POST',
      url: API + '/cities/create',
      data: data,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async searchCities (authToken, q) {
    return axios({
      method: 'GET',
      url: API + '/cities/search/' + q
    })
  },
  async deleteCity (authToken, id) {
    return axios({
      method: 'DELETE',
      url: API + '/cities/delete/' + id,
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
  },
  async fetchContract (authToken, id) {
    return axios({
      method: 'GET',
      url: API + '/contracts/find/' + id,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async updateContract (authToken, data) {
    return axios({
      method: 'PUT',
      url: API + '/contracts/update/' + data['id'],
      data: data,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async createContract (authToken, data) {
    return axios({
      method: 'POST',
      url: API + '/contracts/create',
      data: data,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async searchContracts (authToken, q) {
    return axios({
      method: 'GET',
      url: API + '/contracts/search/' + q,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
  async deleteContract (authToken, id) {
    return axios({
      method: 'DELETE',
      url: API + '/contracts/delete/' + id,
      headers: {
        'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'
      }
    })
  },
}
