import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'//需要跳转的页面
import Index from '@/components/index'  //首页
import Salary from '@/components/Salary'//工资图表详情页
import SalaryDetail from '@/components/SalaryDetail'//工资列表详情
import MyList from '@/components/MyList'
Vue.use(Router);

export default new Router({
 
  routes: [
    {//首页
      path:'/',
      name:'Index',
      component:Index,
      children:[
        {
          path:'/MyList',
          name:'MyList',
          component:MyList
        }
      ]
      

    },
    {//需要跳转的页面
      path: '/Detail',
      name: 'Detail',
      component:Detail
    },
    {
      path: '/Salary',
      name: 'Salary',
      component:Salary
    },
    {
      path:'/SalaryDetail',
      name:"SalaryDetail",
      component:SalaryDetail
    },
    
  ]
})
