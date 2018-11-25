<template>
    <div class="home">
       <div class="right">

       </div>
       <div class="left">
           <!-- 今日汇总 -->
               <el-card class="box-card today carditem">
                    <div slot="header" class="header clearfix">
                        <span class="title">今日汇总</span>
                        <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text todayitem">
                        {{'列表内容 ' + o }}
                        <br/>
                        <div class="num">{{0}}</div>
                    </div>
                </el-card>
                <!-- 待处理订单 -->
               <el-card class="box-card padingOrder carditem">
                    <div slot="header" class="header clearfix">
                        <span class="title">待处理订单</span>
                        <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
                    </div>
                    <div v-for="o in 2" :key="o" class="text orderitem">      
                        <div class="orderLeft fll">
                            <span>{{0}}至{{1}}</span>
                            <strong>豪华大床房</strong>
                            <span>梁朝伟</span>
                            <span>查看详情</span>
                        </div>
                        <div class="orderRight flr">
                            <span>共{{1}}晚</span>
                            <strong>RMB 888</strong>
                            <el-button type="primary">接受</el-button>
                        </div>
                    </div>
                </el-card>
                <!-- 住客看板 -->


                <!-- 审核离店 -->
                 <el-card class="box-card auditLeave carditem">
                    <div slot="header" class="header clearfix">
                        <span class="title">审核离店</span>
                        <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
                    </div>
                    <div v-for="o in 3" :key="o" class="text orderitem">      
                        <div class="auditLeave-top clearfix">
                            <span class="fll">{{0}}至{{1}}</span>
                            <span class="flr">共{{1}}晚</span>
                            <strong>豪华大床房</strong>
                            <span>梁朝伟</span>
                            <span>查看详情</span>
                        </div>
                        <div class="auditLeave-btm">
                           <el-button type="primary">已入住</el-button>
                           <el-button>未入住</el-button>
                           
                        </div>
                    </div>
                </el-card>
                





       </div>
       
    </div>
</template>

<script>
    export default {
        name:'home',
        data(){
            return{

            }
        },
        methods:{

        },
        created(){

        }

    }
</script>

<style scoped lang='scss'>
.home{
    .left{
        //today
        .today{
            box-sizing: border-box;
            .todayitem{
                padding:5px; 
                line-height: 2;
                border-radius: 4px;
                margin-right: 10px;
                background: #409eff;
                display: inline-block;
            }
            .num{
                float: right;
            }
        }

        //order
         .orderitem{
                border: 1px solid #f1f1f1;
                padding: 20px;
                margin-right: 20px;
                display: inline-block;
                 span,strong{
                    display: block;
                }
            }
        .padingOrder{
             box-sizing: border-box;
           
            .orderLeft{
                margin-right: 40px;           
            }
        }
        
    }
    .right{
        float: right;
        border: 1px solid red;
        width: 300px;
        height: 700px;
        margin-left: 20px;
    }
    
}
.carditem{
    // display: block;
    // margin-bottom: 50px;
    margin-bottom: 10px;
}
.title{
    padding-left: 6px;
    border-left:3px solid #75b8fc;
}
.header{
    font-weight: 700;
}
</style>
<style>
 .el-main{
    text-align: left;
    line-height: 1;
}
.icon-arw-top-copy{
     font-size: 14px;
}
</style>
