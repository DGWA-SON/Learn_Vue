import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import router from './router'

const app = createApp(App).use(router)

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.mount('#app')
