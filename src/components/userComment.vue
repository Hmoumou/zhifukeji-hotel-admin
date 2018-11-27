<template>
    <div>
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
</template>

<script>
let stars = document.getElementById('stars')
    export default {
        name:'home',
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
        }

    }
</script>

<style scoped lang='scss'>
        .subtitle{
            color:#409eff;
            margin-bottom: 10px;
        }
        .item{
            width: 25px;
            height: 25px;
            background: url('../image/onstar.png')no-repeat;
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
.carditem{ margin-bottom: 10px;}
.title{ padding-left: 6px;border-left:3px solid #75b8fc;}
.header{font-weight: 700;}
 
</style>
