<template>
  <div v-resize="resize"></div>
</template>
<script>
/*
    监听某个div宽度的变化
    可以监听视窗的宽度变化
    
*/
export default {
  data() {
    return {};
  },
  mounted(){
    window.addEventListener('resize',()=>{
      console.log('视窗发生变化了')
    })
  },
  directives: {
    resize: {
      bind(el, binding) {
        // el为绑定的元素，binding为绑定给指令的对象
        let width = "",
          height = "";
        function isReize() {
          const style = document.defaultView.getComputedStyle(el);
          if (width !== style.width || height !== style.height) {
            binding.value(); // 关键
          }
          width = style.width;
          height = style.height;
        }
        el.__vueSetInterval__ = setInterval(isReize, 300);
      },
      unbind(el) {
        clearInterval(el.__vueSetInterval__);
      },
    },
  },
};
</script>
