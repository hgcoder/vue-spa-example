<template>
  <div class="app" id="app">
   	<div class="c-tit">普通表格</div>
    <div class="t-wrap">
      <Table border :columns="columns2" :data="table1Data"></Table>
    </div>
    <div class="c-tit">带分页表格</div>
    <div class="t-wrap">
      <Table border :columns="columns2" :data="table2Data"></Table>
      <Page :total="100" show-elevator show-total class="fr mt20" @on-change="pageNext"></Page>
    </div>
  </div>
</template>

<script>
// import {table1, table2} from '../store.js'
import {table2Reducer} from '../api'
import { mapGetters } from 'vuex'
export default {
  name: 'dome2',
  data () {
    return {
      msg: 'dome2',
      columns2: [{
        title: '姓名',
        key: 'name',
        width: 100,
        fixed: 'left'
      }, {
        title: '年龄',
        key: 'age',
        width: 100
      }, {
        title: '省份',
        key: 'province',
        width: 100
      }, {
        title: '市区',
        key: 'city',
        width: 100
      }, {
        title: '地址',
        key: 'address',
        width: 600
      }, {
        title: '邮编',
        key: 'zip',
        width: 100
      }, {
        title: '操作',
        key: 'action',
        fixed: 'right',
        width: 120,
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'text',
                size: 'small'
              }
            }, '查看'),
            h('Button', {
              props: {
                type: 'text',
                size: 'small'
              }
            }, '编辑')
          ])
        }
      }],
      table1: [],
      table2: [],
      pageNum: 1
    }
  },
  watch: {
    pageNum: function (newVal, oldVal) {
      table2Reducer(newVal, dt => {
        dt.table2Data.map(function (index, elem) {
          index.name = index.name + newVal
        })
        dt.table2Data.reverse()
        this.table2Data = dt.table2Data // 更新数据
        this.$store.dispatch({
          type: 'setListData',
          d: dt.table2Data
        })
      })
    }
  },
  methods: {
    pageNext (currentPage) {
      this.pageNum = currentPage
    }
  },
  computed: mapGetters([
    'table1Data',
    'table2Data'
  ]),
  created () {
    // this.pageNum = 2
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .t-wrap{
    width: 90%;
    margin: 0 auto;
  }
  .line {
    height: 1px;
    background: #39f;
    margin: 20px auto
  }
</style>
