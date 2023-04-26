import { createApp } from "vue";
import "@/styles/app.scss";
import "@/theme/index.scss";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import App from "./App.vue";
const app = createApp(App);
import router from "./router";

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(ElementPlus);
app.mount("#app");
