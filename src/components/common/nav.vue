<template>
  <Row>
	  <i-col :span="spanLeft" class="side" :class="{'smallNav':isSmall}">
	    <Menu width="auto" :open-names="['1']" v-if="!isSmall">
	        <template v-for="item in navData">
	          <template v-if="item.list.length">
	            <Submenu :name="item.id">
	              <template slot="title">
	                  <span>{{item.name}}</span>
	              </template>
	              <Menu-item :name="link.id" v-for="link in item.list" key="link">
	               <router-link :to="link.path" tag="span"><Icon :type="link.icon"></Icon> {{link.name}}</router-link>
	              </Menu-item>
	            </Submenu>
	          </template>
	          <template v-else>
	            <Menu-item :name="item.id">
	              <router-link :to="item.path" tag="span" class="linkList"><Icon :type="item.icon"></Icon> {{item.name}}</router-link>
	            </Menu-item>
	          </template>
	        </template>
	    </Menu>
	    <Menu v-else width="auto">
	      <Menu-item v-for="item in smaNav" key="item" :name="item.id">
	              <router-link :to="item.path" tag="span" class="linkList"><Icon :type="item.icon"></Icon></router-link>
	            </Menu-item>
	    </Menu>
	    <div class="switchNav" @click="switchNav"><Icon type="navicon"></Icon></div>
	  </i-col>
	  <i-col :span="spanRight">
	      <div class="layout-content-main main-cot">
	        <router-view></router-view>
	      </div>
	  </i-col>
	</Row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'nav',
  data () {
    return {
      spanLeft: 5,
      spanRight: 19,
      isSmall: false,
      smaNav: [],
      activeNav: '1'
    }
  },
  methods: {
    switchNav () {
      this.spanLeft = this.spanLeft === 5 ? 1 : 5
      this.spanRight = this.spanRight === 19 ? 23 : 19
      if (this.spanLeft === 1) {
        this.isSmall = true
      } else {
        this.isSmall = false
      }
    }
  },
  computed: mapGetters([
    'navData'
  ]),
  created () {
    let arr = []
    // 菜单收起时数据
    this.$store.state.navData.list.map((index, ele) => {
      if (!index.path) {
        arr = arr.concat(index.list)
      } else {
        arr = arr.concat([index])
      }
    })
    this.smaNav = arr
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.ivu-menu-item span{
    display: block;
  }
  .smallNav .linkList{
    position:relative;
    left: -4px;
  }
  .switchNav{
    font-size: 28px;
    position:absolute;
    right: 0;
    top: 10px;
    right: 20px;
    top: 1px;
    z-index: 99;
    cursor: pointer;
    transition: 0.5s all;
  }
  .smallNav .switchNav{
    right: -38px;
  }
</style>
