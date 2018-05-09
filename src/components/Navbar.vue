<template>
  <div class="navbar" >
    <el-menu @select="handleSelect"
             :default-active="activeIndex" mode="horizontal"
             background-color="#fff" text-color="rgb(76, 175, 80)"
             active-text-color="rgb(76, 175, 80)">
      <el-menu-item class="navbar-item" index="logout">Log out</el-menu-item>
    </el-menu>
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
  width: 100%;
  height: 50px;
}
.navbar-item {
  float: right;
  padding-left: 10px;
}
</style>
