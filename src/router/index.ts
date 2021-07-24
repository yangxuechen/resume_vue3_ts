import {createRouter,createWebHashHistory,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {  
        path:'/', 
        name:'index',
         redirect: '/resumeTemplate',
        component: () => import('../views/MainFrame.vue'),
        children:[
            { path:'/resumeTemplate',component: () => import('../views/user/ResumeTemplate.vue')},
            { path:'/mineResume',component: () => import('../views/user/MineResume.vue')},
            { path:'/recruitment',component: () => import('../views/user/Recruitment.vue')},
            {
                 path:'/resumeEdit',
                 component: () => import('../views/user/ResumeEdit.vue'),
                 props: route => ({ query: route.query.name }),
                 redirect:'/resumeEdit/template01',
                 children:[
                    { path:'template01', name:'template01',component: () => import('../views/template/Template01.vue')},
                    { path:'template02', name:'template02',component: () => import('../views/template/Template02.vue')},
                    { path:'template03', name:'template03',component: () => import('../views/template/Template03.vue')},
                 ]
        },
        ]
     },
    { path:'/test', name:'test',component: () => import('../components/Test.vue')},
    { path:'/hello', name:'hello',component: () => import('../components/HelloWorld.vue')},
    { path:'/404',name:'notFind',component:() => import('../views/sys/NotFind.vue')},
    {
        path: '/:w+',    // 此处需特别注意至于最底部
        redirect: '/404'
      }
    
]

const router =createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes
  });


  export default router;