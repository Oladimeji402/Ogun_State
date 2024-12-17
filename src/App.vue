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
  font-family: 'Open Sans', sans-serif;

}
body {
  font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, h4, h5, h6, p, a {
  font-family: 'Open Sans', sans-serif;
}

</style>