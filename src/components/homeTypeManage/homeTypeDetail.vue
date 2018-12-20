<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: "houseTypeDetail",
  data(){
    return{
      isGetPhoto:true,
      isGetDetail:false,
      photoArr:{
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2213670986,2923778817&fm=27&gp=0.jpg'
      }
    }
  },
  methods:{
    handleLast(){
      
    },
    handleGetPhoto(){
      this.isGetPhoto = true
      this.isGetDetail  = false
    },
    handleGetDetail(){
      this.isGetPhoto = false
      this.isGetDetail  = true
    },
    handleNext(){

    }
  }
};  
</script>

<style scoped lang='scss'>
.houseTypeDetail {
  padding: 10px;
}
.header {
  font-weight: 700;
}
.title {
  padding-left: 6px;
  border-left: 3px solid #75b8fc;
}
.asideLeft {
  width: 15%;
  .active{
    border: 1px solid #f1f1f1;
    // background: #f1f1f1;
    background: url('../../image/房型/矩形.png')no-repeat;
    background-size: 100% 100%;
    line-height: 60px;
    color: #fff;
    width: 100%;
    height: 60px;
    text-align: center;
  }
  .btn{
    border: 1px solid #e1ecff;
    background: #f9fbfe;
    line-height: 60px;
    color: #518dfd;
    width: 100%;
    height: 60px;
    text-align: center;
  }
  .btn:active{
    background: url('../../image/房型/矩形.png')no-repeat;
    background-size: 100% 100%;
  }
}
.photoBrowse {
  position: relative;
  float: right;
  width: 85%;
  background-color: #f1f5fd;
  height: 300px;
  margin-bottom: 40px;

  .leftArrow {
    position: absolute;
    top: 150px;
    left: 20px;
  }
  ///房型轮播图
  .houseTypePhoto{
    margin: 26px auto;
    width: 80%;
    height: 100%;
    overflow-x: hidden;
     .box{
        width: 1850px;
        img{
        margin-right:20px;
        float: left;
        width: 350px 
    }
     }
  }
  
  .rightArrow {
    position: absolute;
    top: 150px;
    right: 20px;
  }
}
.textDetail {
  float: left;
  width: 100%;
  display: flex;
  .titleText {
    margin-left: 6%;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
  .item {
    font-size: 14px;
    margin-left: 5%;
    margin-bottom: 30px;
    width: 24%;
    border-right: 1px dashed #f1f1f1;
    .itemDetail {
      margin-bottom: 10px;
      .itemTitle {
        margin-right: 15px;
        font-weight: 600;
      }
      .detail {
        font-weight: 400;
      }
    }
  }
  .noborder {
    border-right: 0px;
  }
}
.describe {
  background-color: #f1f5fd;
  width: 82%;
  float: right;
  padding: 15px 20px 15px 20px;
  margin-bottom: 30px;
  .describeTitle {
    display: block;
    margin-bottom: 15px;
    font-weight: 600;
  }
}



</style>
<style>
.el-main{
  text-align: left;
  line-height: 1;
}
</style>

