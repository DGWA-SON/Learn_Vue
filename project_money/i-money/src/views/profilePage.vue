<template>
  <div class="container mx-auto p-8 mt-5" v-if="user">
    <div class="text-center">
      <div class="mb-4">
        <div class="card-body text-center border border-0">
          <img
            src="../assets/avatar.jpg"
            alt="avatar"
            class="rounded-circle img-fluid"
            style="width: 150px"
          />
          <h5 class="my-3">{{ user.displayName }}</h5>
          <div class="text-body-tertiary mt-1">{{ user.email }}</div>
        </div>
      </div>
    </div>
    <div class="text-primary-emphasis">
      <h4>General</h4>
    </div>
    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <div
          class="d-flex flex-column mb-3 row-gap-3 red"
          v-for="profiles in profile"
          :key="profiles.name"
        >
          <router-link :to="profiles.route" class="edit text-secondary">
            <div
              class="p-2 border rounded d-flex justify-content-between align-items-center"
            >
              {{ profiles.name }}
              <i class="bi bi-chevron-right"></i>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTION } from "@/constants";
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const profile = reactive(PROFILE_OPTION);
    const { getUser } = useUser();
    const { user } = getUser();

    return { profile, user };
  },
};
</script>

<style scoped>
.edit {
  cursor: pointer;
  text-decoration: none;
}
.red:last-child .edit {
  color: red !important;
}
</style>
