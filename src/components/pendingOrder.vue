<template>
    <div class="pendingorder">
         <el-card class="box-card padingOrder carditem">
                    <div slot="header" class="header clearfix">
                        <span class="title">待处理订单</span>
                        <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
                    </div>
                    <div v-for="o in 2" :key="o" class="text orderitem clearfix">
                         <div class="orderRight flr clearfix">
                            <span class="">共<span class="time">{{1}}</span>晚</span>
                            <strong class= "money">RMB {{888}}</strong>
                            <el-button class="" type="primary">接受</el-button>
                        </div>      
                        <div class="orderLeft fll">
                            <span><span class="time">{{2018}}-{{6}}-{{21}}</span> 至 <span class="time">{{2018}}-{{6}}-{{21}}</span></span>
                            <strong>豪华大床房</strong>
                            <span>梁朝伟</span>
                            <span class="time">查看详情</span>
                        </div>
                       
                    </div>
                </el-card>
    </div>
</template>

<script>
    export default {
        name:'pendingOreder'
    }
</script>

<style scoped lang='scss'>
   //order
        .orderitem{
                width: 45%;
                border: 1px solid #f1f1f1;
                padding: 10px;
                margin-right: 8px;
                display: inline-block;
                 span,strong{
                    display: block;
                }
            }
        .padingOrder{
            line-height: 1.5;
             box-sizing: border-box;       
            .orderLeft{
                margin-right: 10px; 
                 .time{
                    display: inline-block;
                    font-size: 12px;
                    color:#409eff;
                }  
                   
            }
            .orderRight{
                text-align: right;
                line-height: 2;
                span{display: inline-block; }
                .time{
                    font-size: 12px;
                    color:#409eff;
                }
                .money{font-size: 16px; display: block;}
            }
            
          
        } 
        .carditem{ margin-bottom: 10px;}
        .title{ padding-left: 6px;border-left:3px solid #75b8fc;}
        .header{font-weight: 700;}

</style>