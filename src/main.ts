import { createApp } from 'vue'
import 'nprogress/nprogress.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/index'
import '@/style/reset.scss'
import '@/style/global.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')
