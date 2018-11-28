<template>
    <div class="container">
           <div class="box clearfix">
                <img src="../../image/login/组 17.png" class="title">
                <div class="login-box">            
                    <div class="box-top clearfix">
                        <div class="left fll clearfix">
                            <h2>后台登录</h2>
                            <p class="fs14 fssmall small">SYSTEM BACKSTAGE LOGIN</p>                           
                        </div>
                        <div class="right  clearfix">
                            <span class="fsl6 fw dsbl flr">成为代理商</span>
                            <br>
                            <span class="fs14 dsbl flr ">服务员热线  010-84762811</span>
                        </div>    
                    </div>
                    <div class="box-btm" :model="formData">
                        <div class="userId item">
                            <img class="rentou" src="../../image/login/人 拷贝 2.png" alt="#">
                            <input type="text" name="userId" placeholder="请输入登录账号">
                        </div>
                        <div class="password item">
                            <img class="suo" src="../../image/login/密码 拷贝.png" alt="#">
                            <input type="password" name="password" placeholder="请输入密码">
                        </div>
                        <div class="isRemember">
                              <el-checkbox label="记住密码" name="type"></el-checkbox>
                              <span><a href="/"></a>忘记密码</span>
                        </div>
                    </div>
                    <div class="sub">
                        <div class="login" @click="handleLogin">立即登录</div>
                        <p class="noID">没有账号？<a class="blue register" href="/register">立即注册</a></p>
                    </div>
                </div>    
            </div> 
    </div>
</template>

<script>
export default {
  name: "login",
  data(){
      const validateUsername = (rule, value, callback)=>{
          if(!value){
              callback(new Error('必须输入合法用户名'))
          }else(
              callback()
          )
      }
    const validatePassword = (rule, value, callback)=>{
        if(value && value.length >= 5){
            callback()
        }else{
            callback(new Error('请输入合法的密码'))
        }
    }
    return{
        isRemember:false,
        formData:{
            username:'admin',
            password:'admin'
        },
        rule:{
            username:[{validator: validateUsername, trigger: 'blur'}],
            password:[{validator: validatePassword, trigger: 'blur'}]
        },
        isLoading:false ,
       
    }
  },
  methods:{
      handleLogin(){
          this.isLoading = true
          this.$router.push('/layout/home')
        //   this.$axios.post('/login',this.formData).then(res=>{
        //       console.log(res);
        //       if(res.code == 200){
        //           this.$store.commit('CHANGE_USERINFO',res.data)
        //           this.$message.success('登录成功')
        //             setTimeout(()=> {
        //                 this.$router.push('/layout/index')
        //             }, 2000);
        //       }else{
        //           this.$message.error(res.msg)
        //       }
        //       this.isLoading = false
        // }).catch(err => {
        //       this.isLoading = false
        // })
      },
       valiLogin(){
        this.$refs["form"].validate((valid) => {
                if (valid) {
                    this.handleLogin()
                } else {
                    console.log(valid);
                }
            });
        }
  },
 
};
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  z-index: 1;
  background: url('../../image/login/登录-忘记密码-背景图-1.png')no-repeat;
  background-size: 100% 100%;
    
  .box { 
    height: 480px;  
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 60%;
   
     .title {
        margin-left: 46%;
        width: 50%;
        height: 80px;
  }
  .login-box{
    background: #fff;
    width: 380px;
    height: 400px;
    // border: 1px solid #f1f1f1;
    border-radius: 6px;
    .box-top{
        padding: 10px 15px;
        color:#fff;
        border-top-right-radius:6px;
        border-top-left-radius:6px;
        background: url('../../image/login/登录-忘记密码-背景图.png')no-repeat;
        background-size: 100% 100%;
    }
    .small{
        margin-left: -46px;
    }
    .right{
        line-height: 1.5;
        margin-top: 30px;
    }
    .box-btm{
        padding:20px 20px;
        .item{
            padding: 4px ;
            line-height: 2;
            border-bottom: 1px solid #f1f1f1;
            margin-bottom: 10px;
            input{
                width: 80%;
                line-height: 2;
                border: none;
                outline: none;
                -webkit-appearance: none;
                background: #fff;
            }
        }
        .rentou{    
          padding: 5px 10px 0;
            display: inline-block; 
            width: 22px;
            height: 22px;       
        }
        .suo{
          padding: 5px 10px 0;

            display: inline-block; 
            width: 22px;
            height: 22px;
        }
        .isRemember{
            margin-left: 20px;
            margin-bottom: 40px;
        }
       
       
    }
     .sub{
            width: 100%;
            height: 100px;
            text-align: center;
            .login{
                margin: 0 auto;
                color:#fff;
                width: 200px;
                height: 50px;
                line-height: 35px;
                background: url('../../image/login/按钮.png')no-repeat;
                text-align: center;
                background-size: 100% 100%;
            }
        }
        .noID{
            font-size: 16px;
            color:#b5b5b5;
        }
        .register{
            font-size: 16px;
            color:#6aabfd;
        }
  }
 
  }
  .login-in{
      margin: 10px 0 ;
  }
}
</style>