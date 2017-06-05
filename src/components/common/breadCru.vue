<template>
  <div class="c-wrap">
   	<Breadcrumb class="bread-box">
	    <Breadcrumb-item href="/" v-for="item in breadCruData" key="item">{{item.name}}</Breadcrumb-item>
	   </Breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'breadCruData'
  ]),
  created () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.bread-box{
      background: #fff;
      padding: 2px 16px;
      font-size: 12px;
      border-top: 2px solid #39f;
      border-bottom: 1px solid #f0f0f0;
    }
</style>
