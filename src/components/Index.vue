<template>
  <div id="authentication">
    <form action="">
      <div id="login">
        <h1 style="text-align: center; color: blueviolet">All Sales CMS</h1>
        <Login/>
      </div>
    </form>
  </div>
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'index',
  components: {
    Login
  }

}

</script>
