import { createApp } from "vue";
import App from "./App.vue";
import router from "./index.js";
import "bulma/css/bulma.min.css";

createApp(App).use(router).mount("#app");