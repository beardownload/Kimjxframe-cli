单页面多窗口 开箱即用

仅组件开发支持 外置js文件不做处理 使用 es5语法
加载组件的形式 写js 到 html内实现 es6自由
babel     支持es6
polyfill  兼容支持 promise

css
1.layui laytpl 编译 
2.less语法处理

vue       v2.6.14
vuex      v3.6.0
jquery    v3.3.1
Font Awesome Free 5.15.4
ELEMENTUI 2.15.7
Swiper    4.3.3

页面 组件 加载
组件名称使用小写 自动映射目录文件 加上自动加载标记 K-VUE-COMPONENT
<test-pagetest K-VUE-COMPONENT />

相对路径加载 __PATH__ 将被处理为 当前引用改组件的目录开始
<__PATH__-pagetest2 K-VUE-COMPONENT />


页面语法
1.样式 可建多个
<style scoped>
// 标签自动替换当前组件名称
.__CSSPRENAME__{
  
}
.test{
  .test2{
    
  }
}
</style>

html页面代码 仅可存在一个
<script type="text/html">
  <div>
    111111
  </div>
</script>

js 代码 仅可存在一个
__COMPONENT__ 自动替换组件名称 即路径对应的 test-pagetest
__TEMPLATE__ 自动载入上方页面模板
<script>
  Vue.component(__COMPONENT__, {
    template:__TEMPLATE__,
    
    inject:['getApp','App'],
    
    methods:{
      F_jumpUrl(){
        console.log(this.getApp(),this)
      }
    }
  })
</script>