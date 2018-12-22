<template>
  <div class="houseTypeNewCreate">
    <home-type-create />
    <home-type-photo />

    <!--设施详情开始-->
    <el-card class="facility-details">
      <span>设施详情</span>
      <p>请选择该房型包含的设施</p>
      <div class="facility-container">
        <dyCheckbox v-model="facilities" :options="checkBoxOptions" :disabled="true"></dyCheckbox>
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

export default {
  name: "houseTypeNewCreate",
  components: {
    homeTypeCreate,
    homeTypePhoto,
    homeTypePhotoDetail,
    dyCheckbox
  },
  data() {
    return {
      facilities: [], // 设施详情
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
          icon: 'icon-a-breakfast'
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
</style>
