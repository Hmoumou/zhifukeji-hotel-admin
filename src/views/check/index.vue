<template>
    <div class="check">
      <div class="top"> 
          <el-card class="box-card carditem clearfix">
            <div slot="header" class="header"><span class="title">入住房间及订单</span> </div>
                <div class="left fll">
                    <el-form :model='formData' label-width="140px" label-position='left'>
                        <el-form-item label="房型选择" prop="houseType" >
                            <el-select v-model="formData.houseType" placeholder="请选择房型">
                                <el-option label="豪华大床房" value="0"></el-option>
                                <el-option label="双标签" value="1"></el-option>
                                <el-option label="豪华海景大床房" value="2"></el-option>
                                <el-option label="豪华家庭房" value="3"></el-option>
                                <el-option label="天字一号房" value="4"></el-option>
                            </el-select> 
                        </el-form-item>
                        <el-form-item label="入住日期-离店日期" >
                            <el-col :span="8">
                                <el-form-item prop="date1" >
                                    <el-date-picker type="date"   placeholder="请选择 年-月-日" v-model="formData.checkTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="8">
                                <el-form-item prop="date1">
                                    <el-date-picker type="date"  placeholder="请选择 年-月-日" v-model="formData.leaveTime" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="房间编号" prop="houseId" >
                            <el-input v-model="formData.houseId"></el-input>
                        </el-form-item>
                        <el-form-item label="支付方式" prop="payType">  
                            <el-checkbox-group v-model="formData.payType">
                            <!-- <i class="iconfont icon-duigou2"></i> -->
                            <el-checkbox class="active" label="微信支付" name="type" @click="handlePayToWX"></el-checkbox>
                            <el-checkbox label="支付宝" name="type" @click="handlePayToZFB"></el-checkbox>
                            <el-checkbox label="在线支付" name="type" @click="handlePayToOnline"></el-checkbox>
                            <el-checkbox label="现金支付" name="type" @click="handlePayToMoney"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item> 
                    </el-form>
                </div> 
                <div class="right flr clearfix">
                    <div class="right-data " :model="moneyData">
                        <div class="item">房价<span class="data">RMB {{moneyData.price}} /晚</span></div>
                        <div class="item">时间<span  class="data">{{moneyData.long}}/晚</span></div>
                        <div class="item">押金 <span class="data">RMB {{moneyData.earnest}}</span></div>
                        <div class="lastItem">总金额<span class="lastData">RMB {{moneyData.total}}/晚</span></div>
                    </div>            
                </div>
            </el-card>
        </div>
        <div class="btm">
             <el-card class="btm-right box-card flr clearfix " @click="handleAdduser">
                <div class="icon">
                    <i class="iconfont icon-jiahao1"></i>
                    <span class="add">添加入住人</span>
                </div>
            </el-card>
            <el-card class="btm-left box-card carditem clearfix">
                 <div slot="header" class="header"><span class="title">入住人01</span> </div>
                <el-form :model='userData' label-width="100px" label-position='left'>
                    <el-form-item label="姓名" prop="username"  >
                        <el-input   placeholder='请输入姓名'></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号" prop="IDcard" >
                        <el-input placeholder='请输入身份证号'></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="phone" >
                        <el-input placeholder='请输入联系电话'></el-input>
                    </el-form-item>
                </el-form>
            </el-card>
           
        </div>
    </div>
</template>

<script>
    export default {
        name:'Check',
        data(){
            return{
                formData:{
                    houseType:'',
                    check:'',
                    leaveTime:'',
                    houseId:'',
                    payType:'',
                },
                moneyData:{
                    price:888,
                    long:5,
                    earnest:88,
                    total:4528

                },
                userData:{
                    username:'',
                    IDcard:'',
                    phone:''
                }
            }
        },
        methods:{
            handlePayToWX(){

            },
            handlePayToZFB(){

            },
            handlePayToOnline(){

            },
            handlePayToMoney(){

            },
            handleAdduser(){

            }
        }
    }
</script>

<style scoped lang='scss'>
.active{
    position: relative;
    border: 1px solid #409eff;   
}
.top{
    .icon-duigou2{
        font-size: 16px;
        position: absolute;
        top: 0;
        color: #409eff;
        right: 0;
    }
    .check{
        position: relative;
        .carditem{
            position: absolute;
            top: -20px;
            left: -20px;
            right:-20px;
        }
    }
    .right{
        box-sizing: border-box;
        padding: 40px 20px 20px 50px;
        // border-left: 1px virtual #f1f1f1;
        width: 400px;
        border-left: 1px solid #f1f1f1;
        .right-data{
            span{
                float: right;
            }
            .item{
                font-size: 20px;
                font-weight: 700;
                margin-bottom: 20px;
            }
            .data{
                color:#409eff;
            }
            .lastItem{
                font-size: 24px;
                font-weight: 800;
            }
        .lastData{
                color:#409eff;
                font-weight: 900;
        }
        
        }
    }

}
.btm{
    margin-top: 10px;
    .btm-left{
        padding: 10px;
        width: 48%;
    }
     .btm-right{
        border: 1px dashed #409eff;
        box-sizing: border-box;
        position: relative;
        float: right;
        height: 300px;
        width: 48%;
        .icon{
            width: 100%;
            position: absolute;
            top: 38%;
        }
        .icon-jiahao1{
            margin-left: 45%;
            font-size: 50px;
            color:#409eff;
        }
        .add{
            margin-top: 10px;
            display: block;
            color: #409eff;
            text-align: center;
        }
    }
}

.title{ padding-left: 6px;border-left:3px solid #75b8fc;}
.header{font-weight: 700;}
/deep/ .el-form-item__label{
    font-weight: 700
}
</style>
<style>
.el-main{
    text-align: left; 
    line-height: 1;
}
.el-select__caret{
    color: #409eff;
}
</style>


