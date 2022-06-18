import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import(/* webpackChunName: "signin" */ '../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/question',
    name: 'question',
    component: () => import(/* webpackChunName: "question" */ '../views/Question.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import(/* webpackChunName: "icon" */ '../views/Icon.vue')
  },
  {
    path: '/myhome',
    name: 'myhome',
    component: () => import(/* webpackChunName: "myhome" */ '../views/Myhome.vue')
  },
  {
    path: '/graph',
    name: 'graph',
    component: () => import(/* webpackChunName: "graph" */ '../views/Graph.vue')
  },
  {
    path: '/graph2',
    name: 'graph2',
    component: () => import(/* webpackChunName: "graph2" */ '../views/Graph2.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunName: "list" */ '../views/List.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import(/* webpackChunName: "mypage" */ '../views/Mypage.vue')
  },
  {
    path: '/changeage',
    name: 'changeage',
    component: () => import(/* webpackChunName: "changeage" */ '../views/ChangeAge.vue')
  },
  {
    path: '/newicon',
    name: 'newicon',
    component: () => import(/* webpackChunName: "newicon" */ '../views/newIcon.vue')
  },
  {
    path: '/spendingadd',
    name: 'spendingadd',
    component: () => import(/* webpackChunName: "spendingadd" */ '../views/spendingAdd.vue')
  },
  {
    path: '/incomeadd',
    name: 'incomeadd',
    component: () => import(/* webpackChunName: "incomeadd" */ '../views/incomeAdd.vue')
  },
  {
    path: '/newname',
    name: 'newname',
    component: () => import(/* webpackChunName: "newname" */ '../views/newName.vue')
  },
  {
    path: '/changecategory',
    name: 'changecategory',
    component: () => import(/* webpackChunName: "changecategory" */ '../views/changeCategory.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router