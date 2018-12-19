<template>
  <div class="dy-upload-container clearfix">

    <!--原始渲染的图片在这里传入-->
    <div class="dy-upload-img--wrap" v-for="(item, index) in imgList" :key="item + index">
      <img :src="item" alt="">
      <ul class="dy-upload-img--bottom clearfix">
        <li @click="handlePreview(index, 'imgList')" class="upload-img-btn">预览</li>
        <li @click="handleChange(index, 'imgList')"  class="upload-img-btn">
          修改
        </li>
        <li @click="handleRemove(index, 'imgList')" class="upload-img-btn">删除</li>
      </ul>
    </div>
    <!--上传的图片在这里-->
    <div class="dy-upload-img--wrap" v-for="(item, index) in currentValue" :key="index">
      <img :src="item" alt="">
      <ul class="dy-upload-img--bottom clearfix">
        <li @click="handlePreview(index, 'currentValue')" class="upload-img-btn">预览</li>
        <li @click="handleChange(index, 'currentValue')" class="upload-img-btn">修改</li>
        <li @click="handleRemove(index, 'currentValue')" class="upload-img-btn">删除</li>
      </ul>
    </div>

    <!--上传图片用-->
    <el-upload
      style="float:left;width: 31.33%;box-sizing:border-box;margin-bottom:20px;margin-left: 10px;"
      class="el-upload--change"
      v-show="isCanUpload"
      action="https://upload-z1.qiniup.com"
      :show-file-list="false"
      :data="data"
      :limit="currentMax"
      :multiple="true"
      :on-exceed="handleLimit"
      :on-success="handleSuccess">
      <div class="dy-upload-wrap">
        <i  class="el-icon-plus el-icon-circle-plus"></i>
        <div class="upload-text">添加图片</div>
      </div>
    </el-upload>

    <!--修改图片用 -->
    <el-upload
     class="dy-upload-wrap"
      v-show="false"
      action="https://upload-z1.qiniup.com"
      :show-file-list="false"
      :data="data"
      :on-success="handleChangeSuccess">
      <button ref="btn">修改图片</button>
    </el-upload>
    <div v-show="!isCanUpload" @click="handleLimit">
      <i  class="el-icon-plus el-icon-circle-plus"></i>
      <div class="upload-text">添加图片</div>
    </div>
    <!--预览图片用-->
    <el-dialog
      title="图片预览"
      :visible.sync="dialogVisible"
      >
      <img :src="previewImg" alt="" style="display: block;width: 100%;max-width: 800px;margin: 0 auto;">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      },
      imgList: {
        type: Array,
        default () {
          return []
        }
      },
      max: {
        type: Number,
        default: 5
      }
    },
    name: "dy-upload",
    data () {
      return {
        data: {
          token: ''
        },
        isCanUpload: true,
        currentValue: this.value,
        currentMax: this.max, 
        dialogVisible: false, // 是否显示弹框
        previewImg: '', // 预览的图片的链接
        changeIndex: '', // 需要修改图片的index
        changeCol: '', // 需要修改的是原来渲染的图片还是上传的图片
        removeIndex: '', // 需要删除图片的index
        removeCol: '', // 需要删除的是原来渲染的图片还是上传的图片
      }
    },
    created() {
      this.getToken()
      this.currentMax = this.max - this.imgList.length;
    },
    methods: {
      getToken() { // 获得上传token
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.data.token = res.data.data
        })
      },
      handleSuccess(img) { // 上传成功后
          this.currentValue.push(img.url)
          this.$emit('input', this.currentValue)
      },
      handleLimit() { // 提示超出限制
        this.$message({
          message: '最多添加5张图片，请删除多余的图片或直接修改',
          type: 'warning'
        });
      },
      handlePreview(index, col) { // 预览
        this.previewImg = this[col][index]
        this.dialogVisible = true;
      },
      handleChange(index, col) { // 修改
        this.changeIndex = index;
        this.changeCol = col;
        console.log(this.$refs.btn);
        this.$refs['btn'].click()
      },
      handleChangeSuccess(img) { // 修改的图片上传成功后
        this[this.changeCol].splice(this.changeIndex, 1, img.url)
      },
      handleRemove(index, col) { // 删除按钮操作成功后
        this[col].splice(index, 1)
        this.currentMax++; // 将可允许上传图片增大
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },
      imgList(val) {
        this.currentMax = this.max - val.length;
      }
    }
  }
</script>

<style scoped lang="scss">
  $wrap-width:33.33%;
  $wrap-height: 200px;

  .clearfix::after {
    content: '';
    display: table;
    clear: both;
    visibility: hiddewn;
  }

  li {
    list-style: none;
  }

  /deep/ .el-upload {
    display: block;
    width: 100%;
  }
  .dy-upload-wrap {
    float: left;
    width: 100%;
    height: $wrap-height;
    border-radius: 4px;
    border: 1px dashed #4567fc;
    text-align: center;
    padding-top: 50px;
    box-sizing: border-box;
    // margin-left: 20px;

    /deep/ .el-icon-circle-plus {
      color: #4567fc;
      font-size: 60px;
    }



    .upload-text {
      color: #4567fc;
    }
  }

  .dy-upload-img--wrap {
    box-sizing: border-box;
    padding: 0 10px;
    position: relative;
    // margin-left: 20px;
    margin-bottom: 20px;
    float: left;
    width: $wrap-width;
    height: $wrap-height;

    &:first-child {
      margin-left: 0;
      margin-bottom: 20px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .dy-upload-img--bottom {
      padding: 6px 0;
      position: absolute;
      margin: 0 10px;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: .6;
      background: #000;
      font-size: 14px;
      font-weight: 700;

      .upload-img-btn {
        float: left;
        width: 33.3333%;
        text-align: center;
        border-right: 1px solid #fff;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        user-select: none;

        &:nth-child(3) { // 选中第三个自己
          border-right: none;
        }
      }
    }
  }


</style>
