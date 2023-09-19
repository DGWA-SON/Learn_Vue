<template>
  <div class="product-list">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-4"><router-link to="/Product">Product Management</router-link></h2>
      <p><router-link to="/Product/form">Add new</router-link></p>
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
            <tr v-for="(allproduct, index) in products" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ allproduct.name }}</td>
              <td>{{ allproduct.price }}</td>
              <td>
                <!-- Chuyen trang theo route goi theo id -->
                <router-link :to="{name: 'Product.edit', params:{id: allproduct.id}}">
                  <button class="btn btn-primary">Edit</button> 
                </router-link>
                &nbsp;
                <button class="btn btn-danger" @click="onDelete(allproduct.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductList',
  data() {
    return {
      products: []
    }
  },

  created() {
    this.getAll()
  },

  methods: {
    getAll() {
      this.$request.get('http://localhost:8000/api/products')
        .then(response => {
          this.products = response.data
        }
        )
    },

    onDelete(productId) {
      this.$swal.fire({
        title: 'Do you want to delete?',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$request.delete(`http://localhost:8000/api/products/${productId}`).then(response => {
            if (response.data.success) {
              this.getAll()
              this.$swal.fire(
                'Deleted!',
                '',
                'success'
              )
            }
          })
        }
      })
    }
  }
}
</script>