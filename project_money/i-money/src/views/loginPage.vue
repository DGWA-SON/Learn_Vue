<template>
  <section class="wrapper">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form @submit.prevent="onSubmit">
            <div
              class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
            >
              <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
              />
              <label class="form-label" for="form3Example3"
                >Email address</label
              >
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="password"
              />
              <label class="form-label" for="form3Example4">Password</label>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" class="text-body">Forgot password?</a>
            </div>

            <div
              class="d-flex justify-content-between text-center text-lg-start mt-4 pt-2"
            >
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Login
              </button>

              <router-link :to="{ name: 'registerPage', params: {} }"
                ><button
                  type="sumbit"
                  class="btn btn-primary"
                  style="padding: 11px 2.5rem"
                >
                  SignUp
                </button></router-link
              >
            </div>

            <div class="alert alert-danger mt-5" role="alert" v-if="error">
              <span>{{ error }}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSingIn } from "@/composables/useSignIn";

export default {
  setup() {
    const { error, isPending, signin } = useSingIn();
    const email = ref("");
    const password = ref("");
    const route = useRouter();

    async function onSubmit() {
      await signin(email.value, password.value);
      if (!error.value) route.push({ name: "ProfielPage", params: {} });
    }
    return {
      onSubmit,
      email,
      password,
      error,
      isPending,
    };
  },
};
</script>

<style>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}

.h-custom {
  height: calc(100% - 73px);
}

@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}

a {
  color: #fff;
  text-decoration: none;
}

.wrapper {
  margin-top: 5rem;
}
</style>
