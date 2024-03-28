import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import 'dotenv/config'; 
import axios from 'axios'

window.axios = axios;

// dotenv.config();

const app = createApp(App)

app.use(router)

// axios.defaults.baseURL = process.env.VITE_API_URL;

app.mount('#app')
