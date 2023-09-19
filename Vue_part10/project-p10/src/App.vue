<template>
  <the-header title="Remember Me"></the-header>
  <nav>
    <router-link to="/"><base-button>Home</base-button></router-link>
    <router-link to="/addingres"><base-button>Add Resource</base-button></router-link>
  </nav>
  <router-view />
</template>

<script>
import TheHeader from './components/Layouts/TheHeader.vue';
import BaseButton from './components/UI/BaseButton.vue';
export default {
  components: {
    TheHeader,
    BaseButton,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

nav {
  width: 40rem;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: aquamarine;
}

nav button {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem 1rem;
  max-width: 20rem;
  font-size: 16px;
}

nav a {
  color: #fff;

}
</style>
