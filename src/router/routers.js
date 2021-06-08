import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout';

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/login',
    meta:{ title:'登录',noCache:true},
    component:(resolve)=>require(['@/views/login'],resolve),
    hidden:true
  },
  {
    path:'/',
    component:Layout,
    redirect:'/dashboard',
    children:[
      {
        path:'dashboard',
        component:(resolve)=>require(['@/views/home'],resolve),
        name:'Dashboard',
        meta:{title:'首页',icon:'index',affix:true,noCache:true}
      }
    ]
  },
  {
    path: '/test',
    meta:{ title:'测试',noCache:true},
    component:(resolve)=>require(['@/views/test'],resolve),
    hidden:true
  },
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
