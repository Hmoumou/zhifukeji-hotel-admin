<template>

    <div class="appraise">
        <el-card class="top1 carditem box-card">
                <div slot="header" class="header"><span class="title">酒店评分</span></div>
                <div class="right">
                    <span>8.9</span>
                    共10分
                </div>
                <div class="left">
                    <div class="one">
                       <div> 
                            <span>服务</span>
                            <Star class="star" :score='4.1'/>
                        </div>
                        <div>
                            <span>卫生</span>  
                            <Star class="star" :score='4.1' />  
                        </div>
                    </div>
                    <div class="two">   
                       <div>
                            <span>环境</span>
                            <Star class="star" :score='4.1' />  
                       </div>
                        <div>
                            <span>位置</span>
                            <Star class="star" :score='4.1' />    
                        </div>
                    </div>  
                    <!-- 153 153  153 #999 15 -->
                </div>
        </el-card>
        <el-card  class="top2 carditem box-card">
            <div slot="header" class="header"><span class="title">评价详情</span></div>
            <div class="right">
                <div class="more-seek">
                    更多搜索选择选项<i></i>
                </div>
                <div class="seek-box">
                    <input type="text" placeholder="订单号/预定人/预订人手机号">
                    <div class="seek">搜索</div>
                </div>
            </div>
            <div class="left">
                <label :class="{activegood: !appraise}">
                    <input :value="0" name="appraise" v-model="appraise" type="radio" >好评
                </label>
                <label :class="{activegood: appraise}">
                    <input :value="1" name="appraise" v-model="appraise" type="radio" >差评
                </label>
            </div>
        </el-card>
    </div>
</template>

<script>
import Star from '@/components/star.vue'
    export default {
        data(){
            return{
                appraise:0,
                title:'服务'
            }
        },
        components:{
            Star,
        }
        
    }
</script>

<style scoped lang='scss'>

.appraise{
}

.top1{
   
    .right{
        float: right;
        font-size: 14px;
        span{
            color:#518dfd;
            font-size: 38px;
            font-weight: 600;
        }
    }
    .left{  
        .one{
            width: 260px;
            display: inline-block
        }
        .two{
            width: 260px;
            display: inline-block;
        }
        span{
            color:#2b2b2b;
            font-size: 14px;
            float: left;
            margin-right: 10px;
            margin-top: 5px;
        }
    }
}

.top2{
    background: #fff;
    h1{
        margin-bottom: 26px;
    }
    .right{
        float: right;
        font-size: 12px;
        .more-seek{
            color: #518dfd;
            float: right;
            width: 120px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            i{
                float: right;
                margin-top: 10px;
                width: 8px;
                height: 8px;
                border-right: 1px solid #518dfd;
                border-top: 1px solid #518dfd;
                transform: rotateZ(-45deg)
            }
        }
        .seek-box{
            float: left;
            line-height: 26px;
            input{
                height: 25px;
                width: 180px;
                padding-left: 26px;
                outline: none;
                color: #666;
                background: url('../../image/评价管理/图标切图_03_11.png') no-repeat 8px center;
                background-size: 14px;
                border: 1px solid #b3ccff;
                border-top-left-radius: 10px 50%;
                border-bottom-left-radius: 10px 50%;
                border-right: none;
            }
            .seek{
                float: right;
                width: 40px;
                text-align: center;
                color: #fff;
                background: #518dfd;
                height: 25px;
                border: 1px solid #518dfd;
                border-top-right-radius: 10px 50%;
                border-bottom-right-radius: 10px 50%;
                user-select: none;
            }
        }


    }
    .left{
        width: 240px;
        height: 26px;
        line-height: 26px;
        border: 1px solid #518dfd;
        border-top-left-radius: 6% 50%;
        border-top-right-radius: 6% 50%;
        border-bottom-right-radius: 6% 50%;
        border-bottom-left-radius: 6% 50%;
        overflow: hidden;
        label{
            float: left;
            width: 50%;
            height: 26px;
            text-align: center;
            user-select: none;
        }
        input{
            display: none;
        }
        .activegood{
            color: #fff;
            background: #518dfd;
        }
    }
}
.title{ padding-left: 6px;border-left:3px solid #75b8fc;}
.header{font-weight: 700;}
</style>
<style>
 .el-main {
    text-align: left;
    line-height: 1;
}
</style>
