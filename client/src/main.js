import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "semantic-ui-css/semantic.min.css"
import "bootstrap/dist/css/bootstrap.css"
createApp(App).use(store).use(router).mount('#app')