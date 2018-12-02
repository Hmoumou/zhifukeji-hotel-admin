<template>
  <div class="houseTypeNewCreate">
    <home-type-create />
    <home-type-photo />
    <home-type-photo-detail />

    <div
      class="btn"
      @click="createComplete"
    >完成</div>
    <el-button
      class="backBtn"
      type="text"
      @click="showManageView"
    >
     <img src="@/image/home/leftArrow.png" style="width: 40px; height: 40px"></img>
     <span class="backText">返回上一步</span>
      </el-button>
  </div>
</template>

<script>
import homeTypeCreate from "@/components/homeTypeManage/homeTypeCreate.vue";
import homeTypePhoto from "@/components/homeTypeManage/homeTypePhoto.vue";
import homeTypePhotoDetail from "@/components/homeTypeManage/homeTypePhotoDetail.vue";

export default {
  name: "houseTypeNewCreate",
  components: {
    homeTypeCreate,
    homeTypePhoto,
    homeTypePhotoDetail
  },
  data() {
    return {};
  },
  methods: {
    createComplete() {},
    showManageView() {
      this.$emit("showManageView");
    }
  },
  created() {}
};
</script>

<style scoped lang='scss'>
.btn {
  float: right;
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 20px 15px 20px 0;
  color: #fff;
  width: 200px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  font-weight: 650px;
  background: url("../../image/home/btn1.png") no-repeat;
  text-align: center;
}
.backBtn{
  margin-top: 20px;
}
</style>