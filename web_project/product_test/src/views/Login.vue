<template>
  <h1>Login</h1>
  <form @submit.prevent="onLogin()">
    <div class="form-group">
      <input type="email" class="form-control" placeholder="Enter email" @blur="validate()" v-model="user.email"
        v-bind:class="{ 'is-invalid': error.email }">
      <p class="valid-feedback">{{ error.email }}</p>
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Enter password" @blur="validate()" v-model="user.password"
        v-bind:class="{ 'is-invalid': error.password }">
      <p class="valid-feedback">{{ error.password }}</p>
    </div>
    <div class="submit">
      <button type="submit" class="btn btn-primary mr-5">Submit</button>
      <router-link to="/signup" class="btn btn-primary">SignUp</router-link>
    </div>
  </form>
</template>

<style scoped>
h1 {
  text-align: center;
}

form {
  width: 300px;
  margin: 0 auto;
}

.submit {
  text-align: center;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      error: {
        name: "",
        price: "",
        description: ""
      },
    }
  },

  methods: {
    async onLogin() {
      if (this.validate()) {
        const login = await axios.get('http://localhost:8000/api/users',
          {
            email: this.email,
            password: this.password,
          });
        localStorage.setItem('http://localhost:8000/api/users', login.data.id);
        this.$router.push('/');
      }
    },

    validate() {
      let isValid = true
      this.error = {
        email: '',
        password: ''
      }

      if (!this.user.email) {
        this.error.email = 'ERROR!!!!'
        isValid = false
      }

      if (!this.user.password) {
        this.error.password = 'ERROR!!!!'
        isValid = false
      }

      return isValid
    },

  },
}
</script>