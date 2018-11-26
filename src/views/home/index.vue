<template>
    <div class="home">
       <div class="right">
           <el-card class="box-card carditem">
               <div slot="header" class="header"><span class="title">病态日历</span> </div>
                    <p class="subtitle">* 数字为预订房数量</p>
               <calendar/>
           </el-card>
           <el-card class="box-card carditem">
               <div slot="header" class="header">
                   <span class="title">点评/回答</span>
               </div>
               <p class="subtitle">最新点评</p>
               <div v-for="o in 3" class="text commentitem" :key='o' :model="commentData">
                  <div class="comment-title clearfix">
                        <span class="flr">{{commentData.commentTime}}</span>
                        <h2>{{commentData.username}}</h2> 
                        <ul class="comment-star clearfix" >
                            <li id="stars" class="item" :value="commentData.starnum"  v-for="o in 5" :key='o'></li>
                        </ul> 
                        <p class="comment">{{commentData.comment}}</p>
                        <div class="box-Reply" v-if="commentData.replay" > 
                            <p>{{commentData.replay}}</p>                        
                            <textarea :value='commentData.replay' name="reply" class="reply" id="reply" cols="42" rows="5">
                            </textarea>
                            <el-button @click="handleYes" type='primary'>提交</el-button>
                            <el-button @click="handleNo">取消</el-button>  
                        </div>
                        <el-button v-else class="flr" type='primary' @click="handleReply">
                                    回复
                        </el-button>
                  </div>
               </div>
           </el-card>
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
                <!-- 住客看板 -->
                 <el-card class="box-card auditLeave carditem">
                    <div slot="header" class="header clearfix">
                        <span class="title">住客</span>
                        <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
                    </div>
                    <div class="progress clearfix" >
                        <div class="inline arriveHotelTime"> 
                            <span class="arriveHotelTimeSpan">5月12日</span> 
                            <br/>
                            <span class="arriveHotelTimeTitleSpan">预计到店时间</span>
                        </div>
                         <div class="inline timeItem"> 
                            <hr size=1 class="dottedLine">     
                            <div  v-for="i in 2" :key="i" class="inline inlineTimeItem"  >
                                <div v-if="i == 1" class="beginTime">
                                    <span class="inline inlineTimeItemSpan">09:30</span> 
                                    <br/>
                                    <img class="circle">
                                </div>
                                <div v-if="i == 2" class="endTime">
                                    <span class="inline inlineTimeItemSpan">12:10</span>
                                    <br/>
                                    <img class="circle"> 
                                </div>
                            </div>
                        </div>
                        <div class="inline rightTitlt"> 
                            <span class="arriveHotelTimeSpan">仅显示</span> 
                            <br/>
                            <span class="arriveHotelTimeSpan">三条信息</span>
                        </div>
                        
                    </div>
                    <div v-for="o in 3" :key="o" class="text orderitem">      
                        <div class="auditLeave-top ">
                            <div class="first clearfix">
                                 <span class="flr">共<span class="time">{{1}}</span>晚</span>
                                <span class="name">梁朝伟</span>
                            </div>
                            <span class="summoney">{{1500000}}</span>
                            <strong>豪华大床房</strong>
                        </div>
                        <div class="auditLeave-btm">
                           <el-button type="primary">已入住</el-button>
                           <el-button>未入住</el-button>                         
                        </div>
                    </div>
                </el-card>

                <!-- 审核离店 -->
                 <el-card class="box-card auditLeave carditem">
                    <div slot="header" class="header clearfix">
                        <span class="title">审核离店</span>
                        <el-button style="float: right; padding: 3px 0" type="text">查看全部<i class="iconfont icon-arw-top-copy"></i></el-button>
                    </div>
                    <div v-for="o in 3" :key="o" class="text orderitem">      
                        <div class="auditLeave-top ">
                            <div class="first clearfix">
                                 <span class="flr">共<span class="time">{{1}}</span>晚</span>
                                <span class="name">梁朝伟</span>
                            </div>
                            <span class="summoney">{{1500000}}</span>
                            <strong>豪华大床房</strong>
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
import calendar from '@/components/calendar.vue'
let stars = document.getElementById('stars')
    export default {
        name:'home',
        components:{
            calendar,
        },
        data(){
            return{
                haveValue:false,
                commentData:{
                    reply:'今天是个好日子',
                    username:"用户0729",
                    starnum:3,
                    commentTime:'2018-01-19',
                    comment:'店家超好非常满意的一次入住，感谢！'
                }
            }
        },
        methods:{
            handleReply(){
        
            },
            handleYes(){
                
            },
            handleNo(){
                
            }
        },
        created(){
            console.log(this.value);
        },
        watch:{
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
                overflow: hidden;
                width: 22.5%;
                font-size: 16px;
                padding:5px; 
                line-height: 2;
                border-radius: 4px;
                margin-right: 5px;
                background: #409eff;
                display: inline-block;
            }
            .num{
                font-size: 18px;
                margin-right: 5px;
                font-weight: 700;
                float: right;
            }
        }
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
         
        //auditleave
        .auditLeave{
            .orderitem{
                width:28.5%;
            }
            .auditLeave-top{
                margin-bottom: 10px;
                 line-height: 1.5;
            }
            .auditLeave-btm{
                span,strong{
                    display: block;
                }
            }
            .name{font-weight: 700;}
            .time{
                display: inline-block;
                font-size: 12px;
                color:#409eff;
            } 
            .summoney{
                font-size: 12px;
            }
        }

    }
    .right{
        float: right;
        width: 400px;
        margin-left: 20px;
        .subtitle{
            color:#409eff;
            margin-bottom: 10px;
        }
        .item{
            width: 25px;
            height: 25px;
            background: url('../../image/onstar.png')no-repeat;
            background-size: 100% 100%;
        }
        .commentitem{
            padding: 10px 20px;
            background: rgb(238, 243, 250);
            margin-bottom: 10px;
            .comment{margin: 10px 0; font-size: 14px;}
            ul li{float: left;cursor: pointer;}  
            ul{list-style: none;}
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
