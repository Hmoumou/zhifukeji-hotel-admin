<template>
  <div>
    <el-card class="box-card carditem clearfix mesList">
      <div slot="header" class="header">
        <span class="title" style="font-size: 16px;padding-left: 12px;">酒店外观</span>
        <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" @click="photoToAddF">添加照片</el-button>
      </div>
      <div v-for="(o,index) in photoDetailF" :key="index" class="photoBox">
        <div class="topPic">
          <img :src="o.detail" alt="">
        </div>
        <div class="downText">{{o.title}}</div>
      </div>
    </el-card>
    <el-card class="box-card carditem clearfix mesList">
      <div slot="header" class="header">
        <span class="title" style="font-size: 16px;padding-left: 12px;">酒店内景</span>
        <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" @click="photoToAddS">添加照片</el-button>
      </div>
      <div v-for="(o,index) in photoDetailS" :key="index" class="photoBox">
        <div class="topPic">
          <img :src="o.detail" alt="">
        </div>
        <div class="downText">{{o.title}}</div>
      </div>
    </el-card>
    <el-card class="box-card carditem clearfix mesList">
    <div slot="header" class="header">
      <span class="title" style="font-size: 16px;padding-left: 12px;">其他</span>
      <el-button style="float: right; padding: 3px 0;margin-top: 0px;" type="text" @click="photoToAddT">添加照片</el-button>
    </div>
    <div v-for="(o,index) in photoDetailT" :key="index" class="photoBox">
      <div class="topPic">
        <img :src="o.detail" alt="">
      </div>
      <div class="downText">{{o.title}}</div>
    </div>
  </el-card>

    <div class="addBox" v-if="showAdd">
      <div class="addbg">
        <div class="topbg"></div>
        <div class="downbg">
          <!-- <div class="addBtn">
              <div class="iconRadio"></div>
          </div> -->
           <upload></upload>
          <div class="addText">
            <span>标题</span>
            <el-input v-model="addObj.title" style="width:70%"   placeholder="请输入内容"></el-input>
          </div>
          <div class="adddown">
            <div class="fh" @click="hideAdd">
              <!---->
              <div class="iconText">返回</div>
              <div class="iconBtn"></div>
            </div>
            <div class="okbtn">
              <el-button @click="addPic" round>确&nbsp;定</el-button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import upload from '@/components/imgupload/hotel-photo.vue'
  export default {
    name: "photos",
    components:{
      upload
    },
    data() {
      return {
        showAdd:false,
        addObj:{
          title:"",
          img:""
      },
        photoDetailF: [
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
        ],
        photoDetailS: [
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
        ],
        photoDetailT: [
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
          {title: "酒店大堂", detail: "/static/img/0001.2890d64.jpg"},
        ],

      }
    },
    methods:{
      // 三个添加按钮  （三个函数并到一个，要是用一个值来判断，不直观）
      photoToAddF(){
          this.showAdd = true
      },
      photoToAddS(){
        this.showAdd = true
      },
      photoToAddT(){
        this.showAdd = true
      },
      //隐藏弹出添加框  此处要清空上传的相关值
      hideAdd(){
        this.showAdd=false
      },
      //添加照片  需要传值一个 key 证明是哪个分类 内往还是其他  key从三个photoToAdd函数中赋予
      addPic(key){
        this.hideAdd()
      }
    }
  }
</script>

<style scoped lang='scss'>
  .active{ border: 1px solid #9dccfa;}
  .title { padding-left: 6px;border-left: 3px solid #75b8fc;}
  .header {font-weight: 500; font-size: 16px}
  /**/
  .mesList{
    padding: 10px 20px;
    margin-bottom: 10px;
    position: relative;
    .photoBox{
      display: inline-block;
      margin: 10px 0 20px 20px;
      .topPic{
        width: 280px;
        height: 185px;
        img {
          display: block;
          width: 280px;
          height: 185px;
        }
      }
      .downText{
        text-align: center;
        margin-top: 10px;
      }
    }
  }

  .addBox{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99999;
    background-color: rgba(0,0,0,.6);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .addbg{
      height: 70%;
      width: 31.25%;
      .topbg{
        height: 9%;
        width: 95%;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 12px;
        transform: rotateZ(-2deg) translateY(50%);
      }
      .downbg{
        width: 100%;
        border-radius: 12px;
        background-color: #fff;
        box-shadow: -0px -5px 10px #f1f1f1;
        position: relative;
        z-index: 9999999;
        padding: 10%;
        box-sizing: border-box;

        /*下面是虚线盒子，做上传时替换成相应图片上传需要的组件or插件*/
        .addBtn{
          width: 100%;
          height: 25vh;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border: 1px dashed  #518dfd;
          .iconRadio{
            width: 60px;
            height: 60px;
            background: url("../../image/商户中心+箭头/add.png")no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            user-select: none;
          }
        }
        .addText{
          height: 20%;
          margin-top: 20px;
          font-weight: 700;
          font-size: 19px;
          color: #000;
          span{
            display: inline-block;
            margin-right: 20px;
          }
        }
        .adddown{
          /*margin-top: 50px;*/
          margin: 20px 0 0;
          height: 50px;
          line-height: 50px;
          .fh{
            float: left;
            width: 130px;
            user-select: none;
            cursor: pointer;
            .iconBtn{
              float: left;
              background: url("../../image/商户中心+箭头/返回.png") no-repeat;
              background-size: 100% 100%;
              height: 60px;
              width: 60px;
            }
            .iconText{
              float: right;
              line-height: 50px;
              height: 50px;
              width: 50px;
            }
          }
          .okbtn{
            float: right;
            width: 150px;
            button{
              width: 100%;
              background: url("../../image/商户中心+箭头/bgbtn.png" ) no-repeat -30px -10px;
              color: #fff;
              font-size: 16px;
            }

          }
        }
      }
    }
  }

  .el-input{
    width: 400px;

  }


</style>
<style>
  .el-main { text-align: left; line-height: 1;}

  .el-button{ border-radius: 20px;  padding: 6px 20px; font-size: 14px;}
  .el-button--text {font-size: 14px; margin-top: 9px;}
  .el-main{

  }
  .el-card__header,.el-card{
  }
  .el-input__inner {
    padding: 18px;
    background: #f9fbff;
    border: none;
  }
</style>
