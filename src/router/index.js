import { createRouter, createWebHistory } from "vue-router";

import Welcome from "../view/welcome.vue";
import Login from "../view/login.vue";
import Console from "../view/console.vue";

const routes = [
    {
        path:"/welcome",
        name:"path",
        component:Welcome
    },
    {
        path:"/login",
        name:"login",
        component:Login
    },
    {
        path:"/",
        name:"app",
        component:Console
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;