<template>
  <div class="box">
    <div class="house-title fw">
        七日化房间管理
        <span class="house-title-date fs12 fw500">
          08-01 至 08-02
        </span>
    </div>
    <table class="main-table" @click="handleClick">

      <tbody>
        <tr class="first-row">
          <td class="cell-spe" ref="speCell">
            <div class="date-text fw">日期</div>
            <div class="housetype-text fw">房型</div>
            <i class="line" ref="line"></i>
          </td>
          <td v-for="(item,indexs) in 7" class="cell-item" :key="indexs">
            <div class="cell-top fs14 fw">
              16
            </div>
            <div class="cell-bottom fs12" >
              星期二
              <!-- <span v-for="(item,indx) in weekDay" :key="indx">{{item}}</span> -->
            </div>
          </td>
        </tr>
        <tr class="row" v-for="(item,idx) in hoseType" :key='idx'>
          <td class="row-title">
            {{item}}
          </td>
          <td class="item-num" v-for="(item,index) in 7" :data-row="index" :key='index'>
            {{idx+index}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import dyDialog from '../dy-dialog'

  export default {
    name: '',
    components: {
      dyDialog
    },
    data() {
      return {
        showDialog: false,
        isAdvance: true,
        haveValue: true,
        userData: {
          time: '2018-10-20',
          houseType: '豪华大床房'
        },
        weekDay:["一","二","三","四","五","六","日"],
        testData: {
          time: 1544350369753,
          bigBed: [
            {
              num: 2,
              isPre: true,
              type: 1
            },
            {
              num: 3,
              isPre: true,
              type: 1
            },
            {
              num: 6,
              isPre: true,
              type: 1
            }, {
              num: 9,
              isPre: true,
              type: 1
            },
            {
              num: 1,
              isPre: true,
              type: 1
            },
            {
              num: 0,
              isPre: true,
              type: 1
            },
            {
              num: 10,
              isPre: true,
              type: 1
            }
          ],
          double: [
            {
              num: 1,
              isPre: true,
              type: 2
            },
            {
              num: 2,
              isPre: true,
              type: 2
            },
            {
              num: 3,
              isPre: true,
              type: 2
            }, {
              num: 4,
              isPre: true,
              type: 2
            },
            {
              num: 6,
              isPre: true,
              type: 2
            },
            {
              num: 0,
              isPre: true,
              type: 2
            },
            {
              num: 12,
              isPre: true,
              type: 2
            }
          ]
        },
        hoseType: ['豪华大床房', '双标间', '海景大床房', '豪华家庭房', '天字一号房']
      }
    },
    methods: {
      handleClick(e) {
        let target = e.target.classList.contains('item-num')&&e.target;
        if(target) {
          console.log(target)
          console.log(target.dataset.row)
        }
      },
      handleClose() {
        this.centerDialogVisible = false
      },
      setLine () { //斜线设置
          let box = this.$refs.speCell
          let line = this.$refs.line

          let boxHeight = box.offsetHeight;
          let boxWidth = box.offsetWidth;
          let hypotenuse = Math.sqrt(boxHeight*boxHeight + boxWidth*boxWidth) // 斜边
          let rotate = Math.asin(boxHeight / hypotenuse)
          let rotateDeg = rotate * (180/Math.PI)

          line.style.width = hypotenuse + '100px'
          line.style.transform = `translate(-50%, -50%) rotateZ(${rotateDeg}deg)`;
      }
    },
    mounted() {
      this.$nextTick(() => {
        let vm = this;
        this.setLine()
        window.onresize = function () {
          vm.setLine()
        }
      })
    },
    beforeDestroy () {
      window.onresize = null
    }
  }
</script>

<style scoped lang='scss'>
  @import './index.scss';
</style>
