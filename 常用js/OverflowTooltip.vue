<!--
 * @Author: xxl
 * @Date: 2021-10-21 20:15:00
 * @LastEditTime: 2021-10-21 20:15:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: @/Pages/Home/Components/common/OverflowTooltip.vue
 * @name:该组件是出现省略号时有tips提示
-->
<template>
  <el-tooltip effect="dark" :disabled="isShowTooltip" :content="content" placement="top">
    <div ref="box" class="over-flow width100" @mouseover="onMouseOver">
      {{ content || '-' }}
    </div>
  </el-tooltip>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      isShowTooltip: true
    }
  },
  methods: {
    onMouseOver() {
      let oW = this.$refs.box.offsetWidth
      let sW = this.$refs.box.scrollWidth
      let oH = this.$refs.box.offsetHeight
      let sH = this.$refs.box.scrollHeight
      if (sW > oW || sH > oH) {
        this.isShowTooltip = false
      } else {
        this.isShowTooltip = true
      }
    }
  }
}
</script>
<style lang="scss">
.over-flow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.width100 {
  width: 100%;
}
</style>
