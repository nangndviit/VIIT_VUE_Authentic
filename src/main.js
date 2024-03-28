import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import dotenv from 'dotenv';
import axios from 'axios'

window.axios = axios;

// dotenv.config();

const app = createApp(App)

app.use(router)

app.mount('#app')
