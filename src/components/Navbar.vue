<template>
  <div class="navbar" >
      <div><a class="navbar-item" v-on:click.stop="redirectTo('logout')">Logout</a></div>
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
    logout () {
      console.log('log out')
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
  padding-left: 10px;
}
</style>
