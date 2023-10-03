<template>
  <div class="product-list">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-4 text-primary">Product Management</h2>
    </div>

    <div class="container">
      <form @submit.prevent="addProduct()">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product name</label
          >
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="dataName" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product price</label
          >
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="dataprice" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product description</label
          >
          <div class="col-sm-9">
            <textarea
              class="form-control"
              rows="3"
              v-model="dataNote"
            ></textarea>
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="inputPassword" class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9">
            <button type="submit" class="btn btn-primary">Save</button> &nbsp;
            <router-link to="/Product">
              <button type="reset" class="btn btn-danger">Cancel</button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import { useRouter } from "vue-router";

export default {
  setup() {
    const dataName = ref("");
    const dataprice = ref("");
    const dataNote = ref("");
    const { getUser } = useUser();
    const { error, addproduct } = useCollection("products");
    const route = useRouter();

    async function addProduct() {
      const { user } = getUser();

      const transection = {
        dataName: dataName.value,
        dataprice: dataprice.value,
        dataNote: dataNote.value,
        userID: user.value.uid,
      };

      await addproduct(transection);
      if (!error.value) route.push({ name: "Products", params: {} });

      console.log(error);
      console.log("Created");
    }

    return {
      addProduct,
      dataName,
      dataprice,
      dataNote,
    };
  },
};
</script>
