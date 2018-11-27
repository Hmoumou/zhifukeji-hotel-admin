<template>
    <div class="Header clearfix">
          <div class="right clearfix">
            <div class="avatar fll">
            </div>
            <span class="user fll">五星级大酒店前台小芳</span>
            <div class="menu clearfix">
                <div class="home fll item" @click="gohome">
                    <i class="iconfont icon-index"></i>
                    <span>首页</span>
                </div>
                <div class="inform fll item">
                    <i class="iconfont icon-tongzhi2"></i>
                    <span>通知</span>
                </div>
                <div class="logout fll item">
                    <i class="iconfont icon-tuichu2"></i>
                    <span>退出</span>
                </div>
            </div>
        </div>
        <div class="left clearfix">
            <div class="logo fll" @click="gohome">
                <img src="../image/图标切图_03_06.png" alt="logo">
            </div>
            <div class="line fll">
            </div>
            <div class="title fll">
                <span class="span1">酒店管理系统</span>
                <span class="span2">HOTEL MANAGEMENT</span>
            </div>
        </div>
      
    </div>
</template>

<script>
let items = Array.from(document.getElementsByClassName('item'))
    export default {
        name:'Header',
        methods:{
          gohome(){
              this.$router.push('/layout/home')
          }
        }
    }
</script>

<style scoped lang='scss'>
.Header{
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
    width: 100%;
     height: 90px;
    .left{
        width: 300px;
        float: left;
         .logo{
             box-sizing: border-box;
             width:60px;
             height:60px;
             img{
                 margin-top: 12.5px;
                 display: inline-block;
             }
            //  background: url('../image/图标切图_03_06.png')no-repeat;
          }
          .line{
              margin: 16px 0 0 10px;
              border: 1px solid #f1f1f1;
              height: 40px;
              color:#f1f1f1;
          }
          .title {
              margin-top: 10px;
              box-sizing: border-box;
              line-height: 1.5;
              margin-left: 15px;
              color:#333;
              width: 160px;
             
          }
          .title .span1{
            font-weight: 700;
            font-size: 22px;
            display: block;
            width: 160px;         
          }
           .title .span2{
                display: block;
                width: 160px; 
                font-size: 10px;             
              }
        
    }
    .right{
        padding: 12.5px 0px;
        width: 400px;
        float: right;
        .avatar{
            width:45px ;
            height: 45px;
            border-radius: 50% ;
            background: url('../image/0001.jpg')no-repeat;
            background-size: 100% 100%;

        }
        .user{
            margin: 0 20px;
            line-height: 2.6;
            font-size: 16px;
            font-weight: 700;
        }
        .home{
            line-height: 1.2;
            width: 40px;
            height: 45px;
            .iconfont{
                font-size: 24px;
                display: block;
                color:#409eff;
            }
            span{
                font-size: 14px;
                color:#888;
            }
        }
         .logout{
            line-height: 1.2;
            width: 40px;
            height: 45px;
            .iconfont{
                font-size: 24px;
                display: block;
                color:#409eff;
            }
            span{
                font-size: 14px;
                color:#888;
            }
        }
         .inform{
             margin: 0 6px;
            line-height: 1.2;
            width: 40px;
            height: 45px;
            .iconfont{
                font-size: 24px;
                display: block;
                color:#409eff;
            }
            span{
                font-size: 14px;
                color:#888;
            }
        }
    }
   
}
/deep/ .el-header{
    display: none;
}

</style>