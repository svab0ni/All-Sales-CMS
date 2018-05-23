<template>
  <div class="sidebar">
    <div class="sidebar-header"><h3>All Sales</h3></div>
    <div class="sidenav">
      <div><a class="sidebar-item" v-on:click.stop="redirectTo('users')">User</a></div>
      <div><a class="sidebar-item" v-on:click.stop="redirectTo('offers')">Offer</a></div>
      <div><a class="sidebar-item" v-on:click.stop="redirectTo('cities')">Cities</a></div>
    </div>
  </div>
</template>

<script>
import model from '@/model/index'

export default {
  name: 'sidebar',
  watch: {
    width: function () {
      this.isCollapsed = (this.width < 1000)
    }
  },
  data () {
    return {
      components: model.getSidebarComponents(),
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
  background-color: #fff;
  width: 15%;
  margin: 0;
  position: fixed!important;
}
.sidebar-header {
  height: 50px;
  width: 12%;
  background-color: #fff;
  margin: 0;
  position: fixed!important;
  font-family: "Roboto", sans-serif;
  border-bottom: whitesmoke;
}
.sidebar-item {
  width: 100%;
  display: block;
  padding: 8px 16px;
  text-align: left;
  border: none;
  white-space: normal;
  float: none;
  outline: 0;
}
.sidenav {
  height: 100%;
  width: 100%;
  background-color: #fff;
  transition: 0.5s;
  padding-top: 60px;
}
.sidenav div {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: #000;
  background-color: whitesmoke;
  display: block;
  border-width: 2px;
  border-color: dimgray;
  border-style: solid;
  border-left: none;
  border-right: none;
  border-top: none;
  margin-bottom: 10px;
}
</style>
