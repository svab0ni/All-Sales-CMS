<template>
  <div>
    <Navbar/>
    <div>
      <el-row>
        <el-col :xs="3" :sm="3" :md="4" :lg="4" :xl="4">
          <Sidebar />
          <div style="display: inline-block; width: 100%"></div>
        </el-col>
        <el-col :xs="21" :sm="20" :md="20" :lg="18" :xl="18">
          <div class="contentBox">
            <transition name="fade">
              <keep-alive>
                <router-view />
              </keep-alive>
            </transition>
          </div>
        </el-col>
        <el-col :xs="0" :sm="1" :md="0" :lg="2" :xl="2">
        </el-col>
      </el-row>
    </div>
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

<style scoped>
  .logo {
    background-color: #545c64;
    color: lightgray;
  }
  .logo img {
    border-radius: 50%;
    max-width: 250px;
    padding: 25px;
  }
  .contentBox {
    padding: 18px;
  }
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
