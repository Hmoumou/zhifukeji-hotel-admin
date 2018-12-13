<template>
  <div class="order">
    <div class="orderDetails">
      <el-row :gutter="20">
       <!-- 左边start -->
        <el-col :span="9">
            <div class="grid-content bg-purple">
                <!-- 栅格wraper end  card start-->
                <el-card class="clearfix">
                    <div class="orderDetail-left clearfix" :model="searchData">
                        <!-- 上面的title -->
                        <div class="searchTitle clearfix">
                            <div class="title-inner clearfix">
                                <span class="flr blue fs16 fw ">{{searchData.orderDetails.length}}</span>
                                <span class="fw fs16">未处理订单</span>
                            </div>
                        </div>
                        <!-- 滚动订单列表 -->
                        <el-scrollbar class="scollbar">
                            <div class="searchContent clearfix" v-for="o in 5" :key="o">
                            <el-card class='clearfix  active parts'>
                                <div class="type clearfix part">
                                    <span class="flr overTime">{{searchData.overTime}}</span>
                                    <el-button type='primary' class="none">失效</el-button>
                                    <span class="blue">{{searchData.orderId}}</span>       
                                </div>
                                <div class="roomType part">
                                    <span class="flr fs14">共 <span class="blue">1</span> 间</span>
                                    <strong class="fw fs14">豪华大床房</strong>     
                                </div>
                                <div class="user mb5 fs14">{{searchData.username}}</div>
                                <div class="totalMoney part fs14">{{searchData.totalMoney}}</div>
                                <div class="startTime clearfix fs14">
                                    <div class="flr fw fs14">共 <span class="blue">1</span> 晚</div>
                                    <span class="blue">{{searchData.startTime}}</span> 至 
                                    <span class="blue">{{searchData.endTime}}</span>
                                </div>
                            </el-card>
                            </div>
                        </el-scrollbar>
                    </div>
                </el-card>  
            </div>
        </el-col>
        <!-- 右边start  订单详情-->
        <el-col :span="15">
            <div class="grid-content bg-purple">
                <div class="orderDetail-right">
                <el-card class="box-card carditem">
                    <div slot="header" class="header"><span class="title">订单详情</span> </div>
                    <div class="table" :model='orderData'>
                        <table class="table1">
                            <tr>
                                <th>订单编号</th>
                                <td class="blue">{{orderData.orderId}}</td>
                                 <th>订单状态</th>
                                <td class="blue fw fs16">{{orderData.type}}</td>
                            </tr>
                        </table>
                         <table class="table2">
                            <tr class="bg">
                                <th>预订人姓名</th>
                                <td >{{orderData.username}}</td>
                                 <th>预订房型</th>
                                <td class="blue fw fs16">{{orderData.houseType}}</td>
                            </tr>
                            <tr>
                                <th>预订人电话</th>
                                <td>{{orderData.userPhonenum}}</td>
                                <th>房间价格</th>
                                <td>{{orderData.price}}</td>
                            </tr>
                            <tr class="bg">
                                <th>预订日期</th>
                                <td class="blue">{{orderData.orderDate}} <span>共<span class="blue">1</span>晚</span></td>
                                <th>最晚抵店时间</th>
                                <td>{{orderData.endTime}}</td> 
                            </tr>
                        </table>
                        <table class="desc">
                            <tr>
                                <th>备注</th>
                                <td>{{orderData.desc}}</td>
                            </tr>
                        </table>
                         <table class="table3">
                            <tr class="bg">
                                <th>支付方式</th>
                                <td >{{orderData.payType}}</td>
                                 <th>订单来源</th>
                                <td>{{orderData.source}}</td>
                            </tr>
                             <tr>
                                <th>合计金额</th>
                                <td class="blue">RMB {{orderData.totalMoney}}</td>
                                 <th>优惠价格</th>
                                <td class="blue fw fs14">RMB {{orderData.discounts}}</td>
                            </tr>
                        </table>
                         <table class="table4">
                            <tr>
                                <th>失效原因</th>
                                <td >{{orderData.loseCause}}</td>
                            </tr>
                        </table>
                    </div>
                </el-card>
            </div>
            </div>
        </el-col>
      </el-row>
    </div>
  </div> 
</template>

<script>
export default {
  name: "order",
  data() {
    return {
        activeIndex:'',
         orderData:{
             username:'梁朝伟',
             orderId:'234567522134',
             type:'失效订单',
             houseType:'豪华大床房',
             userPhonenum:'1212124312',
             price:'299',
             orderDate:'2018/11/21-2018/11/22',
             endTime:'2018/11/21',
             desc:'请打扫人员提前打扫房间，我有洁癖。',
             payType:'支付宝',
             source:'网络订单',
             totalMoney:'998',
             discounts:'666',
             loseCause:'商家拒绝，拒绝原因“禁止携带宠物。”'
         },
        searchData: {
            text: "梁朝伟",
            orderDetails:[1,2,3,4],
            orderId:'12345324664',
            overTime:'06-29 12:32',
            username:'梁朝伟',
            totalMoney:'150 0000 0000',
            startTime:'2018-07-04',
            endTime:'2018-07-05'
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
.active{ border: 1px solid #9dccfa;}
.parts{
    margin-bottom: 15px;
    background: #edf3ff;
    border-radius: 0px;
}
.order {
    box-sizing: border-box; 
    // overflow-x: hidden;
    //顶部查询框样式
 
}
//下面订单详情样式
.orderDetails{
     .orderDetail-left{
         padding-right: 12px;
        //  width:35%;
         height: 100vh;
         overflow-y: hidden;
        .scollbar{
            height: 100%;
        }
       
         .part{ margin-bottom: 10px; }
         .searchTitle{
             padding: 8px;
             margin-bottom: 10px;
             background: #f9fbff;
             .title-inner{
                background: #f9fbff;
                padding: 4px;
                border-left: 3px solid #409eff;
             }
            
         }
         .span{ font-size: 12px; color:#c1c1c1;}
         .overTime{ font-size: 12px; line-height: 28px  }
         .totalMoney{color:#c6c9d0; line-height: 1.2;}
     }
     .orderDetail-right{
        //  width: 60%;
        /deep/ .el-card__header,.el-card{
            border: none;
        }
        .table{  
            table{
                margin-bottom: 15px;
                text-align: center;
                border: 1px solid  #f7faff;
                width: 100%;
                th{ height: 45px; width:22%; background: #f7faff; font-size: 14px; }
                td{ height: 45px; width:33%;font-size: 12px }
            }
            .desc{height: 60px; width:100%;
                th{ height: 60px; width:22%; background: #f7faff; }
                td{ width:78%; height: 60px; font-size: 14px ; color:#b9b9b9;} 
                 }
            .table4 { 
                th{ height: 45px; width:22%; background: #f7faff; }
                td{ width:78%; height: 45px; font-size: 14px ; color:#b9b9b9; }  }
        }
     }
    }

.title { padding-left: 6px;border-left: 3px solid #75b8fc;}
.header {font-weight: 700;}
.order-item {/deep/ .el-card__body {display: none; }}

</style>
<style>
.el-main { text-align: left; line-height: 1;}
.el-input__inner { padding: 0;background: #f9fbff;border: none;height: 36px;line-height: 36px;}
.el-button{ border-radius: 20px;  padding: 6px 20px; font-size: 14px;}
.el-button--text {font-size: 14px; margin-top: 9px;}
.flr{float: right;}
</style>
