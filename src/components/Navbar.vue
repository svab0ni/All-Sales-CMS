<template>
  <div class="navbar" >
    <a href="dashboard"><h3 style="float: left; margin-left: 20px; color: white;">All Sales CMS</h3></a>
    <el-button class="navbar-item" style="margin-top: 10px; margin-right: 10px;" v-on:click="handleLogout">Logout</el-button>
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
  background-color: #23282E;
  position: fixed;
  left: 0;
  width: 100%;
  height: 60px;
  display: block;
  z-index:1;
}
.navbar-item {
  float: right;
}
</style>
