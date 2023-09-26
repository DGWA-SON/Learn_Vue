<template>
  <!-- <div class="wrapper">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="fullName"
          aria-describedby="emailHelp"
          v-model="fullName"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <div class="button_submit">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="sumbit" class="btn btn-primary">
          <router-link :to="{ name: 'LoginPage', params: {} }"
            >SignUp</router-link
          >
        </button>
      </div>
    </form>

    <div class="alert alert-danger mt-5" role="alert" v-if="error">
      <span>{{ error }}</span>
    </div>
  </div> -->
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
              <p class="lead fw-normal mb-0 me-3">Register with</p>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <!-- Name input -->
            <div class="form-outline mb-4">
              <input
                type="text"
                class="form-control"
                id="fullName"
                aria-describedby="emailHelp"
                v-model="fullName"
              />
              <label class="form-label" for="form3Example3"
                >Email address</label
              >
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
                Submit
              </button>

              <router-link :to="{ name: 'LoginPage', params: {} }"
                ><button
                  type="sumbit"
                  class="btn btn-primary"
                  style="padding: 11px 2.5rem"
                >
                  SignIn
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
import { useSingUp } from "@/composables/useSignUp";

export default {
  setup() {
    const { error, isPending, singup } = useSingUp();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const route = useRouter();

    async function onSubmit() {
      await singup(email.value, password.value, fullName.value);
      // .value thì mình dùng ref , nên phải truyển value nếu kh thì sẽ hiểu đó là 1 object
      if (!error.value) route.push({ name: "ProfielPage", params: {} });
    }

    return {
      onSubmit,
      fullName,
      email,
      password,
      error,
      isPending,
    };
  },
};
</script>

<style>
a {
  color: #fff;
  text-decoration: none;
}
.button_submit {
  display: flex;
  justify-content: space-around;
}
.wrapper {
  margin-top: 5rem;
}
</style>
