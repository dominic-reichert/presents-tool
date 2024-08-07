// Import the main CSS file
import './output.css'
import '@mdi/font/css/materialdesignicons.css'

// Import necessary modules from Vue and other libraries
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Import Vuetify styles and components
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create the Vuetify instance with components and directives
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

// Create the Vue application instance
const app = createApp(App)

// Use the router and Vuetify instances in the Vue app
app.use(router)
app.use(vuetify)

// Mount the Vue app to the DOM element with the ID 'app'
app.mount('#app')
