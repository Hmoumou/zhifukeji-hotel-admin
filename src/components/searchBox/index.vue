<template>
    <div class="search">
        <div class="seek-box">
            <input type="text" placeholder="订单号/预定人/预订人手机号">
            <div class="seek" @click="handleClick">搜索</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'searchBox',
        prop:{
            value:{
                type:String,
                default () {
                    return []
                }
            },

        },
        data(){
           return{
                isClick:true
           }
        },
        methods:{
            handleClick(e){
                if(this.isClick){
                    this.isClick = false
                    console.log(e);
                    console.log('111111');
                    setTimeout(()=>{
                        this.isClick = true
                    },4000)
                }
               
            }
        }
    }
</script>

<style scoped lang='scss'>
 .seek-box {
      float: left;
      line-height: 36px;
      input {
        box-sizing: border-box; 
        height:36px;
        width: 260px;
        padding-left: 50px;
        outline: none;
        color: #666;
        background: url("../../image/评价管理/图标切图_03_11.png") no-repeat 10px center;
        background-size: 16px;
        border: 1px solid #b3ccff;
        border-top-left-radius: 18px 50%;
        border-bottom-left-radius: 18px 50%;
        border-right: none;
      }
      .seek {
        float: right;
        width: 56px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        margin-top: 2px;
        background: #518dfd;
        height: 36px;
        // border: 1px solid #518dfd;
        border-top-right-radius: 18px 50%;
        border-bottom-right-radius: 18px 50%;
        user-select: none;
      }
      .seek:active{
          background: #409eff;
      }
    }
</style>