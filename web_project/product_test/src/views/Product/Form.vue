<template>
  <div class="product-info">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="display-5">Product Infomation</h3>
      <router-link to="/Product">Back</router-link>
    </div>

    <div class="container">
      <form @submit.prevent="save()">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Product name</label>
          <div class="col-sm-9">
            <input type="text" class="form-control"
            @blur="validate()"
            v-model="product.name" 
            v-bind:class="{'is-invalid': error.name}"/>
            <p class="valid-feedback">{{ error.name }}</p>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Product price</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" 
            @blur="validate()"
            v-bind:class="{'is-invalid': error.price}"
            v-model="product.price" />
            <p class="valid-feedback">{{ error.price }}</p>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Product description</label>
          <div class="col-sm-9">
            <textarea class="form-control" rows="3" 
            @blur="validate()"
            v-bind:class="{'is-invalid': error.description}"
            v-model="product.description"></textarea>
            <p class="valid-feedback">{{ error.description }}</p>
          </div>
        </div>
        <div class="form-group row">
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

import axios from 'axios'

export default {
  name: "ProductForm",
  data() {
    return {
      error: {
        name: "",
        price: "",
        description: ""
      },
      product: {
        name: "",
        price: "",
        description: ""
      },
      isModalVisible: false,
    }
  },

  // sau khi click edit thi se truyen du lieu can thay doi vao form
  created (){
    let productId = this.$route.params.id
    if(productId){
      this.getProduct(productId)
    }
  },

  methods: {
    // validate form
    validate() {
      let isValid = true
      this.error = {
        name: "",
        price: "",
        description: ""
      }
      
      if (!this.product.name)  {
        this.error.name = 'ERROR!!!!'
        isValid = false
      }

      if (!this.product.price)  {
        this.error.price = 'ERROR!!!!'
        isValid = false
      } else if (!this.isNumber(this.product.price)) {
        this.error.price = 'Nhap Number'
        isValid = false
      }

      if (!this.product.description) { 
        this.error.description = 'ERROR!!!!'
        isValid = false
      }

      return isValid
    },

    // validate number
    isNumber() {
      return /^\d+$/.test(this.product.price);
    },

    save() {
      // sau khi sua se chuyen ve lai trang va da sua thanh cong (can co return cuoi neu kh thi sẽ x2 san pham)
      if (this.product.id) {
        this.$request.put(`http://localhost:8000/api/products/${this.product.id}`, this.product).then(res => {
          if(res.data.success) {
            this.$router.push({ name: 'Product.list' })
            return
          }
        })
        return
      }

      // Sau khi save thi se chuyen trang thong qua route chuyen den list
      if (this.validate()) {
        this.$request.post('http://localhost:8000/api/products', this.product).then(res => {
          if(res.data.success) {
            this.$router.push({ name: 'Product.list' })
            return
          }
        })
      }
    },

    // goi porduct vao form theo id 
    getProduct(productId) {
      axios.get(`http://localhost:8000/api/products/${productId}`).then(res => {
        this.product = res.data
      })
    },

    closeModal() {
       this.isModalVisible = false;
     }
  },
}
</script>