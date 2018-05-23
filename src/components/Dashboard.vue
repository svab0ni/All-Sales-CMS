<template>
  <div>
    <el-header>
      <Navbar />
    </el-header>
    <el-aside>
      <Sidebar />
    </el-aside>
    <main>
      <div class="content-div">
        <transition>
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'dashboard',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>
  .content-div {
    display: block;
    position: inherit;
    background-color: white;
    width: 98%;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    overflow: hidden;
  }

  main {
    width: 85%;
    margin-left: 15%;
    height: 100vh;
  }
</style>
