<template>
  <div id="app">
    <div id="nav">
      <NavBar/>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  &.router-link-exact-active,
  &.router-link-active {
    text-decoration: none;
  }
}
#nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
  a {
    font-weight: bold;
    height: 60px;
    padding: 0 10px;
    display: flex;
    justify-content: center;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
.view {
  img {
    height: 105vh;
    width: 100%;
  }
}
</style>
