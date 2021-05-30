import {createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {  
        path:'/', 
        name:'index',
        redirect: '/resumeTemplate',
        component: () => import('../views/MainFrame.vue'),
        children:[
            { path:'/resumeTemplate',component: () => import('../views/user/ResumeTemplate.vue')},
            { path:'/mineResume',component: () => import('../views/user/MineResume.vue')},
            { path:'/resumeEdit',component: () => import('../views/user/ResumeEdit.vue')},
        ]
     },
    { path:'/test', name:'test',component: () => import('../components/Test.vue')},

    { path:'/hello', name:'hello',component: () => import('../components/HelloWorld.vue')}
]

const router =createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });


  export default router;