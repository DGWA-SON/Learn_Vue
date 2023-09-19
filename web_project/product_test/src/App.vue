<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal"><router-link to="/">Vue Mini Project</router-link></h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link to="/Product" class="text-secondary">Product management</router-link>
      <router-link to="/users" class="text-secondary">User management</router-link>
    </nav>
    <router-link to="/login">
      <a class="btn btn-outline-primary">Administrator</a>
    </router-link>
  </div>
  <router-view />
</template>

<style>
</style>
