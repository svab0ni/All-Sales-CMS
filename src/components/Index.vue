<template>
  <div id="authentication">
    <form action="">
      <div class="login-div">
        <Login/>
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
// import api from '@/api/api'
import Login from '@/components/Login'
import api from '@/api/api'

export default {
  components: {
    Login
  },
  name: 'index',
  computed: {
    ...mapGetters({
      authToken: 'getAuthToken'
    })
  },
  watch: {
    authToken: function () {
      if (this.authToken != null) {
        this.$router.push('Dashboard')
      }
    }
  },
  data () {
    return {
      loading: true
    }
  },
  created () {
    if (this.authToken != null) {
      api.testToken({}, {
        headers: {
          Authorization: `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        this.$router.push('Dashboard')
      }.bind(this)).catch(function (error) {
        if (error.response && error.response.status === 401) {
          this.$store.commit('setAuthToken', null)
        } else {
          this.$router.push('Dashboard')
        }
        this.loading = false
      }.bind(this))
    } else {
      this.loading = false
    }
  }
}
</script>

<style scoped>
  .login-div {
    width: 50%;
    margin: 0 auto;
  }
</style>
