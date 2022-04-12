import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // children: [
    //   {
    //     path: ":id",
    //     name: "crypto",
    //     component: () => import("../views/CryptoView.vue"),
    //   },
    // ],
  },
  {
    path: "/id",
    name: "crypto",
    component: () => import("../views/CryptoView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
