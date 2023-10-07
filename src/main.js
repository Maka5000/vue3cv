import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'

import { createI18n } from "vue-i18n"

import { defaultLocale } from './i18n/i18n'
import { languages } from './i18n/i18n'

const i18n = createI18n({
    locale : defaultLocale,
    fallbackLocale : "en",
    globalInjection : true,
    messages : languages
})

const app = createApp(App)

app.use(i18n);
app.use(router);

app.mount('#app');