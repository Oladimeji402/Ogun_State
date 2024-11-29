import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init();
