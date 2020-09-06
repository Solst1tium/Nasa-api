import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/apod',
    name: 'Apod',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "apod" */ '../views/Apod.vue'),
    meta:{
      login:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//con firebase siempre ebe ir este codigo para la autentificacion
router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequire = to.matched.some(route => route.meta.login) //pregunta si tiene el meta login = true
  if(!user && authRequire) {
    next('/')
  } else {
    next()
  }
 
})
export default router
