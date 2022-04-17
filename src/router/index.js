import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/crypto",
    name: "crypto",
    component: () => import("../views/CryptoView.vue"),
    children: [
      {
        path: ":id",
        name: "myCrypto",
        component: () => import("../views/MyCryptoView.vue"),
      },
    ],
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
