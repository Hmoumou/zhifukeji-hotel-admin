<template>
    <div class="home">
       <div class="right">
           <!-- 房态日历 -->
           <el-card class="box-card carditem">
               <div slot="header" class="header"><span class="title">房态日历</span> </div>
                    <p class="subtitle">* 数字为预订房数量</p>
               <calendar/>
           </el-card>
           <!-- 用户评价 -->
           <userComment/>
         
       </div>
       <div class="left">
           <!-- 今日汇总 -->
            <todaySummary/>
            <!-- 待处理订单 -->
                <pendingOrder/>
            <!-- 住客看板 -->                
            <lodgerKB/>
            <!-- 审核离店 -->
            <auditLeave/>
       </div>
       
    </div>
</template>

<script>
import calendar from '@/components/calendar.vue'
import todaySummary from '@/components/todaySummary.vue'
import pendingOrder from '@/components/pendingOrder.vue'
import lodgerKB from '@/components/lodgerKB.vue'
import auditLeave from '@/components/auditLeave.vue'
import userComment from '@/components/userComment.vue'

let stars = document.getElementById('stars')
    export default {
        name:'home',
        components:{
            calendar,
            todaySummary,
            pendingOrder,
            lodgerKB,
            auditLeave,
            userComment
        },
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

    }
    .right{
        float: right;
        width: 400px;
        margin-left: 20px;
        .subtitle{
            color:#409eff;
            margin-bottom: 10px;
        }
       
    }
    
}
.carditem{ margin-bottom: 10px;}
.title{ padding-left: 6px;border-left:3px solid #75b8fc;}
.header{font-weight: 700;}

.progress{
    margin-bottom: 10px;
    .inline{
        float:left;
    }
    .arriveHotelTime{
     .arriveHotelTimeSpan{
       color:#409eff;
       font-size: 15px;
     }
     .arriveHotelTimeTitleSpan{
       font-size: 15px;
     }
    }
    .rightTitlt{
        float: right;
        color:#409eff;
        font-size: 15px;
    }
    .timeItem{
        width: 75%;
        height: 40px; 
    }
    .dottedLine {
     color: #409eff;
     border-style: dashed;
     margin-left: 20px;
     margin-top: 25px;
    }
    .inlineTimeItem{
        position: relative;
    }
    .inlineTimeItemSpan{
        color: #409eff;
    }
    .circle {
        background-color: #409eff;
        height: 15px;
        width: 15px;
        border-radius: 7.5px;
        margin-top: 10px;
        margin-left: 12px;
    }
    .beginTime{
        position: absolute;
        top: -33px;
    }
    .endTime{
        position: absolute;
        right: -420px;
        top: -33px;
    }
}


 
</style>

<style>
 .el-main{
    text-align: left;
    line-height: 1;
}
.icon-arw-top-copy{font-size: 14px;}
.el-button{
    border-radius: 20px;
    padding: 6px 20px;
    font-size: 12px;
}
</style>
