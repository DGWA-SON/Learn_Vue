import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function singup(email, password, fullname) {
  isPending.value = true;
  error.value = null;
  try {
    const respone = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!respone) throw new Error("Cannot create a new user");
    await respone.user.updateProfile({ displayName: fullname });
    console.log(respone);
    return respone;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
  // nó là tính năng trang try cacth , tức là try hay catch thì final vẫn thực hiện
}

export function useSingUp() {
  return { error, isPending, singup };
}

// async, await xử lý bất đồng bộ , khi mà call api về nếu như xong thì nó phải đợi loading
