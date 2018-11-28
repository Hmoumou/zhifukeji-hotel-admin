<template>
  <div class="order">
    <div class="orderScreen">
      <el-card class="box-card carditem clearfix order-item">
        <div slot="header" class="header">
          <span class="title">入住房间及订单</span>
          <div class="searchBox" :model="searchData">
            <i class="iconfont icon-sousuo"></i>
            <el-input v-model="searchData.text" placeholder="订单号/预订人/预订人手机号" class="input"></el-input>
            <el-button type="primary" class="btn" @click="handleSearch">搜索</el-button>
          </div>

          <el-button style="float: right; padding: 3px 0" type="text">更多搜索选项
            <i class="iconfont icon-arw-top-copy"></i>
          </el-button>
        </div>
      </el-card>
    </div>
    <div class="orderDetails">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo navtop"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">全部订单</el-menu-item>
        <el-menu-item index="2">未处理订单</el-menu-item>   
        <el-menu-item index="3">已接单订单</el-menu-item>
        <el-menu-item index="4">
          <a href="#" >已入住订单</a>
        </el-menu-item>
      </el-menu>


      <el-card>
          <div class="orderDetail-left clearfix" :model="searchData">
              <span class="flr">共{{searchData.orderDetails.length}}条消息 </span>
              <span class="">查询 "{{searchData.text}}"</span>
          </div>
          <div class="orderDetail-right"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
        activeIndex: '1',
        activeIndex2: '1',
        searchData: {
            text: "梁朝伟",
            orderDetails:[1,2,3,4]
        }
    };
  },
  methods: {
    handleSearch() {},
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
};
</script>

<style scoped lang='scss'>

.order {
    //顶部查询框样式
  .orderScreen{
     border: 0.1px solid #fff;
     position: relative;
    .carditem {
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        }
    .searchBox {
        border:1px solid #75b8fc;
        border-radius: 20px;
        background: #f9fbff;
        display: inline-block;
        margin-left: 40%;
        .icon-sousuo {
        color: #518dfd;
        padding: 0 20px;
        }
        .input {
        border: none;
        width: 250px;
        }
        .btn {
        padding: 14px 24px;
        }
    }
  }
}
//下面订单详情样式
.orderDetails{
     margin-top: 90px;
     .orderDetail-left{
         span{
             font-size: 12px;
             color:#c1c1c1;
         }
     }
    }


.title {
  padding-left: 6px;
  border-left: 3px solid #75b8fc;
}
.header {
  font-weight: 700;
}
.order-item {
  /deep/ .el-card__body {
    display: none;
  }
}
</style>
<style>
.el-main {
  text-align: left;
  line-height: 1;
}
.el-input__inner {
  padding: 0;
  background: #f9fbff;
  border: none;
}
.el-button {
  overflow: hidden;
  border-radius: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.el-button--text {
  font-size: 16px;
  margin-top: 9px;
}
</style>
