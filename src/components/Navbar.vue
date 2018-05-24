<template>
  <div class="navbar" >
      <el-button class="navbar-item" v-on:click="handleLogout">Logout</el-button>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      activeIndex: 'home'
    }
  },
  methods: {
    handleSelect (param) {
      this.$router.push('/dashboard/' + param)
    },
    handleLogout () {
      let self = this
      self.$store.commit('setAuthToken', null)
      self.$router.push('/')
    }
  }
}
</script>

<style>
li {
  display: inline;
}

div.navbar {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
}
.navbar-item {
  float: right;
}
</style>
