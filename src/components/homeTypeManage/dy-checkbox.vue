<template>
  <div class="dy-checkbox-wrap">
    <CheckboxGroup v-model="currentValue">
      <Checkbox :label="item.label" :key="index" v-for="(item, index) in options" :disabled="disabled" v-if="!disabled||currentValue.indexOf(item.label)>=0">
        <i class="iconfont circle" :class="{[item.icon]: true, 'spe-icon': item.spe}"></i>
        <div class="checkbox-text">
          {{item.text}}
        </div>
      </Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
  import {Checkbox, CheckboxGroup} from 'iview' // iview 按需引用, 已配置babel-import-plugin 无需vue.use

  export default {
    name: "dy-checkbox",
    props: {
      value: {
        type: Array,
        default() {
          return []
        }
      },
      options: {
        type: Array,
        default () {
          return []
        }
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    components: {
      CheckboxGroup,
      Checkbox
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },
      currentValue(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    }
  }
</script>

<style scoped lang="scss">
  .dy-checkbox-wrap {
    /deep/ .ivu-checkbox {
      display: none;
    }
    .circle {
      display: block;
      width: 60px;
      height: 60px;
      /*line-height: 60px;*/
      color: #b2b2b2;
      border-radius: 50%;
      text-align: center;
      border: 1px solid #e3e3e3;
      padding-top: 16px;
      box-sizing: border-box;
      font-size: 24px;
      background: #f1f1f1;
      overflow: hidden;
    }
    .checkbox-text {

      margin-top: 12px;
      text-align: center;
      color: #b2b2b2;
      font-weight: 700;
      font-size: 14px;
    }

    /deep/ .ivu-checkbox-wrapper-checked {
      .circle {
        color: #fff;
        background: #518dfd;
        border-color: #518dfd;
      }

      .checkbox-text {
        color: #518dfd;
      }
    }

    /deep/ .ivu-checkbox-wrapper {
      cursor: auto;
    }

    /*兼容iconfont图标不一致*/
    .spe-icon {
      font-size: 40px;
      padding: 6px;
    }
  }
</style>
