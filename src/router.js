import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Nosotros from "@/views/Nosotros.vue";
import Contacto from "@/views/Contacto.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/nosotros",
      name: "nosotros",
      component: Nosotros
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto
    },
    {
      path: "/blog",
      name: "blog",
      beforeEnter() {
        // Put the full page url including the protocol http(s) below
        window.location = "https://prorepublicano.blogspot.com";
      }
    } /* "./views/About.vue")
}*/
    /*{
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */
  ]
});
