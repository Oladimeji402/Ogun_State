<template>
  <nav-bar />
  <div>
    <router-view />
  </div>
  <footer>
    <FooterView />
  </footer>
</template>

<script>
import NavBar from './components/Navbar.vue';
import FooterView from './components/FooterView.vue';
// import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterView,
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