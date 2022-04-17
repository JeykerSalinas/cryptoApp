import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";

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
  { path: "/*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(from);
  console.log(next);
  console.log(to);
  console.log("hola desde el store" + store.state);
  next();
});

export default router;
