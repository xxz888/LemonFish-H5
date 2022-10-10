
export default {
  data() {
    return {

    };
  },
  fomatDate(time) {
    let date = new Date(time);
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let D = date.getDate();
    return `${Y}年-${M}月-${D}日`;
  },
  fomatDateHHMMSS(time) {
    let date = new Date(time);
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return `${hour}:${minute}:${second}`;
  },
  isEmptyObject(obj) {
    for (var key in obj) {
      return false;
    }
  },
  buzero(ymd) {
    var y = ymd.split('-')[0];
    var m = parseInt(ymd.split('-')[1]) < 10 ? '0' + ymd.split('-')[1] : ymd.split('-')[1];
    var d = parseInt(ymd.split('-')[2]) < 10 ? '0' + ymd.split('-')[2] : ymd.split('-')[2];
    return y + '-' + m + '-' + d;
  },
  getLng() {
    return '120.210792'
  },
  getLat() {
    return '30.246026'
  },
  getLocation() {
    var that = this;
    // 获取到当前位置的定位
    AMap.plugin('AMap.Geolocation', function () {
      var geolocation = new AMap.Geolocation({
      })
      geolocation.getCurrentPosition()
      AMap.event.addListener(geolocation, 'complete', onComplete)
      AMap.event.addListener(geolocation, 'error', onError)
      function onComplete(data) {
        // 这里使用that而不是this，如果使用this，则无法在其他地方获取到这里的经纬度
        return { 'lat': data.position.lat, 'lng': data.position.lng };
      }
      function onError(data) {
        // 定位出错
        console.log('定位失败')
        return { 'lat': '0', 'lng': '0' };

      }
    })
  },





  isSystem() {
    var browser = {
      versions: function () {
        var u = navigator.userAgent,
          app = navigator.appVersion;
        return { //移动终端浏览器版本信息
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
          iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
      }(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
    var type = '';
    var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") { //在微信中打开
      if (browser.versions.ios || browser.versions.iPad) { //iOS浏览器打开
        type = 'wxIOS';
      } else if (browser.versions.android) {  // (browser.versions.android)IOS浏览器打开
        type = 'wxAndroid';
      }
    } else {
      if (browser.versions.ios) { //iOS浏览器打开
        type = 'zlxcIOS';
      } else if (browser.versions.android) {  // (browser.versions.android)IOS浏览器打开
        type = 'zlxcAndroid';
      }
    }
    return type;
  },


  //获取url后的参数，传入key就可以
  getUrlParam: function (queryName) {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) {
            return pair[1];
        }
    }
    return null;
  },
  appendParameter() {
    var reg = new RegExp("(^|&)" + 'from' + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    return '?from=' + unescape(r[2]) + '&timestamp=' + new Date().getTime();
  }


};


