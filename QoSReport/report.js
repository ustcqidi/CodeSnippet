// $(document).ready(function(){
//       /**崩溃部分*/
//       //android崩溃
//       echarts.init(document.getElementById('androidtotal')).setOption(getStackColumn('Android崩溃(%)','7.6版本','7.71版本','native',1.72,1.02,'java',0.67,0.11));
//       echarts.init(document.getElementById('androidtop')).setOption(getLineBar('系统启动与崩溃','4.2及以下',1368,5.51,'4.3',1098,5.55,'4.4.x',6995,2.08,'5.x',10863,0.67,'6.0及以上',1492,0.63));
//       echarts.init(document.getElementById('androidjava')).setOption(getCircle('Java崩溃','system', 76.81, 'VideoPlayer', 4.78, 'QYVideoClient', 4.57, 'Other', 13.85));
//       echarts.init(document.getElementById('androidnative')).setOption(getCircle('Native崩溃', 'ANR', 32.19, 'libiqiyi_media_player.so', 12.21, 'libwebviewchromium', 9.86, 'other', 45.74));
//       //ios崩溃
//       echarts.init(document.getElementById('iostotal')).setOption(getStackColumn('iPhone崩溃(%)','7.6版本','7.7版本','oc',0.41,0.52));
//       echarts.init(document.getElementById('iosoc')).setOption(getCircle('模块崩溃','hcdn', 49.78, 'puma', 8.34, 'CoreFoundation', 6.53, 'other', 35.35));
//       // echarts.init(document.getElementById('iostopdevice')).setOption(getColumn('崩溃机型占比(%)','ip6s',33.33,'ip6sp',24.16,'ip6',11.35,'ip6p',8.51,'ip5s',8.42));
//       // echarts.init(document.getElementById('iostopos')).setOption(getColumn('崩溃系统占比(%)','9.3.4',33.44,'9.3.2',15.50,'9.3.3',11.54,'9.2.1',6.72,'9.3.1',4.89));
//       echarts.init(document.getElementById('iostopdevice')).setOption(getLineBar2('系统启动与崩溃','ip6s Plus',80,1.08,'ip6s',117,1.02,'ip4',0.6,0.95,'ipSE',6.5,0.92,'ip4(8G)',2.4,0.89));
//       echarts.init(document.getElementById('iostopos')).setOption(getLineBar4('系统启动与崩溃','9.0',38913,1.12,'7.0.5',1081,1.11,'9.0.2',89151,0.89,'7.0.3',2778,0.86,'7.0.4',15236,0.83));
//
//       echarts.init(document.getElementById('ipadtotal')).setOption(getStackColumn('iPad崩溃(%)','7.6版本','7.7版本','oc',1.43,1.08));
//       echarts.init(document.getElementById('ipadoc')).setOption(getCircle('模块崩溃','hcdn', 63.37, 'puma', 9.78, 'CoreFoundation', 7.43, 'other', 19.42));
//       // echarts.init(document.getElementById('iostopdevice')).setOption(getColumn('崩溃机型占比(%)','ip6s',33.33,'ip6sp',24.16,'ip6',11.35,'ip6p',8.51,'ip5s',8.42));
//       // echarts.init(document.getElementById('iostopos')).setOption(getColumn('崩溃系统占比(%)','9.3.4',33.44,'9.3.2',15.50,'9.3.3',11.54,'9.2.1',6.72,'9.3.1',4.89));
//       echarts.init(document.getElementById('ipadtopdevice')).setOption(getLineBar3('系统启动与崩溃','Pro(C)',12,8.33,'mini4',761,3.42,'air2',2558,1.52,'Pro(W)',108,0.93,'ipad2',350,0.86));
//       echarts.init(document.getElementById('ipadtopos')).setOption(getLineBar5('系统启动与崩溃','9.3',14874,2.17,'9.0',5412,1.53,'9.0.2',14636,1.42,'8.1',35334,1.31,'9.3.4',627271,1.28));
//
//       /**性能部分*/
//       //android性能
//       // echarts.init(document.getElementById('androidstartup')).setOption(getLines('Android启动','7.6版本','7.7版本','App启动',500,450,'welcomeActivity',500,600,'后台线程',600,700));
//       echarts.init(document.getElementById('androidstartup')).setOption(getLine('Android下半屏','7.5.1版本','7.6版本','7.71版本','gridView',719,251,295));
//       // echarts.init(document.getElementById('androidhalfscreen')).setOption(getLines('Android下半屏','7.6版本','7.7版本','播放器',500,450,'剧集列表',500,600,'广告',600,700));
//       //ios性能
//       echarts.init(document.getElementById('iosstartup')).setOption(getLine('iOS启动时间','7.5版本','7.6版本','7.7版本','整体加载速度',1066,1200,758));
//       // echarts.init(document.getElementById('ioshalfscreen')).setOption(getLines('iOS下半屏','7.6版本','7.7版本','播放器',500,450,'剧集列表',500,600,'广告',600,700));
//
//       /**包大小*/
//       //android包大小
//       echarts.init(document.getElementById('apackagetotal')).setOption(getRow('Android包大小(Mb)','7.6版本','7.71版本','dex', 7.47,7.64, 'resource', 7.37,7.02,'libs', 5.29,4.82,'other', 1.87,2.32));
//       //ios包大小
//       echarts.init(document.getElementById('ipackagetotal')).setOption(getRow('iOS包大小(Mb)','7.6版本','7.7版本', 'oc',47.67,56.95));
// });

function getPie(){
    var option = {
      title : {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series : [
          {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  };
  return option;
}

function getLineBar5(title,t1,p11,p12,t2,p21,p22,t3,p31,p32,t4,p41,p42,t5,p51,p52){
  var option = {
    tooltip: {
        trigger: 'axis'
    },
    color: ['#3398DB', '#112233'],
    legend: {
        data:['启动数','崩溃率']
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [t1,t2,t3,t4,t5]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '启动数',
            min: 0,
            max: 1000000,
            interval: 200000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '崩溃比率',
            min: 0,
            max: 2.5,
            interval: 0.5,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'启动数',
            type:'bar',
            data:[p11,p21,p31,p41,p51]
        },
        {
            name:'崩溃率',
            type:'line',
            yAxisIndex: 1,
            data:[p12,p22,p32,p42,p52]
        }
    ]
};
return option;
}

function getLineBar4(title,t1,p11,p12,t2,p21,p22,t3,p31,p32,t4,p41,p42,t5,p51,p52){
  var option = {
    tooltip: {
        trigger: 'axis'
    },
    color: ['#3398DB', '#112233'],
    legend: {
        data:['启动数','崩溃率']
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [t1,t2,t3,t4,t5]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '启动数',
            min: 0,
            max: 300000,
            interval: 50000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '崩溃比率',
            min: 0,
            max: 2.5,
            interval: 0.5,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'启动数',
            type:'bar',
            data:[p11,p21,p31,p41,p51]
        },
        {
            name:'崩溃率',
            type:'line',
            yAxisIndex: 1,
            data:[p12,p22,p32,p42,p52]
        }
    ]
};
return option;
}

function getLineBar3(title,t1,p11,p12,t2,p21,p22,t3,p31,p32,t4,p41,p42,t5,p51,p52){
  var option = {
    tooltip: {
        trigger: 'axis'
    },
    color: ['#3398DB', '#112233'],
    legend: {
        data:['启动数','崩溃率']
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [t1,t2,t3,t4,t5]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '启动数',
            min: 0,
            max: 3000,
            interval: 500,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '崩溃比率',
            min: 0,
            max: 10,
            interval: 2,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'启动数',
            type:'bar',
            data:[p11,p21,p31,p41,p51]
        },
        {
            name:'崩溃率',
            type:'line',
            yAxisIndex: 1,
            data:[p12,p22,p32,p42,p52]
        }
    ]
};
return option;
}

function getLineBar2(title,t1,p11,p12,t2,p21,p22,t3,p31,p32,t4,p41,p42,t5,p51,p52){
  var option = {
    tooltip: {
        trigger: 'axis'
    },
    color: ['#3398DB', '#112233'],
    legend: {
        data:['启动数','崩溃率']
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [t1,t2,t3,t4,t5]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '启动数',
            min: 0,
            max: 3800000,
            interval: 500000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '崩溃比率',
            min: 0,
            max: 2.5,
            interval: 0.5,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'启动数',
            type:'bar',
            data:[p11,p21,p31,p41,p51]
        },
        {
            name:'崩溃率',
            type:'line',
            yAxisIndex: 1,
            data:[p12,p22,p32,p42,p52]
        }
    ]
};
return option;
}

function getLineBar(title,t1,p11,p12,t2,p21,p22,t3,p31,p32,t4,p41,p42,t5,p51,p52){
  var option = {
    tooltip: {
        trigger: 'axis'
    },
    color: ['#3398DB', '#112233'],
    legend: {
        data:['启动数','崩溃率']
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [t1,t2,t3,t4,t5]
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '启动数',
            min: 0,
            max: 10000,
            interval: 2000,
            axisLabel: {
                formatter: '{value}万'
            }
        },
        {
            type: 'value',
            name: '崩溃比率',
            min: 0,
            max: 8,
            interval: 2,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'启动数',
            type:'bar',
            data:[p11,p21,p31,p41,p51]
        },
        {
            name:'崩溃率',
            type:'line',
            yAxisIndex: 1,
            data:[p12,p22,p32,p42,p52]
        }
    ]
};
return option;
}

function getCircle(title, t1, p1, t2, p2, t3, p3, t4, p4){
  var option = {
      title : {
        text: title,
        x:'center'
      },
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        y: 'bottom',
        data:[t1,t2,t3,t4]
      },
      series: [
          {
              name:title,
              type:'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '24',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:p1, name:t1},
                  {value:p2, name:t2},
                  {value:p3, name:t3},
                  {value:p4, name:t4},
              ]
          }
      ]
  };

  return option;
}

function getStackColumn(title,l1, l2, t1, p11, p12, t2, p21, p22){
    var option = {
      title : {
        text: title,
        x:'center'
      },
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      legend: {
        y: 'bottom',
        data:[t1,t2]
      },
      grid: {
          left: '3%',
          right: '10%',
          bottom: '10%',
          containLabel: true
      },
      yAxis:  {
          type: 'value'
      },
      xAxis: {
          type: 'category',
          data: [l1,l2]
      },
      series: [
          {
              name: t1,
              type: 'bar',
              stack: '总量',
              label: {
                  normal: {
                      show: true,
                      position: 'insideRight'
                  }
              },
              barWidth: '50%',
              data: [p11, p12]
          },
          {
              name: t2,
              type: 'bar',
              stack: '总量',
              barWidth: '50%',
              label: {
                  normal: {
                      show: true,
                      position: 'insideRight'
                  }
              },
              data: [p21, p22]
          },
      ]
  };
  return option;
}

function get3StackColumn(title,l1, l2,l3, t1, p11, p12,p13, t2, p21, p22,p23){
    var option = {
      title : {
        text: title,
        x:'center'
      },
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      legend: {
        y: 'bottom',
        data:[t1,t2]
      },
      grid: {
          left: '3%',
          right: '5%',
          bottom: '10%',
          containLabel: true
      },
      yAxis:  {
          type: 'value'
      },
      xAxis: {
          type: 'category',
          data: [l1,l2,l3]
      },
      series: [
          {
              name: t1,
              type: 'bar',
              stack: '总量',
              label: {
                  normal: {
                      show: true,
                      position: 'insideRight'
                  }
              },
              barWidth: '50%',
              data: [p11, p12,p13]
          },
          {
              name: t2,
              type: 'bar',
              stack: '总量',
              barWidth: '50%',
              label: {
                  normal: {
                      show: true,
                      position: 'insideRight'
                  }
              },
              data: [p21, p22,p23]
          },
      ]
  };
  return option;
}

function getLines(title,l1,l2,t1,p11,p12,t2,p21,p22,t3,p31,p32){
  var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:[t1,t2,t3]
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : [l1,l2]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:t1,
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[p11, p12]
        },
        {
            name:t2,
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[p21, p22]
        },
        {
            name:t3,
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[p31, p32]
        },
    ]
  };

  return option;
}

function getLine(title,l1,l2,l3,t1,p11,p12,p13){
  var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[t1]
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [l1,l2,l3]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:t1,
            type:'line',
            stack: '总量',
            data:[p11, p12, p13]
        },
        // {
        //     name:t2,
        //     type:'line',
        //     stack: '总量',
        //     data:[p21, p22, p23]
        // },
    ]
};
return option;
}

function getColumn(title, t1, p1, t2, p2, t3, p3, t4, p4, t5, p5){
  var option = {
    color: ['#3398DB'],
    title : {
        text: title,
        x:'center'
    },
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
            data : [t1,t2,t3,t4,t5],
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
            name:title,
            type:'bar',
            barWidth: '60%',
            data:[p1,p2,p3,p4,p5]
        }
    ]
};
  return option;
}

function getRow(title,l1,l2,t1,p11,p12,t2,p21,p22,t3,p31,p32,t4,p41,p42){
  var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: [t1, t2, t3, t4]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: [l1,l2]
    },
    series: [
        {
            name: t1,
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [p11, p12]
        },
        {
            name: t2,
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [p21, p22]
        },
        {
            name: t3,
            type: 'bar',
            stack: '总量',
            barWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [p31, p32]
        },
                {
            name: t4,
            type: 'bar',
            stack: '总量',
            barWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [p41, p42]
        },
    ]
  };

  return option;
}
