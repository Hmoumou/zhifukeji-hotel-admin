<template>
    <div class="register">
          <div class="box">
            <img src="../../image/login/组 17.png" class="title">
            <div class="login-box">            
                <div class="box-top clearfix">
                    <div class="left fll clearfix">
                        <h2>注册账号</h2>
                        <p class="fs14 fssmall small">SYSTEM BACKSTAGE LOGIN</p>                           
                    </div>
                    <div class="right   clearfix">
                        <span class="fsl6 fw dsbl flr">成为代理商</span>
                        <br>
                        <span class="fs14 dsbl flr ">服务员热线  010-84762811</span>
                    </div>                    
                </div>
                <div class="box-btm clearfix" :model="formData">
                    <div class="middle">
                        <div class="middle-left fll">
                            <div class="userId item clearfix">
                                <img class="rentou imgitem" src="../../image/login/人 拷贝 2.png" alt="#">
                                <el-input type="text"  class="input" name="userId" placeholder="请输入名称" :value='formData.usename'></el-input>
                            </div>
                            <div class="password item clearfix">
                                <img class="suo imgitem" src="../../image/login/密码 拷贝 2.png" alt="#">
                                <el-input type="password" class="input" name="password" placeholder="请输入密码"  :value='formData.password'></el-input>
                            </div>
                            <div class="againpsw item clearfix">
                                <img class="suo imgitem" src="../../image/login/密码 拷贝 2.png" alt="#">
                                <el-input type="password" class="input" name="againpsw" placeholder="请再次输入密码"  :value='formData.againpsw'></el-input>
                            </div>
                            <div class="againpsw item clearfix">
                                <img class="suo imgitem" src="../../image/login/行业.png" alt="#">
                                <el-select v-model="formData.value" placeholder="选择所在行业">
                                    <el-option
                                    class="input"
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class=" item clearfix">
                                <img class="suo imgitem" src="../../image/login/编号.png" alt="#">
                                <el-input type="text" class="input" name="serial" placeholder="请输入申请编码(选填)"  :value='formData.code'></el-input>
                            </div>
                            <div class=" item clearfix">
                                <img class="suo imgitem" src="../../image/login/手机(1).png" alt="#">
                                <el-input type="text" class="input" name="Phone" placeholder="请输入手机号码"  :value='formData.phone'></el-input>
                            </div>
                            <div class="code item clearfix">
                                <span class="flr blue fs14 getRegister"  @click="handleGetCode">获取验证码</span>
                                <el-input type="authCode" class=" input lastinput " name="authCode" placeholder="请输入验证码"></el-input>
                            </div>
                            <div class="sub ">
                                <div class="btn " @click="handleRegister" >立即注册</div>             
                                <span class="yes fw cb5 fs14">已有账号，<span @click="handleLogin" class="blue fw fs14">去登录</span></span>
                            </div> 
                        </div>
                          
                    </div>
                   
                </div>
               
            </div>    
        </div>
    </div>
</template>

<script>
    export default {
        name:'register',
        data(){
            return{
                formData:{
                    value:"",
                    username:'',
                    password:'',
                    againpsw:'',
                    code:'',
                    phone:''
                },
                 options: [{
                    value: '选项1',
                    label: '管理员1'
                    }, {
                    value: '选项2',
                    label: '管理员2'
                    }, {
                    value: '选项3',
                    label: '管理员3'
                    }, {
                    value: '选项4',
                    label: '管理员5'
                    }],
            }
        },
        methods:{
            handleGetCode(){
                // this.$axios.get()
            },
            handleLogin(){
                this.$router.push('/')
            },
            handleRegister(){
                // this.$axios.post('register')
            }
        }
    }
</script>

<style scoped lang='scss'>
.register{
    position: relative;
    overflow-y: scroll;
    min-height: 100vh;
    z-index: 1;
    background: url('../../image/login/注册-背景图.png')no-repeat;
    background-size: 100% 100%;
}
  
  .box { 
    width: 35%;
    height: 740px;  
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    left: 50%;
    .title{ margin-left: 50%; width:50%; height: 70px; margin-top: 70px;}
    .login-box{
        background: #fff;
        height: 600px;
        border-radius: 6px;
        .box-top{
            box-sizing: border-box;
            height: 100px;
            padding: 25px 15px;
            color:#fff;
            border-top-right-radius:6px;
            border-top-left-radius:6px;
            background: url('../../image/login/注册-头.png')no-repeat;
            background-size: 100% 100%;
        }
        .small{ margin-left: -46px;} 
        .right{line-height: 1.5; }
        .box-btm{
            padding:10px 70px;
            .item{
                border-bottom: 1px solid #f1f1f1;
                margin-bottom: 10px;
                .input{
                    float: left;
                    box-sizing: border-box;
                    font-size: 14px;
                    width:70%;
                    line-height: 1.5;
                    border: none;
                    outline: none;
                    -webkit-appearance: none;
                    background: #fff;
                }
            }
            .imgitem{  
                float: left;
                padding: 5px 10px 0; 
                display: inline-block; 
                width: 18px;
                height: 22px
                }
            .isRemember{  margin: 20px 0 50px 20px; }
            .forget{ margin-top: 5px; }
        }
        .sub{
                width: 100%;
                height: 55px;
                text-align: center;
                box-sizing: border-box;
                margin-top: 30px;
                .btn{
                    box-sizing: border-box;
                    cursor: pointer; 
                    margin: 0 auto;
                    color:#fff;
                    width: 200px;
                    height: 55px;
                    line-height: 38px;
                    background: url('../../image/login/按钮.png')no-repeat;
                    background-size: 100% 100%;
                }
            }
            .noID{  font-size: 16px;  color:#b5b5b5;}
            .register{ font-size: 16px; color:#6aabfd;}
            .forget:hover{ cursor: pointer; }
            .lastinput {  padding-left: 40px; width: 100px; }
            .getRegister{ margin-top: 10px; cursor: pointer }
    }
 
  }
  .login-in{  margin: 10px 0 ; }
 
  .yes{padding-left:5px;cursor: pointer;}
  
    .middle-left{
            width: 100%;
            box-sizing: border-box;
            padding: 10px 40px 10px 0;
        
            /deep/ .el-select {  width: 84%; }
            /deep/ .el-select .el-input__inner {
                padding-left: 14px;
                font-size: 14px;
                color: rgb(117,117,117);
                outline: none;
                border:none;
            }
            /deep/  .el-icon-arrow-up{ color:#6aabfd;  }
    }
    /deep/ .el-input__inner{ border:none;outline: none; display: inline-block;width:100% }
      
</style>