import axios from "axios";
import store from "../store";
import router from "../router";
import { Toast } from 'vant';
import Vue from "vue";
import mixin from "../mixin/index";




Vue.use(Toast);

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_URL, // api 的 VUE_APP_URL
  timeout: 50000 // 请求超时时间(因为需要调试后台,所以设置得比较大)
});

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
  config => {
    // store.commit('showLoading')
    config.headers['Content-Type']="application/json";

    if (store.state.token) {
      // 给请求头添加laohu-token
      config.headers["token"] = store.state.token ;
    }



   
    return config;
  },
  error => {
    store.commit('hideLoading')
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器,数据返回后进行一些处理
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    store.commit('hideLoading')
    const res = response.data;
    if (res.code == 401) {
      Toast(res.msg);
      store.commit("updateToken", '');
      store.commit("updateTrainType", '');
      store.commit("updateTrainTypeDesc", '');
      store.commit("updateName", '');
 
      mixin.isSystem() == 'zlxcIOS'
      if (mixin.isSystem() == 'zlxcIOS') {
        setInterval(function() {
          
          window.webkit.messageHandlers.webClose.postMessage("");
        },1000)
      }else if(mixin.isSystem() == "zlxcAndroid"){
        setInterval(function() {
          window.ZLXC.webClose(); // 调用原生app的函数
        },1000)
      }else{
        router.replace({path:"/wxLogin"})
      }
      return;
    }
    return res;
    // if (res.code == 200) {
    //   return res.data;
    // }  else {
    //   Toast(res.msg);
    // }
  },
  error => {
    Toast('网络请求status=' + error.response.status);
    store.commit('hideLoading')
    Promise.reject("网络异常");
  }
);
export default service;
