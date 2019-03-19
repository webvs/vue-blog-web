// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import routes from './router/index.js'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
//全局设置
axios.defaults.baseURL='https://wd9712169819gawpax.wilddogio.com'
//axios.defaults.headers.common['Authorzation']='Token'
//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color='#'+Math.random().toString(16).slice(2,8);
  }
})
Vue.directive('theme',{
  bind(el,binding,vnode){ //binding 参数 v-指令 后的参数
    if(binding.value=='wide'){  //wide 得用双引号 包裹 单引号
      el.style.maxWidth='1200px';
    }else if(binding.value=='small'){
      el.style.maxWidth='600px';
    }
    if(binding.arg=='column'){
      el.style.background="#6677cc";
      el.style.padding="20px;"
    }
  }
})
//自定义过滤器
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})
/* eslint-disable no-new */
Vue.filter("snippet",function(value){
  return value.slice(0,100)+"..."
})
//创建路由
const router=new VueRouter({
  routes,
  mode:"history"

})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
