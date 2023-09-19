<template>
  <base-card>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="formData.title" @blur="validate()"
          :class="{ 'is-valid': error.title }">
        <p class="valid-feedback">{{ error.title }}</p>
      </div>
      <div class="form-control">
        <label for="body">Body</label>
        <textarea rows="3" name="body" id="body" v-model="formData.body" @blur="validate()"
          :class="{ 'is-valid': error.body }"></textarea>
        <p class="valid-feedback">{{ error.body }}</p>
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
        <base-button type="reset" @click="cancel()">Cancel</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      formData: {
        name: '',
        email: '',
        body: '',
      },
      error: {
        name: '',
        email: '',
        body: '',
      },
      isModalVisible: false,
    }
  },

  created() {
    let storeRes = this.$route.params.id
    if (storeRes) {
      this.getStore(storeRes)
    }
  },

  methods: {
    validate() {
      let isValid = true;
      this.error = {
        title: '',
        body: '',
      }

      if (!this.formData.title) {
        this.error.title = 'ERROR!!!!'
        isValid = false
      }
      if (!this.formData.body) {
        this.error.body = 'ERROR!!!!'
        isValid = false
      }

      return isValid
    },

    async submit() {
      if (this.validate()) {
        if (this.formData.id) {
          axios.put(`http://localhost:3000/storeRes/${this.formData.id}`, this.formData).then(res => {
            if (res.data.success) {
              this.$router.push({ name: 'LearningRes' })
              return
            }
          })
          return
        }
      }

    },

    getStore(storeRes) {
      axios.get(`http://localhost:3000/storeRes/${storeRes}`).then(res => {
        this.formData = res.data
      })
    },

    cancel() {
       this.formData.title = '';
       this.formData.body = '';
     }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: -webkit-fill-available;
  font: inherit;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

button {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 20rem;
  font-size: 16px;
  background-color: #236ec7;
}

button:hover {
  opacity: 0.8;
}
</style>