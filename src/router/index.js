import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { loadJs } from "./../assets/js/app.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "Home" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: { title: "About" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/element",
    name: "Element",
    meta: { title: "Element" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Element.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

router.afterEach((to, from, next) => {
  console.log("to => ", to, "from => ", from, "next => ", next);
  if (to.path == "/" && to.hash == "") {
    loadJs();
  }
});

export default router;
