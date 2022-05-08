import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { rutaProtegida: true },
    component: () => import("../views/ProductosView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const rutaEsProtegida = to.matched.some(
    (record) => record.meta.rutaProtegida
  );
  if (rutaEsProtegida) {
    if (localStorage.getItem("token") === null) {
      console.log("token", localStorage.getItem("token"));
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
