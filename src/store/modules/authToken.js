const state = {
  authToken: JSON.parse(localStorage.getItem('authToken'))
}

const getters = {
  getAuthToken: state => state.authToken
}

const mutations = {
  setAuthToken (state, token) {
    state.authToken = token
    localStorage.setItem('authToken', JSON.stringify(state.authToken))
    console.log(state.authToken)
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
