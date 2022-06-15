import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";
Vue.use(VueRouter);
function guardMyrouteUser(to, from, next) {
  var isAuthenticated = false;
  
  if (localStorage.getItem("Rol") === 'user' && localStorage.getItem("token") != null) {
    isAuthenticated = true;
    
  } else {
    
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next();
  } else {
    next('/login');
  }
}
function guardMyrouteAdmin(to, from, next) {
  var isAuthenticated = false;
  
  
  if (localStorage.getItem("Rol") === 'admin' && localStorage.getItem("token") != null) {
    isAuthenticated = true;
    
  } 
  if (isAuthenticated) {
    next(); // allow to enter route
  } else if(localStorage.getItem("token") === null){
    next('/login'); // go to '/login';
  }else{
    return next('/user');
  }
  
}
const routes = [
  {
    path: "/",
    name: "home",
    beforeEnter: guardMyrouteAdmin,
    component: () => import("../views/ProductosView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/user",
    name: "home-user",
    beforeEnter: guardMyrouteUser,
    component: () => import("../views/HomeUser.vue"),
  },
  {
    path: "/ventas",
    name: "view-ventasUser",
    beforeEnter: guardMyrouteUser,
    component: () => import("../views/VentasView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
