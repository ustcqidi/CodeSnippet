$(document).ready(function(){
      /**崩溃部分*/
      //android崩溃
      echarts.init(document.getElementById('androidtotal')).setOption(get3StackColumn('Android崩溃(%)','7.6版本','7.71版本','7.8版本','native',1.72,1.02,0.74,'java',0.67,0.11,0.10));
      echarts.init(document.getElementById('androidtop')).setOption(getLineBar('系统启动与崩溃','4.2及以下',811,5.71,'4.3',734,4.45,'4.4.x',4982,1.72,'5.x',9243,0.53,'6.0及以上',1537,0.45));
      echarts.init(document.getElementById('androidjava')).setOption(getCircle('Java崩溃','system', 61.1, 'nativemediaplayersdk', 9.4, 'QYVideoClient', 7.5, 'Other', 22.0));
      echarts.init(document.getElementById('androidnative')).setOption(getCircle('Native崩溃', 'ANR', 21.4, 'libc.so', 15.7, 'libwebviewchromium.so', 12.9, 'other', 49.9));
      //ios崩溃
      echarts.init(document.getElementById('iostotal')).setOption(get3StackColumn('iPhone崩溃(%)','7.6版本','7.7版本','7.8版本','oc',0.19,0.26,0.81,'native',0.22,0.32,0.79));
      echarts.init(document.getElementById('iosoc')).setOption(getCircle('模块崩溃','oc_qyapp', 27.07, 'dlna', 25.38, 'puma', 9.89, 'other', 37.66));
      // echarts.init(document.getElementById('iostopdevice')).setOption(getColumn('崩溃机型占比(%)','ip6s',33.33,'ip6sp',24.16,'ip6',11.35,'ip6p',8.51,'ip5s',8.42));
      // echarts.init(document.getElementById('iostopos')).setOption(getColumn('崩溃系统占比(%)','9.3.4',33.44,'9.3.2',15.50,'9.3.3',11.54,'9.2.1',6.72,'9.3.1',4.89));
      echarts.init(document.getElementById('iostopdevice')).setOption(getLineBar2('系统启动与崩溃','ip4',104651,2.20,'ip6s',3502486,1.46,'ip6s p',2629836,1.45,'ipSE',193596,1.37,'ip5s',352093,1.31));
      echarts.init(document.getElementById('iostopos')).setOption(getLineBar4('系统启动与崩溃','10.0',18083,2.00,'10.0.1',43197,1.96,'7.0',4212,1.85,'7.1.2',295710,1.70,'7.0.2',5703,1.6));

      echarts.init(document.getElementById('ipadtotal')).setOption(getStackColumn('iPad崩溃(%)','7.7版本','7.8版本','oc',0.37,0.38,'native',0.71,0.69));
      echarts.init(document.getElementById('ipadoc')).setOption(getCircle('模块崩溃','puma', 20.61, 'CoreFoundation', 19.39, 'qyplayer', 15.89, 'other', 44.11));
      // echarts.init(document.getElementById('iostopdevice')).setOption(getColumn('崩溃机型占比(%)','ip6s',33.33,'ip6sp',24.16,'ip6',11.35,'ip6p',8.51,'ip5s',8.42));
      // echarts.init(document.getElementById('iostopos')).setOption(getColumn('崩溃系统占比(%)','9.3.4',33.44,'9.3.2',15.50,'9.3.3',11.54,'9.2.1',6.72,'9.3.1',4.89));
      // echarts.init(document.getElementById('ipadtopdevice')).setOption(getLineBar3('系统启动与崩溃','Pro(C)',12,8.33,'mini4',761,3.42,'air2',2558,1.52,'Pro(W)',108,0.93,'ipad2',350,0.86));
      // echarts.init(document.getElementById('ipadtopos')).setOption(getLineBar5('系统启动与崩溃','9.3',14874,2.17,'9.0',5412,1.53,'9.0.2',14636,1.42,'8.1',35334,1.31,'9.3.4',627271,1.28));

      /**性能部分*/
      //android性能
      // echarts.init(document.getElementById('androidstartup')).setOption(getLines('Android启动','7.6版本','7.7版本','App启动',500,450,'welcomeActivity',500,600,'后台线程',600,700));
      // echarts.init(document.getElementById('androidstartup')).setOption(getLine('Android下半屏','7.5.1版本','7.6版本','7.71版本','gridView',719,251,295));
      // echarts.init(document.getElementById('androidhalfscreen')).setOption(getLines('Android下半屏','7.6版本','7.7版本','播放器',500,450,'剧集列表',500,600,'广告',600,700));
      //ios性能
      echarts.init(document.getElementById('iosstartup')).setOption(getLine('iOS启动时间','7.6版本','7.7版本','7.8版本','整体加载速度',3472,3528,1891));
      // echarts.init(document.getElementById('ioshalfscreen')).setOption(getLines('iOS下半屏','7.6版本','7.7版本','播放器',500,450,'剧集列表',500,600,'广告',600,700));

      /**包大小*/
      //android包大小
      echarts.init(document.getElementById('apackagetotal')).setOption(getRow('Android包大小(Mb)','7.71版本','7.8版本','dex', 7.64,8.12, 'resource', 7.02,8.44,'libs', 4.82,5.63,'other', 2.32,2.51));
      //ios包大小
      echarts.init(document.getElementById('ipackagetotal')).setOption(getRow('iOS包大小(Mb)','7.6版本','7.7版本', 'oc',47.67,56.95));
});
