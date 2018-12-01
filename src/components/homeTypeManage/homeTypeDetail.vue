<template>
  <div class="houseTypeDetail">
    <el-card class="box-card  carditem">
      <div
        slot="header"
        class="header clearfix"
      >
        <span class="title">豪华大床房</span>
      </div>

      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            text-color="#409eff"
            active-text-color="#fff"
            active-background-color="#409eff"
          >
            <el-menu-item index="1">
              <span slot="title">房型相册</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">图文详情</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>

    </el-card>
  </div>

</template>

<script>
export default {
  name: "houseTypeDetail"
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
</style>
