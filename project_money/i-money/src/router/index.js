import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

// Auth Guarnds
const requiredAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  // console.log("Before enter router :", user);
  if (!user) next({ name: "LoginPage", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/homePage.vue"),
  },
  {
    path: "/register",
    name: "registerPage",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/registerPage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/loginPage.vue"),
  },
  {
    path: "/profile",
    name: "ProfielPage",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profilePage.vue"),
    beforeEnter: requiredAuth,
  },
  {
    path: "/logout",
    name: "LogoutPage",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logoutPage.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/ProductsPage.vue"),
  },
  {
    path: "/addproducts",
    name: "AddProducts",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/addPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
