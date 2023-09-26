<template>
  <div class="Homepage">HomePage</div>
  <div class="mt-5" v-if="user">{{ user.displayName }}</div>
</template>

<script>
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return {
      user,
    };
  },
};
</script>
