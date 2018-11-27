<template>
    <div class="check">
       <!-- <el-card class="box-card carditem">
        <div slot="header" class="header"><span class="title">入住房间及订单</span> </div>
           <div class="left">
               <i class="box iconfont icon-duigou2"></i>
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="名称">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                </el-form>
            </div> 
            <div class="right">

            </div> -->
        <!-- </el-card> -->
    </div>
</template>

<script>
    export default {
        name:'Check',
    }
</script>

<style scoped lang='scss'>
.active{
    position: relative;
    border: 1px solid #409eff;
    .box{
        font-size: 16px;
        position: absolute;
        top: 0;
        right: 0;
    }
}
/deep/ .el-main{
     padding: 0;
    text-align: left; 
    line-height: 1;
}

</style>
<style>
/* .el-main{
    padding: 0;
    text-align: left; 
    line-height: 1;
} */
</style>
