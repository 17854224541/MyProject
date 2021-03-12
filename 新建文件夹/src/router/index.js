import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

Vue.use(Router)

const adminLogin = () => import('@/views/login/index')
const Login = () => import('@/views/login/login')
const Register = () => import('@/views/login/register')
const Users = () => import('@/views/admin/users')
const Page404 = () => import('@/views/404')
const Layout = () => import('../components/layout')
const MainLayout = () => import('../layout')




const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/main/home'),
        meta: {
          title: '首页',
        }
      },
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: {
      title: '会员登录',
    }
  },
  {
    path: '/register',
    component: Register,
    name: 'Register',
    meta: {
      title: '会员注册',
    }
  },
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: Users,
        meta: {
          title: '会员管理',
        }
      }
    ]
  },
  {
    path: '/adminlogin',
    component: adminLogin,
    name: 'adminLogin',
    meta: {
      title: 'adminLogin',
      icon: 'adminlogin'
    }
  },
  {
    path: '/404',
    component: Page404,
    name: '404',
    meta: {
      title: '404'
    }
  },
  {
    path: '*',
    redirect: '/404',
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

//配置进度条
NProgress.configure({ showSpinner: false })

// 路由拦截
router.beforeEach((to, from, next) => {
  const localToken = getToken()

  NProgress.start()
  document.title = to.meta.title
  // 无token
  // if (
  //   (to.path === "/dashboard" && !localToken) ||
  //   to.path === "/login"
  // ) {
  //   next({
  //     path: '/login'
  //   })
  // }

  if (to.path === "/admin/users" && !localToken) {
    next({
      path: '/adminlogin'
    })
  }

  // 无权限
  // 开发者根据业务自行添加
  next();
});

router.afterEach(router => {
  NProgress.done()
});

export default router
