<template>
    <div class="member">
        <div class="box">
            <div class="img"></div>
            <div class="jianshe">此功能正在建设中...</div>
        </div>      
    </div>
</template>
<script>
    export default {
        name:'member'
    }
</script>

<style scoped lang='scss'>
.member{
    position: relative;
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    .box{
        width: 300px;
        height: 280px;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50% ,-50%);
        .img{
            width: 300px;
            height: 240px;
              background: url('../../image/正在建设/建设中.png')no-repeat;
              background-size: 100% 100%;
        }
        .jianshe{
            text-align: center;
            color:#7a8ba9;
            font-weight: 700;
            height: 70px;
            line-height: 70px;
            font-size: 20px
        }
  
    }
    
}

</style>