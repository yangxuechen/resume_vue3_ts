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
            { path:'/privacyPolicy',component: () => import('../views/user/PrivacyPolicy.vue')},
            { path:'/contact',component: () => import('../views/user/Contact.vue')},
            { path:'/compsDisplay',name:'compsDisplay',component:() => import('../views/sys/CompsDisplay.vue'),
              redirect:'/compsDisplay/personAvatar',
              children: [
                { path:'personAvatar', name:'personAvatar',component: () => import('../views/sys/compsPage/PersonAvatar.vue')},
                { path:'personBaseInfo', name:'personBaseInfo',component: () => import('../views/sys/compsPage/PersonBaseInfo.vue')},
                { path:'personSkill', name:'personSkill',component: () => import('../views/sys/compsPage/PersonSkill.vue')},
                { path:'personEdu', name:'personEdu',component: () => import('../views/sys/compsPage/PersonEdu.vue')},
                { path:'personWork', name:'personWork',component: () => import('../views/sys/compsPage/PersonWork.vue')},
                { path:'titlePage', name:'titlePage',component: () => import('../views/sys/compsPage/TitlePage.vue')},
                { path:'iconList', name:'iconList',component: () => import('../views/sys/compsPage/IconList.vue')},
                { path:'inputPage', name:'inputPage',component: () => import('../views/sys/compsPage/InputPage.vue')},
              ]
            },
            {
                 path:'/resumeEdit',
                 component: () => import('../views/user/ResumeEdit.vue'),
                 props: route => ({ query: route.query.name }),
                 redirect:'/resumeEdit/template01',
                 children:[
                    { path:'template01', name:'template01',component: () => import('../views/template/Template01.vue')},
                    { path:'template02', name:'template02',component: () => import('../views/template/Template02.vue')},
                    { path:'template03', name:'template03',component: () => import('../views/template/Template03.vue')},
                    { path:'template04', name:'template04',component: () => import('../views/template/Template04.vue')},
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