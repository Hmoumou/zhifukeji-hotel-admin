<template>
  <div class="homeTypeList">
    <!-- list -->
    <el-card class="box-card carditem">
      <div slot="header" class="header clearfix">
        <span class="title">房型管理</span>
        <el-button
          style="float: right; padding: 5px ; width: 150px"
          type="primary"
          round
          @click="showCreateView"
        >新建房型</el-button>
      </div>
      <div class="homeItemList">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <!-- start -->
              <div
                class="homeItem"
                v-for="(item,index) in homeData"
                id="item"
                :key="index"
                :class="{ItemActive : activeIndex == index}"
                @click="handleClick(index)"
              >
                <div class="edit flr">
                  <el-button type="text" class="editBtn" @click="handleChange(index)">修改</el-button>
                  <span class="blue fll fs14 line">|</span>
                  <el-button type="text" class="editBtn" @click="handleDelete(index)">删除</el-button>
                </div>

                <img
                  src="@/image/0001.jpg"
                  style="width: 100px; height:100px;
                    float: left; margin-right: 15px;"
                >
                <div class="homeInfo clearfix">
                  <strong class="fs14">{{item.homeType}}</strong>
                  <div class="infoTitleDiv">
                    <span class="infoTitle">面积</span>
                    <span class="infoTitle">床宽</span>
                    <span class="infoTitle">卫浴</span>
                    <span class="infoTitle">最多入住</span>
                  </div>
                  <div class="infoDataDiv">
                    <span class="infoData">{{item.area}}</span>
                    <span class="infoData">{{item.bedWidth}}</span>
                    <span class="infoData">{{item.bath}}</span>
                    <span class="infoData">{{item.limit}}人</span>
                  </div>
                </div>
              </div>
              <!-- end -->
              <!-- 删除dialog -->
              <el-dialog v-if="isdialog" title="警告" :visible.sync="isdialog" width="30%" center>
                <span>此操作将会彻底删除本种类型的房型，您确定删除吗？</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="isdialog = false">取 消</el-button>
                  <el-button type="primary" @click="ensureDelete(index)">确 定</el-button>
                </span>
              </el-dialog>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="pageBtn">
        <el-button type="primary" plain>上一页</el-button>
        <el-button type="primary" plain>下一页</el-button>
      </div>
    </el-card>
    <!-- details -->
    <div class="houseTypeDetail" :model="this.homeData">
      <el-card class="box-card carditem"  >
        <div slot="header" class="header clearfix">
          <!-- {{homeData[activeIndex].homeType}} -->
          <span class="title"></span>
        </div>

        <div class="photoBrowse clearfix">
          <!-- 左箭头 -->
          <img class="rightArrow" src="@/image/商户中心+箭头/rightArrow.png" @click="handleLast">
          <!-- 中间的房型图 -->
          <div class="houseTypePhoto clearfix">
            <div class="box">
              <img :src="photoArr.img" :model="photoArr" v-for="o in 5" :key="o" alt="#">
            </div>
          </div>
          <!-- 右箭头 -->
          <img class="leftArrow" src="@/image/商户中心+箭头/leftArrow.png" @click="handleNext">
        </div>
        <div class="asideLeft">
          <!-- <button class="btn">房型相册</button>
          <button class="btn">图文详情</button>-->
          <div :class="isGetPhoto?'active':'btn'" @click="handleGetPhoto">房型相册</div>
          <div :class="isGetDetail?'active':'btn'" @click="handleGetDetail">图文详情</div>
        </div>

        <div class="textDetail clearfix">
          <span class="titleText">文字详情</span>
          <div class="item">
            <div class="itemDetail">
              <span class="itemTitle">面积</span>
              <span class="detail">33平方米</span>
            </div>
            <div class="itemDetail">
              <span class="itemTitle">房型</span>
              <span class="detail">豪华街景房</span>
            </div>
            <div class="itemDetail">
              <span class="itemTitle">楼层</span>
              <span class="detail">6-10层</span>
            </div>
          </div>

          <div class="item">
            <div class="itemDetail">
              <span class="itemTitle">床宽</span>
              <span class="detail">大床1.8米</span>
            </div>
            <div class="itemDetail">
              <span class="itemTitle">卫浴</span>
              <span class="detail">独立卫浴</span>
            </div>
            <div class="itemDetail">
              <span class="itemTitle">窗户</span>
              <span class="detail">无窗户</span>
            </div>
          </div>

          <div class="item noborder">
            <div class="itemDetail">
              <span class="itemTitle">无烟信息</span>
              <span class="detail">该房型有无烟房，可无烟处理</span>
            </div>
            <div class="itemDetail">
              <span class="itemTitle">最多入住</span>
              <span class="detail">2人</span>
            </div>
            <div class="itemDetail">
              <span class="itemTitle">早餐/宽带</span>
              <span class="detail">无早餐，有无线WiFi</span>
            </div>
          </div>
        </div>
        <div class="describe">
          <span class="describeTitle fs14">描述</span>
          <span class="detailText fs14">房间禁止小朋友嬉戏打闹，请勿吸烟</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeTypeList",
  data() {
    return {
      // details
      isGetPhoto:true,
      isGetDetail:false,
      photoArr:{
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2213670986,2923778817&fm=27&gp=0.jpg'
      },
      // list
      activeIndex:'',
      isdialog: false,
      index: "",
      homeData: [
        {
          homeType: "豪华大床房1",
          area: "33平方米",
          bedWidth: "大床1.8m",
          bath: "独立卫浴",
          limit: "2",
          floor:'1-5层',//楼层
          bath:'淋浴',//卫浴，
          window:'有窗户',
          smoke:'该房型有无烟房，可无烟处理',//无烟信息，
          food:'有早餐',
          wifi:'有wifi',
          desc:'房间禁止小朋友嬉戏打闹，禁止吸烟'
        },
        {
          homeType: "豪华大床房2",
          area: "33平方米",
          bedWidth: "大床1.8m",
          bath: "独立卫浴",
          limit: "2",
          floor:'6-10层',//楼层
          bath:'淋浴',//卫浴，
          window:'有窗户',
          smoke:'该房型有无烟房，可无烟处理',//无烟信息，
          food:'有早餐',
          wifi:'有wifi',
          desc:'房间禁止小朋友嬉戏打闹，禁止吸烟'
        },
        {
          homeType: "双标间3",
          area: "33立方米",
          bedWidth: "大床1.8m",
          bath: "独立卫浴",
          limit: "2",
          floor:'11-15层',//楼层
          bath:'淋浴',//卫浴，
          window:'有窗户',
          smoke:'该房型有无烟房，可无烟处理',//无烟信息，
          food:'有早餐',
          wifi:'有wifi',
          desc:'房间禁止小朋友嬉戏打闹，禁止吸烟'
        },
        {
          homeType: "双标间4",
          area: "33立方米",
          bedWidth: "大床1.8m",
          bath: "独立卫浴",
          limit: "2",
          floor:'16-20层',//楼层
          bath:'淋浴',//卫浴，
          window:'有窗户',
          smoke:'该房型有无烟房，可无烟处理',//无烟信息，
          food:'有早餐',
          wifi:'有wifi',
          desc:'房间禁止小朋友嬉戏打闹，禁止吸烟'
        },
        {
          homeType: "豪华大床房5",
          area: "33平方米",
          bedWidth: "大床1.8m",
          bath: "独立卫浴",
          limit: "2",
          floor:'25-30层',//楼层
          bath:'淋浴',//卫浴，
          window:'有窗户',
          smoke:'该房型有无烟房，可无烟处理',//无烟信息，
          food:'有早餐',
          wifi:'有wifi',
          desc:'房间禁止小朋友嬉戏打闹，禁止吸烟'
        }
      ]
    };
  },
  methods: {
    // getData(){
    // this.$axios.get('').then(res=>{
    //   console.log(res);
    // })
    // },
    showCreateView() {
      this.$emit("showCreateView");
    },
    handleChange(index) {},//点击修改
    handleClick(index) { // 点击房型item
      this.activeIndex = index
      // console.log(this.activeIndex);
    }, 
    handleDelete(index) { // 点击删除
      this.isdialog = true;
      this.index = index;
    },
    ensureDelete() { // 确认删除
      console.log(this.index);
      this.isdialog = false;
    },
    // details---------------------------------------
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
  },
  created() {
    // this.getData()
  }
};
</script>

<style scoped lang='scss'>
.homeItemList {
}
.homeItem {
  width: 28%;
  border: 1px solid #f1f1f1;
  padding: 15px;
  margin: 5px;
  display: inline-block;
  span,
  strong {
    display: block;
  }
}
.ItemActive {
  background: #f2f7ff;
  border: 1px solid #409eff;
}
.edit {
  .editBtn {
    float: left;
    padding: 0;
  }
  .line {
    color: #dbd8d8;
  }
}

.homeInfo {
  .infoTitleDiv {
    margin-top: 10px;
    padding-right: 10px;
    float: left;
  }
  .infoTitle {
    margin-bottom: 7px;
    font-size: 12px;
    color: #5d5d5d;
  }
  .infoDataDiv {
    margin-top: 10px;
  }
  .infoData {
    margin-bottom: 7px;
    font-size: 12px;
    color: #a3a3a3;
  }
  .auditLeave-top {
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .name {
    font-weight: 700;
  }
  .time {
    display: inline-block;
    font-size: 12px;
    color: #409eff;
  }
  .summoney {
    font-size: 12px;
  }
}

.carditem {
  margin-bottom: 10px;
}
.title {
  padding-left: 6px;
  border-left: 3px solid #75b8fc;
}
.header {
  font-weight: 700;
}
.pageBtn {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}




// details------------------


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