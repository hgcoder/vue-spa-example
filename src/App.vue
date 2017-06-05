
<template>
    <div class="layout">
        <nav-bar></nav-bar>
        <bread-cru></bread-cru>
        <div class="layout-content">
          <side></side>
        </div>
        <div class="layout-copy">
          @copyRight
        </div>
    </div>
</template>

<script>
  // import {nav} from './store.js'
  import breadCru from './components/common/breadCru.vue'
  import navBar from './components/common/navBar.vue'
  import side from './components/common/nav.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      breadCru,
      navBar,
      side
    }
  }
</script>
<style lang="scss">
    /* layout */
    .layout{
        background: #f5f7f9;
        height: 100%;
    }
   
    .layout-nav{
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .side{
      height: 100%;
      position:relative;
    }
    .c-tit{
      width: 90%;
      margin:20px auto 20px;
      font-size: 18px;
    }
    .t-wrap{
      width: 80%;
      margin: 0 auto;
    }
    .c-tit1{
      font-size: 14px;
      margin-bottom: 10px;
    }
    
    .main-cot{
      min-height: 400px;
    }
    .main-cot:before{
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      background: #d7dde4;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -1px;
      z-index: 1;
    }
    
</style>
