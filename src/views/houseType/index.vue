<template>
  <div class="houseType">
    <home-type-list/>
  </div>
</template>

<script>
import homeTypeList from "@/components/homeTypeManage/homeTypeList.vue";

export default {
  name: "houseType",
  components: {
    homeTypeList
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>


<style scoped>

</style>