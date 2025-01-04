import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";
const ComponentView = () => import("./ComponentView.vue");

const routes = [{ path: "/:p+", component: ComponentView, props: true }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/" && to.path.endsWith("/")) {
    next({ path: to.path.slice(0, -1), query: to.query, hash: to.hash });
  } else {
    next();
  }
});

createApp(App).use(router).mount("#app");
