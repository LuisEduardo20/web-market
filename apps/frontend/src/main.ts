import App from "./App.vue";
import router from "@/router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// @ts-ignore: side-effect import has no type declarations
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(
  createVuetify({
    components,
    directives,
  })
);
app.mount("#app");
