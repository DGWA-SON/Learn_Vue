<template>
  <div class="home">
    <h1 class="text-center text-success" v-if="user">Vue Mini Project {{ user.name }}</h1>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Home',
    data() {
      return {
        user: null,
      }
    },
    methods: {
      getData() {
        let getuser = axios.get('http://localhost:8000/api/users');
        this.user = getuser.data;
      }
    }
  }
</script>
