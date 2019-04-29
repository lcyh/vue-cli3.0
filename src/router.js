import Vue from 'vue'
import VueRouter from 'vue-router'
import Util from './utils/storage'

Vue.use(VueRouter)
const NotFound = r => require.ensure([], () => r(require('./views/error/err404.vue')), 'NotFound')
const Home = r => require.ensure([], () => r(require('./views/home/home.vue')), 'Home')
const Login = r => require.ensure([], () => r(require('./views/login/login.vue')), 'Login')
const About = r => require.ensure([], () => r(require('./views/about/about.vue')), 'About')
const MainPage = r => require.ensure([], () => r(require('./views/mainPage/mainPage.vue')), 'MainPage')

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    hidden: true
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/mainPage',
    children: [
      {
        path: '/mainPage',
        name: 'mainPage',
        component: MainPage,
        meta: {
          requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        }
      },
      {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: {
      path: '/404'
    }
  }]
const router = new VueRouter({
  routes: routes,
  mode: 'hash',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name
  }
  if (to.path === '/login') {
    Util.storage('userId', null) // 删除
    Util.storage('userName', null)
  }
  const userId = Util.storage('userId')
  if (!userId && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})
export default router
