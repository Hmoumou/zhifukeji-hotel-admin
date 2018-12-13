<template>
    <div class="sidbar">
        <el-row class="tac">
        <el-col :span="24">
          <el-menu
            :router=true
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item
            index="/layout/home"
            :class="{active:$route.name === 'home'}"
            >
              <template slot="title">
                <router-link to='/layout/home'>首页</router-link>
              </template>
            </el-menu-item>
            
            <el-menu-item index="/layout/check" id="item" :class="{active:$route.name === 'check'}">
              <template slot="title">
                <router-link   to='/layout/check'>办理入住</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="/layout/houseType" id="item" :class="{active:$route.name === 'houseType'}">
              <template slot="title">
                <router-link   to='/layout/houseType' >房型管理</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="/layout/houseState" id="item" :class="{active:$route.name === 'houseState'}">
              <template slot="title">
                <router-link  to='/layout/houseState'>房态管理</router-link>
              </template>
            </el-menu-item>
             <el-submenu index="5" id="item">
              <template slot="title"  >
                <router-link  to='/layout/order' >订单管理</router-link>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/layout/order" :class="{active1:$route.name === 'order'}"><span>订单查询</span></el-menu-item>
                <el-menu-item index="/layout/orderSelect" :class="{active1:$route.name === 'orderSelect'}"><span>未处理订单</span></el-menu-item> 
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="/layout/member" id="item" :class="{active:$route.name === 'member'}">
              <template slot="title">
                <router-link  to='/layout/member' >会员管理</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="/layout/evaluation" id="item" :class="{active:$route.name === 'evaluation'}">
              <template slot="title">
                <router-link  to='/layout/evaluation' >评价管理</router-link>
              </template>
            </el-menu-item>
            <el-submenu index="8" id="item" >
              <template slot="title">
                <router-link  to='/layout/sellerCenter' >商户中心</router-link>
              </template>
              <el-menu-item-group >
                <el-menu-item index="/layout/sellerCenter" :class="{active1:$route.name === 'sellerCenter'}" ><span>基本信息</span></el-menu-item>
                <el-menu-item index="/layout/phoneWay" :class="{active1:$route.name === 'phoneWay'}"><span>联系方式</span></el-menu-item>
                <el-menu-item index="/layout/policy" :class="{active1:$route.name === 'policy'}"><span>酒店政策</span></el-menu-item>
                <el-menu-item index="/layout/photos" :class="{active1:$route.name === 'photos'}"><span>酒店相册</span></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
             <el-menu-item index="/layout/auditCenter" id="item" :class="{active:$route.name === 'auditCenter'}">
              <template slot="title">
                <router-link  to='/layout/auditCenter' >审核中心</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="/layout/tradingRecord" id="item" :class="{active:$route.name === 'tradingRecord'}">
              <template slot="title">
                <router-link  to='/layout/tradingRecord' >交易记录</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="/layout/test" id="item" :class="{active:$route.name === 'test'}">
              <template slot="title">
                <router-link  to='/layout/test' >测试页</router-link>
              </template>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>

    </div>
</template>

<script>
   let items = document.getElementById('item')
    export default {
        name:'Sidbar',
        data(){
          return{

          }
        },
         methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
            },

    }
</script>

<style scoped lang='scss'>
.active{
  background: rgb(237,243,255);
  border-left: 4px solid #409eff;
  font-size: 14px;
  a{
    margin-left: -3px;
    color:#409eff;
  }
}
.active1{
  background: rgb(237,243,255);
  border-left: 4px solid #409eff;
  font-size: 16px;
  span{
    margin-left: -4px;
  }
}
.sidbar{
  // height: 100vh;
  background: #fff;
}


/deep/ .el-submenu a{
  display: block;
  width: 100%;
  height: 57px;
}
/deep/ #item{
  border-top: 1px solid #f1f1f1;
}
/deep/ .el-submenu__title{
  padding: 0 0 0 -20px;
}
/deep/ .el-menu-item-group__title{
  display: none;
}
</style>
<style>
.el-submenu .el-menu-item{
  border-top: 1px solid #f1f1f1;
  color:#999;
  font-size: 12px;
}
.el-submenu-item{
    height: 52px;
    line-height: 52px;
}
.el-aside{
  height: 100%;
}
</style>
