/**
 * @authors huxiao (you@example.org)
 * @date    2017-06-01 09:57:48
 * @version $Id$
 */
/* eslint-disable */
export default {
  //表格
  table1Data: [
    {
      name: '王小明',
      age: 18,
      address: '北京市朝阳区芍药居',
      province: '北京市',
      city: '朝阳区',
      zip: 100000
    },
    {
      name: '张小刚',
      age: 25,
      address: '北京市海淀区西二旗',
      province: '北京市',
      city: '海淀区',
      zip: 100000
    },
    {
      name: '李小红',
      age: 30,
      address: '上海市浦东新区世纪大道',
      province: '上海市',
      city: '浦东新区',
      zip: 100000
    },
    {
      name: '周小伟',
      age: 26,
      address: '深圳市南山区深南大道',
      province: '广东',
      city: '南山区',
      zip: 100000
    }
  ],
  table2Data: [
    {
      name: '王小明',
      age: 18,
      address: '北京市朝阳区芍药居',
      province: '北京市',
      city: '朝阳区',
      zip: 100000
    },
    {
      name: '张小刚',
      age: 25,
      address: '北京市海淀区西二旗',
      province: '北京市',
      city: '海淀区',
      zip: 100000
    },
    {
      name: '李小红',
      age: 30,
      address: '上海市浦东新区世纪大道',
      province: '上海市',
      city: '浦东新区',
      zip: 100000
    },
    {
      name: '周小伟',
      age: 26,
      address: '深圳市南山区深南大道',
      province: '广东',
      city: '南山区',
      zip: 100000
    }
  ],
  //菜单
  navData: {
    name: [], // 面包屑
    list: [{
      icon: 'ios-book',
      id: '1',
      path:'/readme',
      name:'自述',
      list: []
    }, {
      icon: 'ios-grid-view',
      id: '2',
      path:'/tab',
      name:'表格',
      list: []
    }, {
      id: '3',
      path:'',
      name:'表单',
      list: [
        {path: '/form', name: '基本表单', icon: 'ios-keypad', id: '1-1'},
        {path: '/editor', name: '富文本编辑器', icon: 'compose', id: '1-2'},
      ]
    }, {
      icon: 'stats-bars',
      id: '4',
      path:'/charts',
      name:'图表',
      list: []
    }, {
      icon: 'ios-cloud-upload',
      id: '6',
      path:'/upload',
      name:'文件上传',
      list: []
    }, {
      icon: 'arrow-expand',
      id: '7',
      path:'/drag',
      name:'拖拽',
      list: []
    }]
  },
  //图表
  chartsLine:{
    title: {
      text: '动态数据',
      subtext: '纯属虚构'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
            backgroundColor: '#283b56'
        }
      }
    },
    legend: {
      data:['最新成交价', '预购队列']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: (function (){
          var now = new Date();
          var res = [];
          var len = 10;
          while (len--) {
              res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
              now = new Date(now - 2000);
          }
          return res;
        })()
      },
      {
        type: 'category',
        boundaryGap: true,
        data: (function (){
            var res = [];
            var len = 10;
            while (len--) {
                res.push(len + 1);
            }
            return res;
        })()
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: '价格',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: '预购量',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
        {
            name:'预购队列',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(Math.round(Math.random() * 1000));
                }
                return res;
            })()
        },
        {
            name:'最新成交价',
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        }
      ]
  },
  chartsClo: {
      color: ['#3398DB'],
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'直接访问',
              type:'bar',
              barWidth: '60%',
              data:[10, 52, 200, 334, 390, 330, 220]
          }
      ]
  },
  chartsPie: {
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          x: 'left',
          data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
      },
      series: [
          {
              name:'访问来源',
              type:'pie',
              selectedMode: 'single',
              radius: [0, '30%'],

              label: {
                  normal: {
                      position: 'inner'
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:335, name:'直达', selected:true},
                  {value:679, name:'营销广告'},
                  {value:1548, name:'搜索引擎'}
              ]
          },
          {
              name:'访问来源',
              type:'pie',
              radius: ['40%', '55%'],

              data:[
                  {value:335, name:'直达'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1048, name:'百度'},
                  {value:251, name:'谷歌'},
                  {value:147, name:'必应'},
                  {value:102, name:'其他'}
              ]
          }
      ]
  },
  //拖拽
  dragDt: [
    {
      name: 'vue.drag1',
      order: 1,
      fixed: true
    },{
      name: 'vue.drag2',
      order: 2,
      fixed: true
    },{
      name: 'vue.drag3',
      order: 3,
      fixed: true
    },{
      name: 'vue.drag4',
      order: 4,
      fixed: true
    },{
      name: 'vue.drag5',
      order: 5,
      fixed: true
    },{
      name: 'vue.drag6',
      order: 6,
      fixed: true
    },{
      name: 'vue.drag7',
      order: 7,
      fixed: true
    },
  ]
}
