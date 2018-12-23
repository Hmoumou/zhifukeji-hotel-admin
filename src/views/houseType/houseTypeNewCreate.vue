<template>
  <div class="houseTypeNewCreate">
    <!--<home-type-create />-->
    <!--<home-type-photo />-->
    <!--新建房型列表start-->
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
    <!--新建房型列表end-->

    <!--相册管理-->
    <div class="houseTypePhoto">
      <el-card class="box-card  carditem">
        <div
          slot="header"
          class="header clearfix"
        >
          <span class="rightTitle">*最多上传5张</span>
          <span class="title">房型相册</span>
        </div>
        <span class="secondTitle">*图片尺寸：1920*900</span>
        <div class="imageDiv ">
          <upload :img-list='arr' v-model='uploadimg'></upload>
        </div>
      </el-card>
    </div>
    <!--相册end-->

    <!--设施详情开始-->
    <el-card class="facility-details">
      <div slot="header">
        <span class="title">设施详情</span>
      </div>
      <p class="facility-desc">请选择该房型包含的设施</p>
      <div class="facility-container">
        <dyCheckbox v-model="facilities" :options="checkBoxOptions" :disabled="true" ></dyCheckbox>
      </div>
    </el-card>
    <!--设施详情结束-->

    <!--<home-type-photo-detail />-->

    <div
      class="btn"
      @click="createComplete"
    >完成</div>
    <el-button
      class="backBtn clearfix"
      type="text"
      @click="showManageView"
    >
     <img src="@/image/home/leftArrow.png" class="fll" style="width: 40px; height: 40px" />
     <span class="backText fll mt10">返回上一步</span>
    </el-button>
  </div>
</template>

<script>
import dyCheckbox from '@/components/homeTypeManage/dy-checkbox'
import homeTypeCreate from "@/components/homeTypeManage/homeTypeCreate.vue";
import homeTypePhoto from "@/components/homeTypeManage/homeTypePhoto.vue";
import homeTypePhotoDetail from "@/components/homeTypeManage/homeTypePhotoDetail.vue";
import upload from '@/components/imgupload/dy-upload.vue'

export default {
  name: "houseTypeNewCreate",
  components: {
    homeTypeCreate,
    homeTypePhoto,
    homeTypePhotoDetail,
    dyCheckbox,
    upload

  },
  data() {
    return {
      //newcreatestart
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

      },
      //end
      //photo start
      arr:['http://img2.imgtn.bdimg.com/it/u=500808421,1575925585&fm=200&gp=0.jpg'],
      uploadimg:[],
      //photo end
      facilities: ["2"], // 设施详情
      checkBoxOptions: [
        {
          label: '1',
          text: '热水',
          icon: 'icon-xiaoshireshui'
        },
        {
          label: '2',
          text: '电吹风',
          icon: 'icon-chuifengji'
        },
        {
          label: '3',
          text: '淋浴',
          icon: 'icon-linyu'
        },
        {
          label: '4',
          text: '淋浴',
          icon: 'icon-wifi'
        },
        {
          label: '5',
          text: '卫生间',
          icon: 'icon-matong'
        },
        {
          label: '6',
          text: '洗漱用品',
          icon: 'icon-xishuyongpin'
        },
        {
          label: '7',
          text: '窗户',
          icon: 'icon-chuanghu'
        },
        {
          label: '8',
          text: '早餐',
          icon: 'icon-a-breakfast',
          spe: true
        },
      ]
    };
  },
  methods: {
    createComplete() {
      // this.$axios.post('')
    },
    showManageView() {
      this.$emit("showManageView");
    }
  },
  created() {
    console.log(this.$route);
    if(this.$route.meta.title == "房型修改"){

    }
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
  /*createend*/
  /*photostart*/
  .houseTypePhoto {
    padding: 10px;
    .header {
      font-weight: 700;
    }
    .title {
      padding-left: 6px;
      border-left: 3px solid #75b8fc;
    }
    .rightTitle {
      float: right;
      font-size: 14px;
      color: #409eff;
    }
    .secondTitle {
      font-size: 14px;
      color: #409eff;
      font-weight: 500;
    }
    .imageDiv {
      box-sizing: border-box;
      width: 100%;
      margin-top: 20px;
    }
  }
  /*end*/
.btn {
  float: right;
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 20px 15px 20px 0;
  color: #fff;
  width: 200px;
  height: 54px;
  line-height: 40px;
  border-radius: 20px;
  font-weight: 600;
  background: url("../../image/home/btn1.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
}
.backBtn{
  margin-left: 20px;
  margin-top: 20px;

}
.mt10{ margin-top: 10px; }
.facility-details {
  .title {
    font-weight: 700;
    border-left: 3px solid #75b8fc;
    padding-left: 6px;
  }

  .facility-desc {
    color: #5e94fd;
    font-weight: 500;
  }

  .facility-container {
    margin-top: 36px;
    padding-bottom: 30px;
  }
}
</style>
