<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container" v-if="user">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
        >
          <svg
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>

        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li v-for="option in options" :key="option.name">
            <router-link
              :to="option.route"
              class="nav-link px-2 link-secondary text-dark"
            >
              {{ option.name }}
            </router-link>
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div class="text-dark pe-3">{{ user.displayName }}</div>

        <div class="dropdown text-end">
          <a
            href="#"
            class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="../assets/avatar.jpg"
              alt="mdo"
              width="32"
              height="32"
              class="rounded-circle"
            />
          </a>
          <ul class="dropdown-menu text-small" style="">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { reactive } from "vue";
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const options = reactive([
      {
        name: "Products",
        route: {
          name: "Products",
          params: {},
        },
      },
      {
        name: "Customers",
        route: {
          name: "ProfielPage",
          params: {},
        },
      },
    ]);
    const { getUser } = useUser();
    const { user } = getUser();

    return {
      user,
      options,
    };
  },
};
</script>

<style scoped>
header {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 0.6530987394957983) 100%
  );
}
</style>
