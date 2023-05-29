import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/add",
    name: "add",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Add.vue"),
  },
  {
    path: "/post",
    name: "post",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/post.vue"),
  },
  {
    path: "/teams",
    name: "teams",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/team.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../views/Error.vue"),
  },
  {
    path: "/add:catchAll(.*)*",
    component: () => import("../views/Error.vue"),
  },
  {
    path: "/teams:catchAll(.*)*",
    component: () => import("../views/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
