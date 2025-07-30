import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import router from './router'
import App from './app/App.vue'
import './styles.css'
import 'vuetify/styles'

const app = createApp(App)
app.use(router)
app.use(createVuetify())
app.use(createPinia())
app.mount('#root')
// app.mount('#app')
