<template>
  <div class="feel-date-picker" style="border: 1px solid red" ref="wrapper">
    <f-popover position="bottom" :container="x">
      <f-input type="text" />
      <template slot="content">
        <div class="feel-date-picker-pop">
          <div class="feel-date-picker-nav">
            <span><f-icon name="leftleft" /></span>
            <span><f-icon name="left" /></span>
            <span @click="onClickYear">2012年</span>
            <span @click="onClickMonth">8月</span>
            <span><f-icon name="right" /></span>
            <span><f-icon name="rightright" /></span>
          </div>
          <div class="feel-date-picker-panels">
            <div v-if="mode === 'years'" class="feel-date-picker-content">年</div>
            <div v-else-if="mode === 'months'" class="feel-date-picker-content">月</div>
            <div v-else class="feel-date-picker-content">
              <div :class="c('weekdays')">
                <span v-for="i in [1, 2, 3, 4, 5, 6, 0]">
                  {{ weekdays[i] }}
                </span>
              </div>
              <div :class="c('row')" v-for="i in helper.range(1, 7)">
                <span :class="c('col')" v-for="j in helper.range(1, 8)">
                  {{ visibleDays[(i - 1) * 7 + j - 1].getDate() }}
                </span>
              </div>
            </div>
          </div>
          <div class="feel-date-picker-actions">
            <button>清除</button>
          </div>
        </div>
      </template>
    </f-popover>
  </div>
</template>

<script>
  import FInput from '../input'
  import FIcon from '../icon'
  import FPopover from '../popover'
  import ClickOutside from '../click-outside'
  import helper from './helper'

  export default {
    components: { FInput, FIcon, FPopover },
    directives: { ClickOutside },
    name: 'FeelDatePicker',
    props: {
      firstDayOfWeek: 0 | 1
    },
    data() {
      return {
        mode: 'days',
        value: new Date(),
        helper: helper,
        x: null,
        weekdays: ['日', '一', '二', '三', '四', '五', '六']
      }
    },
    mounted() {
      this.x = this.$refs.wrapper
    },
    methods: {
      c(className) {
        return `feel-date-picker-${className}`
      },
      onClickMonth() {
        this.mode = 'months'
      },
      onClickYear() {
        this.mode = 'years'
      }
    },
    computed: {
      visibleDays() {
        let date = this.value
        let first = helper.firstDayOfMonth(date)
        let last = helper.lastDayOfMonth(date)
        let array = []
        let [year, month, day] = helper.getYearMonthDate(date)
        for (let i = first.getDate(); i <= last.getDate(); i++) {
          array.push(new Date(year, month, i))
        }
        let n = first.getDay() === 0 ? 6 : first.getDay() - 1
        let array2 = []
        for (let i = 0; i < n; i++) {
          array2.push(new Date(year, month, -i))
        }
        array2 = array2.reverse()
        let m = 42 - array.length - array2.length
        let array3 = []
        for (let i = 1; i <= m; i++) {
          array3.push(new Date(year, month + 1, i))
        }
        return [...array2, ...array, ...array3]
      }
    }
  }
</script>

<style scoped lang="scss">
  .feel-date-picker {
    &-nav {
      background: red;
    }
    &-popWrapper {
      padding: 0;
    }
    /deep/ .feel-popover-content-wrapper {
      padding: 0;
    }
  }
</style>
