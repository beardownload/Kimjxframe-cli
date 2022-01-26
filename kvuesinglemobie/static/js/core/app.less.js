(function(){
  var APP = window[KJ.CONFIG.appObject];
  
  var LessApp = {
    // 插件地址  kimjxframe/less.min.js
    plugPath:['static/js/core/less.min.js','js'],
    plugPathpx2Rem:['static/js/core/app.px2rem.js','js'],
    
    // 初始化后 指向插件
    lessApp:false,
    
    // 是否开启rem模式
    px2Rem:true,
    
    // less处理配置
    lessRenderConfig:{
      env: APP.DEBUG ? 'development' : 'production',
      async: false,
      logLevel: 2,
      
      // 全局变量
      globalVars: {
        //var1: '"quoted value"',
      },
    },
    
    initCheck:function(callback){
      if(LessApp.lessApp){
        callback();
      }else{
        setTimeout(function(){
          LessApp.initCheck(callback);
        },100);
      }
    },
    
    init:function(){
      var list = [LessApp.plugPath];
      
      if(LessApp.px2Rem){
        list.push(LessApp.plugPathpx2Rem);
      }
      
      KJ.Fnuse(list,function(){
        LessApp.lessApp = window.less
      });
    },
    
    // css 处理
    render:function(style,callback){
      LessApp.initCheck(function(){
        window.less.render(style,LessApp.lessRenderConfig).then(function(result){
          var cssResult = LessApp.px2Rem ? APP.px2remApp.render(result.css) : result.css
          // console.log(cssResult)
          
          callback(cssResult)
        }).catch(function(err){
          console.log('less编译出错',err)
          callback(LessApp.px2Rem ? APP.px2remApp.render(style) : style)
        });
      });
    }
  }
  
  LessApp.init();
  APP.LessApp = LessApp;
})();