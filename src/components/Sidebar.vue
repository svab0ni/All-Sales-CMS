<template>
  <div class="sidebar">
    <div class="sidenav">
      <div><a v-on:click.stop="redirectTo('users')"><i class="fa fa-user"></i>Users</a></div>
      <div><a v-on:click.stop="redirectTo('offers')">Offers</a></div>
      <div><a v-on:click.stop="redirectTo('cities')">Cities</a></div>
      <div><a v-on:click.stop="redirectTo('contracts')">Contracts</a></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sidebar',
  watch: {
    width: function () {
      this.isCollapsed = (this.width < 1000)
    }
  },
  data () {
    return {
      scrollY: 0,
      height: 0,
      isCollapsed: false
    }
  },
  created () {
    let self = this
    this.$nextTick(function () {
      window.addEventListener('resize', function (event) {
        self.width = window.innerWidth
      })
      window.addEventListener('scroll', function (event) {
        self.scrollY = window.scrollY
        self.height = window.innerHeight
      })
    })
  },
  methods: {
    redirectTo: function (param) {
      this.$router.push('/dashboard/' + param)
    }
  }
}
</script>

<style>
.sidebar {
  min-height: 100vh;
  background-color: #23282E;
  width: 15%;
  margin: 0;
  position: fixed!important;
}

.sidenav {
  height: 100%;
  width: 100%;
  background-color: #23282E;
  transition: 0.5s;
  padding-top: 10px;
}
.sidenav div {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: #fff;
  display: block;
  margin-bottom: 10px;
}
</style>
