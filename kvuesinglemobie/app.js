(function(){
  /**
   * 加载基础插件 页面框架单页适合后台使用
   * VUE 单实例版
   * 页面全部以组件形式 书写
   */
  window.Kim = {
    DEBUG:true,
    
    // 页面示例对象挂载
    App:{},

    init:function(){
      var _this = this;
      
      if(_this.DEBUG){
        KJ.CONFIG.Templatemode    = "api";
        KJ.CONFIG.TemplatemodeAPI = "index.php";
        
        Kim.use([
          ['https://cdn.bootcdn.net/ajax/libs/vConsole/3.11.1/vconsole.min.js','js']
        ],function(){
          new VConsole()
        })
      }
      
      // 加载cdn配置
      KJ.Fnuse([
        ['static/cdn/cdn.js','js']
      ],function(){
        _this.Fnloadplugin();
      });
    },

    //加载初始化基础插件
    Fnloadplugin:function(){
      var _this = this;

      //目录
      _this.RootPath  = KJ.CONFIG.root + "";

      var list = [
        _this.cdn.layui,
        
        // 核心
        ['static/js/core/jquery.min.js','js'],
        ['static/js/core/vue.min.js','js'],
        ['static/js/core/vuex.min.js','js'],
        ['static/js/store/index.js','js'],
        
        ['static/js/core/app.babel.js','js'],
        ['static/js/core/app.less.js','js'],
        ['static/js/core/app.vue.js','js']
      ];

      KJ.Fnuse(list,function(){
        //加载layui插件
        layui.use(['laytpl'],function(){
          _this.Fnloadlayuiplugin();
        });
      });
    },

    //加载其他插件 修改此处可
    Fnloadlayuiplugin:function(){
      var _this = this;
      
      // 加载css
      _this.VUE_loadComponent('main/css',function(){});
      
      KJ.Fnuse([
        _this.cdn.vant.css,
        _this.cdn.vant.js,
        Kim.cdn.fontawesome
      ],function(){
        Vue.use(vant);
        _this.Fnpageinit();
      });
    },

    //页面框架初始化
    Fnpageinit:function(){
      var _this = this;
      
      var framepage = KJ.CONFIG.defaultframe;
      
      //空组件 页面过度作用 促使强制刷新页面组件
      _this.VUE_EMPTYPAGE = "K-VUE-EMPTYPAGE";
      Vue.component(_this.VUE_EMPTYPAGE,{props:[],template:''});
      
      _this.VUE_loadComponent(framepage,function(){
        KJ.CONFIG.appdom.innerHTML = '<'+ _this.VUE_RouterPathDeal(framepage) +' />'
        
        //创建vue对象
        _this.vue = new Vue({
          el:KJ.CONFIG.appdom
        });
      });
    },

    //批量加载js css
    use:KJ.Fnuse,

    //加载js
    loadJs:KJ.Fnloadjs,

    //加载css
    loadCss:KJ.Fnloadcss,

    //解析url
    getGet:KJ.FngetGet,

    //获取模板文件
    getTemplate:function(u,callback){
      KJ.Fnpageloader(u,function(){
        callback(KJ.getApp(u));
      });
    }
  }

  Kim.init();
})();