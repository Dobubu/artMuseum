import Vue from 'vue'
import vueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const routerList = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/page/login'),
    meta: {
      tag: '登入',
      tagClass: '',
      title: '高雄市立美術館-登入',
      keepAlive: false
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/components/page/index'),
    meta: {
      tag: '首頁',
      tagClass: '',
      title: '高雄市立美術館-首頁',
      keepAlive: false
    }
  },
  {
    path: '/',
    name: 'content',
    component: () => import('@/components/page/content'),
    meta: {
      tag: '內容頁框架',
      tagClass: '',
      title: '高雄市立美術館-內容頁框架',
      keepAlive: false
    },
    children: [
      {
        path: '/content/contentInfo',
        name: 'contentInfo',
        component: () => import('@/components/page/contentInfo')
      }
    ]
  },
  {
    path: '/fileUpload',
    name: 'fileUpload',
    component: () => import('@/components/fileUpload')
  },
  {
    path: '/fileUpload2',
    name: 'fileUpload2',
    component: () => import('@/components/fileUpload2')
  }
]

Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history',
  routes: routerList
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'content') {
//     next({'name': 'content'})
//   } else {
//     window.document.title = to.meta.title
//     next()
//   }
// })

export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
