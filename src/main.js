import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/plugins/iCheck/skins/minimal/blue.css'
import './assets/fonts/font-awesome/css/font-awesome.min.css'
import './assets/css/styles.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
