import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";

Vue.use(Router);

const router = new Router({
  mode:'history',
  base:'/lemonFish/',
  routes: [
    {
      path: "/",
      redirect:"/login"
    },

    {
      path: "/login",
      meta: {
        title: "登录",
      },
      component: () => import("@/views/A_login.vue")
    },

    
  ]
});


router.beforeEach((to,from,next)=>{
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


export default router;
