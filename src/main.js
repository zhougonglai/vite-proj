import 'windi.css'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import router from '~/router';
import store from '~/store';
import App from './App.vue'
const head = createHead()

// const router = setupLayouts(generatedRoutes)

createApp(App).use(head).use(router).use(store).mount('#app')
