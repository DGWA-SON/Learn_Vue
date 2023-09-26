<template>
  <div class="product-list">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-4 text-primary">Product Management</h2>
      <p><router-link to="/addproducts">Add Product</router-link></p>
    </div>

    <div class="container">
      <div class="card-deck mb-3 text-center">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="getProduct in apiData" :key="getProduct.id">
              <th scope="row">{{ getProduct.id }}</th>
              <td>{{ getProduct.name }}</td>
              <td>{{ getProduct.price }}</td>
              <td>
                <!-- Chuyen trang theo route goi theo id -->
                <button class="btn btn-primary">Edit</button>
                &nbsp;
                <button class="btn btn-danger" @click="onDelete(getProduct.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from "@/configs/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const apiData = ref([]);

    const fetchData = async () => {
      try {
        const response = await projectFirestore.collection("products").get();
        apiData.value = response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      } catch (error) {
        console.error(error);
      }
    };

    const onDelete = async (id) => {
      await deleteDoc(doc(projectFirestore, "products", id));
      console.log(id);
    };

    onMounted(fetchData);

    return {
      apiData,
      onDelete,
    };
  },
};
</script>
