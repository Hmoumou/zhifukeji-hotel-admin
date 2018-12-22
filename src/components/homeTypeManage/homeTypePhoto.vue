<template>
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
</template>

<script>
import upload from '@/components/imgupload/dy-upload.vue'
export default {
  name: "houseTypePhoto",
  components:{
    upload,
  },
  data(){
   return{
     arr:['http://img2.imgtn.bdimg.com/it/u=500808421,1575925585&fm=200&gp=0.jpg'],
     uploadimg:[]
   }
  },
  methods:{
    // getPhoto(){
    //   this.$axios.get('').then(res=>{
    //     console.log(res)
    //   })
    // }
  },
  created(){
    // this.getPhoto()
  },

};
</script>

<style scoped lang='scss'>
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
</style>
