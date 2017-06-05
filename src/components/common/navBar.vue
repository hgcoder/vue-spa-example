<template>
  <Menu mode="horizontal" theme="dark" active-name="1" class="top-nav clearfix">
      <Row>
        <i-col class="layout-logo fl" span="5">XX管理系统</i-col>
        <i-col  class="layout-nav fr" span="8">
          <Row :gutter="10">
            <i-col span="7"> 
              <Menu-item name="1">
                  <Icon type="ios-people"></Icon>
                  用户管理
              </Menu-item>
            </i-col>
            <i-col span="8"> 
              <Submenu name="3">
                  <template slot="title">
                      <Icon type="stats-bars"></Icon>
                      统计分析
                  </template>
                  <Menu-group title="使用">
                    <Menu-item name="3-1">1</Menu-item>
                    <Menu-item name="3-2">2</Menu-item>
                    <Menu-item name="3-3">3</Menu-item>
                  </Menu-group>
                  <Menu-group title="留存">
                    <Menu-item name="3-4">4</Menu-item>
                    <Menu-item name="3-5">5</Menu-item>
                  </Menu-group>
              </Submenu>
            </i-col>
            <i-col span="7"> 
              <Menu-item name="4">
                <div class="user-infor-box">
                  <div class="user-pic fl"><img src="../../../static/img/user-pic.jpg" alt=""></div>
                  <div class="user-name fl">hgcoder</div>
                </div>
              </Menu-item>
            </i-col>
          </Row>
        </i-col>
      </Row>
    </Menu>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.layout-logo{
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        text-align: center;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 10px;
        left: 3px;
    }
    .user-pic{
      width: 30px;
      height: 30px;
      margin-top: 10px;
      margin-right: 10px;
      border-radius:50%;
      overflow:hidden;
      img{
        width: 100%;

      }
    }
    ul.top-nav{
      height: 46px;
      line-height: 46px;
    }
</style>
