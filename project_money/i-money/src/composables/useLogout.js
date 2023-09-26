import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);

async function logout() {
  error.value = null;
  try {
    const respone = await projectAuth.signOut();
    return respone;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}

export function useLogout() {
  return { error, logout };
}
