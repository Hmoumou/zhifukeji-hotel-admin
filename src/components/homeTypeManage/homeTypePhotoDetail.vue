<template>
  <div class="houseTypePhotoDetail">
    <el-card class="box-card  carditem">
      <div
        slot="header"
        class="header clearfix"
      >
        <span class="rightTitle">*最多上传5张</span>
        <span class="title">图文详情</span>
      </div>
      <span class="secondTitle">*图片尺寸：1920*900</span>
      <div class="imageDiv clearfix">
        <upload :imgList='arr' v-model="uploadimg"></upload>
      </div>
      

    </el-card>
  </div>

</template>

<script>
import upload from '@/components/imgupload/dy-upload.vue'
export default {
  name: "houseTypePhotoDetail",
  data(){
    return{
      arr:['http://img2.imgtn.bdimg.com/it/u=500808421,1575925585&fm=200&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=500808421,1575925585&fm=200&gp=0.jpg'],
      uploadimg:[]
    }
  },
  components:{
    upload,
  },
  created() {}
};
</script>

<style scoped lang='scss'>
.houseTypePhotoDetail {
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
    height: 230px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
