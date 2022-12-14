import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { registerPlugins } from "@/plugins"

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App)
registerPlugins(app)

createApp(App).use(vuetify).mount("#app");
