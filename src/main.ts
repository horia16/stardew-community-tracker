import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import "virtual:windi.css";
createApp(App).use(createPinia()).mount("#app");
