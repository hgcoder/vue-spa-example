<template>
  <div class="app">
    <div class="t-wrap">
     	<div class="m-tit">基于Vue.js 2.x系列 + <a href="https://www.iviewui.com/">iview</a>的后台管理系统模版</div>
      <div class="m-list">包含功能如下：</div>
      <div class="m-item">1、<a href="https://vuex.vuejs.org/zh-cn/">Vuex </a>状态管理应用实例，详见（表格，图表，及拖拽实例应用）</div>
      <div class="m-item">2、表格应用实例</div>
      <div class="m-item">3、基于<a href="https://github.com/surmon-china/vue-quill-editor">vue-quill-editor</a>富文本编辑器应用实例</div>
      <div class="m-item">4、基于<a href="http://echarts.baidu.com/">Echarts</a>，的图表应用实例</div>
      <div class="m-item">5、文件上传应用实例，以及基于<a href="https://github.com/Vanthink-UED/vue-core-image-upload">vue-core-image-upload</a>的图片剪切工具应用实例</div>
      <div class="m-item">6、基于<a href="https://github.com/SortableJS/Vue.Draggable">Vue.Draggable</a>的图片剪切工具应用实例</div>
    </div>
  </div>
</template>

<script>
import {tReq} from '../api'
export default {
  name: 'tab',
  data () {
    return {
      msg: 'tab'
    }
  },
  created () {
    tReq({}, dt => {
      console.log(dt)
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .m-tit{
    font-size: 18px;
  }
  .m-list{
    margin-top: 20px;
    font-size: 16px;
  }
  .m-item{
    margin-top: 10px;
  }
</style>
