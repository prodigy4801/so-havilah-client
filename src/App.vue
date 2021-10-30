<template>
  <header
      id="topnav"
      class="navbar navbar-midnightblue navbar-fixed-top clearfix"
      role="banner"
      v-if="!authStatus"
    >
      <HeaderMenu />
    </header>
    <div id="wrapper">
      <div id="layout-static">
        <div
          class="static-sidebar-wrapper sidebar-midnightblue"
          v-if="!authStatus"
        >
          <SideMenu />
        </div>
        <div class="static-content-wrapper">
          <div class="static-content">
            <router-view />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import HeaderMenu from './components/_partial_page/HeaderMenu.vue'
import SideMenu from './components/_partial_page/SideMenu.vue'
import Footer from './components/_partial_page/Footer.vue'
export default {
  name: 'App',
  components: {
    HeaderMenu,
    SideMenu,
    Footer
  }
}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
