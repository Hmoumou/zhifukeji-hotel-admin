<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        name:'todaySummary',

    }
</script>

<style scoped lang='scss'>
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
 .carditem{ margin-bottom: 10px;}
.title{ padding-left: 6px;border-left:3px solid #75b8fc;}
.header{font-weight: 700;}
</style>