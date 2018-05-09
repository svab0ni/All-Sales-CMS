import Vue from 'vue'
import Vuex from 'vuex'
import AuthToken from './modules/AuthToken'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthToken
  }
})
