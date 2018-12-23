<template>
  <div class="houseTypeCreate">
    <el-card class="box-card  carditem">
      <div
        slot="header"
        class="header clearfix"
      >
        <span class="title">新建房型</span>
      </div>
      <!-- 右表格 -->
      <el-form  class="rightForm" :model='formRightData' label-width="100px" label-position='left'>
        <el-form-item label="无烟信息" prop="smokeInfo">
            <el-input class="detailInfo"  placeholder='该房型有无烟房，可无烟处理'></el-input>
        </el-form-item>
        <el-form-item label="最多入住" prop="maxPeople">
            <el-input class="detailInfo"  placeholder='请输入人数'></el-input>
             人
        </el-form-item>
        <!--<el-form-item label="早餐" prop="breakfast">-->
            <!--<el-select class="detailInfo" v-model="formRightData.breakfast" placeholder="请选择有/无">-->
                <!--<el-option label="有" value="0"></el-option>-->
                <!--<el-option label="无" value="1"></el-option>-->
            <!--</el-select> -->
        <!--</el-form-item>-->
        <!--<el-form-item label="宽带" prop="internet">-->
            <!--<el-select class="detailInfo" v-model="formRightData.internet" placeholder="请选择宽带信息">-->
                <!--<el-option label="无" value="0"></el-option>-->
                <!--<el-option label="10M" value="1"></el-option>-->
                <!--<el-option label="50M" value="2"></el-option>-->
                <!--<el-option label="100M" value="3"></el-option>-->
                <!--<el-option label="200M" value="4"></el-option>-->
            <!--</el-select> -->
        <!--</el-form-item>-->
        <el-form-item label="描述" prop="describe">
            <el-input class="describeInfo" type="textarea" :rows="5" v-model="formRightData.describe" placeholder='大床1.8米'></el-input>
        </el-form-item>
      </el-form>
      <!-- 左表格 -->
      <el-form  class="leftForm" :model='formLeftData' label-width="100px" label-position='left'>

        <el-form-item label="房间面积" prop="houseArea">
            <el-input class="detailInfo"  placeholder='请输入房间面积'></el-input>
        </el-form-item>
        <el-form-item  label="房间房型" prop="houseType" >
            <el-select class="detailInfo" v-model="formLeftData.houseType" placeholder="请选择房型">
                <el-option label="豪华大床房" value="0"></el-option>
                <el-option label="双标签" value="1"></el-option>
                <el-option label="豪华海景大床房" value="2"></el-option>
                <el-option label="豪华家庭房" value="3"></el-option>
                <el-option label="天字一号房" value="4"></el-option>
            </el-select>
        </el-form-item>
        <!--新添房间数量-->
        <el-form-item label="房间数量" prop="houseNum">
          <el-input class="detailInfo"  placeholder='请输入房间数量'></el-input>
        </el-form-item>
        <!--<el-form-item  label="楼层" prop="floor" >-->
            <!--<el-select class="detailInfo" v-model="formLeftData.floor" placeholder="请选择楼层">-->
                <!--<el-option label="1-5层" value="0"></el-option>-->
                <!--<el-option label="6-10层" value="1"></el-option>-->
                <!--<el-option label="11-15层" value="2"></el-option>-->
                <!--<el-option label="16-20层" value="3"></el-option>-->
                <!--<el-option label="21-25层" value="4"></el-option>-->
            <!--</el-select> -->
        <!--</el-form-item>-->
        <el-form-item label="床宽" prop="bedWidth">
            <!--<el-select class="detailInfo" v-model="formRightData.bedWidth" placeholder="请选择床宽">-->
                <!--<el-option label="大床 1.8米" value="0"></el-option>-->
                <!--<el-option label="大床 2.0米" value="1"></el-option>-->
                <!--<el-option label="大床 2.5米" value="2"></el-option>-->
            <!--</el-select> -->
          <el-input class="detailInfo" placeholder='请输入床宽'> </el-input>
        </el-form-item>
        <!--新加床数-->
        <el-form-item label="床数" prop="bedWidth">
          <el-input class="detailInfo" placeholder='请输入床的数量'> </el-input>
        </el-form-item>

        <!--<el-form-item label="卫浴" prop="bathroom">-->
            <!--<el-input class="detailInfo"  placeholder='独立卫浴'></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="窗户" prop="window">-->
            <!--<el-input class="detailInfo"  placeholder='无窗户'></el-input>-->
        <!--</el-form-item>-->
        <!-- 添加 单价 -->
        <el-form-item label="价格" prop="price">
          <el-input class="detailInfo"  placeholder='请输入价格'></el-input>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "houseTypeCreate",
  components: {},
  data() {
    return {
      formRightData: {
        smokeInfo: "",
        maxPeople: "",
        breakfast: "",
        internet: "",
        describe: ""
      },
      formLeftData: {
        price:"",
        houseArea: "",
        houseType: "",
        floor: "",
        bedWidth: "",
        bathroom: "",
        window: "",
        houseNum:'',

      }
    };
  },
  methods: {},
  created(){

  }
};
</script>

<style scoped lang='scss'>
  .houseTypeCreate{
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
    .rightForm {
      float: right;
      width: 45%;
      .detailInfo {
        width: 60%;
      }
      .describeInfo{
        /*padding: 20px;*/
        width:60%;
      }
    }
    .leftForm {
      float: left;
      margin-left: 1%;
      margin-bottom: 30px;
      width: 48%;
      border-right:1px dashed rgb(204, 197, 197);
      .detailInfo {
        width: 60%;
      }
    }

    /deep/ .el-form-item__label{
      font-weight: 600;
    }
    /deep/ input.el-input__inner{
      padding-left: 20px;
      background-color: #eff5ff;
    }
    /deep/ textarea.el-textarea__inner{
      background-color: #eff5ff;
    }
    .el-form-item{
      margin-bottom: 10px;

    }
    .el-input-inner {
      padding-left: 10px;

    }
  }

</style>
<style>
.el-form-item{
    margin-bottom: 10px;

}
.el-input-inner {
    padding-left: 10px;

}

</style>
