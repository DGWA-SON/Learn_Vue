import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";

const useCollection = (name) => {
  const error = ref(null);

  async function addproduct(record) {
    error.value = null;
    try {
      const respone = await projectFirestore.collection(name).add(record);
      return respone;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }
  return { error, addproduct };
};

export default useCollection;
