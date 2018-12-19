import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  layout:()=>import('../views/layout/layout.vue'),
  // login:()=>import('../views/login/login.vue'),
  // register:()=>import('../views/register/index.vue'),
}

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   // redirect:'/login',
    //   name:'login',
    //   component:components.login
    // },
    // {
    //   path:'/register',
    //   name:'register',
    //   component:components.register
    // },
    {
      path: '/',
      name: 'layout',
      component:components.layout,
      redirect:'/layout/home',
      children:[
        {
          path: '/layout/home',
          name: 'home',
          component:()=>import('../views/home/index.vue'),
          meta:{
            title:'首页'
          },
        },
        {
          path: '/layout/check',
          name: 'check',
          component:()=>import('../views/check/index.vue'),
          meta:{
            title:'办理入住'
          },
        },
        {
          path: '/layout/houseType',
          name: 'houseType',
          component:()=>import('../views/houseType/index.vue'),
          meta:{
            title:'房型管理'
          },
        },
        {
          path: '/layout/houseState',
          name: 'houseState',
          component:()=>import('../views/houseState/index.vue'),
          meta:{
            title:'房态管理'
          },
        },
        //订单管理 --未处理订单
        {
          path: '/layout/order',
          name: 'order',
          component:()=>import('../views/order/index.vue'),
          meta:{
            title:'订单管理'
          },
        },
        //订单管理 --订单查询
        {
          path: '/layout/orderSelect',
          name: 'orderSelect',
          component:()=>import('../views/order/orderSelect.vue'),
          meta:{
            title:'订单查询'
          },
        },
         //测试页 ---结束的时候请删掉
         {
          path: '/layout/test',
          name: 'test',
          component:()=>import('../views/test/index.vue'),
          meta:{
            title:'测试页'
          },
        },
        {
          path: '/layout/member',
          name: 'member',
          component:()=>import('../views/member/index.vue'),
          meta:{
            title:'会员管理'
          },
        },
        {
          path: '/layout/evaluation',
          name: 'evaluation',
          component:()=>import('../views/evaluation/index.vue'),
          meta:{
            title:'评价管理'
          },
        },
        {
          path: '/layout/sellerCenter',
          name: 'sellerCenter',
          component:()=>import('../views/sellerCenter/index.vue'),
          meta:{
            title:'商户中心'
          },
        },
        //商户中心    后加的
        {
          path: '/layout/sellerCenterChange',
          name: 'sellerCenterChange',
          component:()=>import('../views/sellerCenter/change.vue'),
          meta:{
            title:'修改信息'
          },
        },
        {
          path: '/layout/phoneWay',
          name: 'phoneWay',
          component:()=>import('../views/sellerCenter/phoneWay.vue'),
          meta:{
            title:'联系方式'
          },
        },
        {
          path: '/layout/policy',
          name: 'policy',
          component:()=>import('../views/sellerCenter/policy.vue'),
          meta:{
            title:'酒店政策'
          },
        },
        {
          path: '/layout/photos',
          name: 'photos',
          component:()=>import('../views/sellerCenter/photos.vue'),
          meta:{
            title:'酒店相册'
          },
        },



        {
          path: '/layout/auditCenter',
          name: 'auditCenter',
          component:()=>import('../views/auditCenter/index.vue'),
          meta:{
            title:'审核中心'
          },
        },
        {
          path: '/layout/tradingRecord',
          name: 'tradingRecord',
          component:()=>import('../views/tradingRecord/index.vue'),
          meta:{
            title:'交易记录'
          },
        },
      ]
    }
  ]
})
