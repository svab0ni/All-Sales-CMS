import axios from 'axios'
import { API } from '@/main'

export default {
  async login (request) {
    return axios.post(API + '/users/login', request)
  },
  async testToken (request) {
    return axios.get(API + '/testToken')
  }
}
