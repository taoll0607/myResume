import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";

const routerOption = [
  {
    path: "/",
    name: "home",
  }
]
const routes = routerOption.map((route)=>{
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../views/${route.name}.vue`),
  }
})

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/login",
//     name: "Login",
//     meta: { transition: 'slide-left' },
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/login.vue"),
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
    // return new Promise((resolve,reject)=>{
    //   setTimeout(()=>{
    //     resolve({left:0,top:0})
    //   },300)
    // })
  },
});

 
export default router;	