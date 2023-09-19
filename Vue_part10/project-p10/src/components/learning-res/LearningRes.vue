<template>
  <ul v-for="res in storeRes" :key="res.id">
    <li>
      <base-card>
        <header>
          <h3>{{ res.title }}</h3>
          <div class="button_">
            <router-link :to="{name: 'EditRes', params: {id: res.id}}"><base-button mode="flat">Edit</base-button></router-link>
            <base-button mode="flat" @click="delData(res.id)">Delete</base-button>
          </div>
        </header>
        <p>{{ res.body }}</p>
      </base-card>
    </li>
  </ul>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import axios from 'axios'
import { ref, onMounted } from 'vue';

export default {
  components: { BaseButton },

  setup() {
    const storeRes = ref([])

    const getData = async () => {
      await axios.get('http://localhost:3000/storeRes')
        .then((response) => {
          // xử trí khi thành công
          storeRes.value = response.data
        })
        .catch(function (error) {
          // xử trí khi bị lỗi
          console.log(error);
        })
        .finally(function () {
          // luôn luôn được thực thi
        });
    }

    const delData = async (storeResId) => {
      try {
        await axios.delete(`http://localhost:3000/storeRes/${storeResId}`);
        storeRes.value = storeRes.value.filter((res) => res.id !== storeResId);
      } catch (error) {
        console.error(error);
      }
    }


    onMounted(() => {
      getData();
    });

    return {
      storeRes,
      delData,
    }



  }
}
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

li {
  margin: auto;
  max-width: 40rem;
  list-style: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>