<template>
    <div class="box">
        <div class="title">
            <div class="right">xx-xx 至 xx-xx</div>
            七日化房间管理
        </div>
        <div class="content">
            <!-- 头部 -->
            <ul class="title-ul clearfix">
                <li class="first-li">
                    <div class="line"></div>
                    <div class="day">日期</div>
                    <div class="home">房型</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期一</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期二</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期三</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期四</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期五</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期六</div>
                </li>
                <li>
                    <div class="num">16</div>
                    <div class="week">星期日</div>
                </li>
            </ul>
            <!-- 身体  -->
            <ul class="body-ul clearfix">
                <li class="first-child">豪华大床房</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
            </ul>
            <ul class="body-ul body-ul2 clearfix">
                <li class="first-child">双标签</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li id="no-order">暂不可订</li>
                <li>7</li>
            </ul>
            <ul class="body-ul clearfix">
                <li class="first-child long-item">豪华海景大床房</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
            </ul>
            <ul class="body-ul body-ul2 clearfix">
                <li class="first-child">豪华家庭房</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
            </ul>
            <ul class="body-ul clearfix">
                <li class="first-child">天字一号房</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li id="full">满</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
// 全局样式
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
.clearfix::after{
    display: block;
    content: '';
    clear: both;
    overflow: hidden;
}
// 大盒子
.box{
    // margin: 10px 0 0 20px;
    width: 360px; // 宽度具体调整
    // background: #f1f1f1;
}
// 头部标题
.title{
    height: 42px;
    line-height: 42px;
    padding: 0 12px;
    color: #fff;
    font-size: 16px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: url('../image/home/title.png') no-repeat;
    background-size: 100% 100%; 
    .right{
        float: right;
        font-size: 14px;
    }
}
// 内容区
.content{
    border: 1px solid #caddfe;
    border-top: none;
}
// 内容的标题
.title-ul{
    li{
        float: left;
        width: 38.25px;
        height: 42px;
    }
    li:nth-child(2n){
        background: #e1ecff;
    }
    li:nth-child(2n-1){
        background: #eff5ff;
    }
    .first-li{
        width: 90px;
        position: relative;
        color: #95a7fe;
        font-size: 14px;
        .line{
            position: absolute;
            top: 21px;
            left: -5px;
            height: 1px;
            width: 100px;
            background: #caddfe;
            -webkit-transform: rotateZ(35deg);
            transform: rotateZ(24deg);
        }
        .day{
            position: absolute;
            right: 16px;
            top: 4px;
        }
        .home{
            position: absolute;
            left: 16px;
            bottom: 4px;
        }
    }
    .num{
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
    }
    .week{
        font-size: 12px;
        text-align: center;
    }
}
// 内容的身体 奇数行
.body-ul {
    height: 42px;
    line-height: 42px;
    text-align: center;
    color: #5c5c5c;
    .first-child{
        width: 90px;
        text-align: left;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 14px;
    }
    .long-item{
        padding: 6px 12px 0 12px !important;
        line-height: 1.2 !important;
    }
    li{
        float: left;
        width: 38.25px;
        height: 42px;
    }
    li:nth-child(2n){
        background: #eff5ff;
    }
    li:nth-child(2n-1){
        background: #fff;
    }
}

// 偶数行
.body-ul2{
    li:nth-child(2n){
        background: #e1ecff;
    }
    li:nth-child(2n-1){
        background: #eff5ff;
    }
}
// 满房
#full{
    background: #fd7e92;
    color: #fff;
    font-size: 12px;
}
// 暂不可预订
#no-order{
    background: #b7b8ff;
    color: #fff;
    line-height: 1.2 !important;
    padding: 6px 4px 0 !important;
    box-sizing: border-box;
    font-size: 12px;
}
</style>