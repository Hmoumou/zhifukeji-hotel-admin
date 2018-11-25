<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {

  name: 'App',
  components:{
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
  .el-header{
    width: 100%;
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .fll{
    float: left;
  }
  .flr{
    float: right;
  }
  a{
    color:#333;
    text-decoration: none;
  }
  .el-aside {
    height: 100vh;
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  li{
    list-style: none;
  }
</style>
