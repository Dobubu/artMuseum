import Vue from 'vue'
import vueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const routerList = [
  {
    path: '/',
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
    path: '/content',
    name: 'content',
    component: () => import('@/components/page/content'),
    meta: {
      tag: '內容選單頁',
      tagClass: '',
      title: '高雄市立美術館-內容選單頁',
      keepAlive: false
    },
    children: [
      {
        path: '/content/contentInfo/:title',
        name: 'contentInfo',
        component: () => import('@/components/page/contentInfo'),
        meta: {
          tag: '內容資料頁',
          tagClass: '',
          title: '高雄市立美術館-內容資料頁',
          keepAlive: false
        },
      }
    ]
  },
  {
    path: '/fileUpload',
    name: 'fileUpload',
    component: () => import('@/components/fileUpload')
  },
  {
    path: '/searchInfo',
    name: 'searchInfo',
    component: () => import('@/components/page/searchInfo')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('@/components/modal')
  },
  {
    path: '/uiv',
    name: 'uiv',
    component: () => import('@/components/uiv')
  },
  {
    path: '/xTemplate',
    name: 'xTemplate',
    component: () => import('@/components/xTemplate')
  },
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
