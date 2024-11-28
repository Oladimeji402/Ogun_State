<template>
  <nav-bar />
  <div>
    <router-view />
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import NavBar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>