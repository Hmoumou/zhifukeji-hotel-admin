<template>
    <div class="container">
            <h1 class="title" >欢迎来到后台管理页面</h1>
            <div class="login-box">
                <h2 class="title-h2">请登录</h2>
                <el-form class="login-in" ref="form" :rules="rule" :model='formData'>
                    <el-form-item label="用户名" prop='username'>
                        <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop='password'>
                        <el-input v-model="formData.password" type="password" placeholder="请输入密码" @keyup.enter.native="valiLogin"></el-input>
                    </el-form-item>
                </el-form>
                <el-button :loading="isLoading"  @click="valiLogin" type="primary" class="btn">
                    登录
                </el-button>
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
  overflow: hidden;
  min-height: 100vh;
  background: #545c64;
  .title {
    text-align: center;
    color: #fff;
    margin-top: 100px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .login-box {
    background: #e8e8e8;
    width: 380px;
    height: 290px;
    border: 1px solid #f1f1f1;
    border-radius: 6px;
    padding: 40px;
    margin: 0 auto ;
    .title-h2{
        font-weight: 400;
        color:#555;
        text-align: center;
    }
    .btn{
      width: 100%;
      box-sizing:border-box;
    }
  }
  .login-in{
      margin: 10px 0 ;
  }
}
</style>