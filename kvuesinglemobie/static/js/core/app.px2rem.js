(function(){
  var APP = window[KJ.CONFIG.appObject];
  
  var px2remApp = {
    reg:/(\d*\.?\d+)px/g,
    rootValue:37.5,
    
    // 设置根
    setRootValue:function(rootValue){
      px2remApp.px2remApp = rootValue
    },
    
    px2Rem:function(px){
      return parseFloat((px.replace('px','') / px2remApp.rootValue).toFixed(4)) + 'rem'
    },
    
    // css 处理
    render:function(style){
      var pxList = style.match(px2remApp.reg);
      
      if(pxList === null){
        return style;
      }
      
      for(var i=0;i<pxList.length;i++){
        style = style.replace(pxList[i],px2remApp.px2Rem(pxList[i]));
      }
      
      return style;
    }
  }

  APP.px2remApp = px2remApp;
})()

!function(e,t){function n(){t.addEventListener("DOMContentLoaded",n)}function d(){var e=i.clientWidth/10;i.style.fontSize=e+"px"}var i=t.documentElement,o=e.devicePixelRatio||1;if(n(),d(),e.addEventListener("resize",d),e.addEventListener("pageshow",function(e){e.persisted&&d()}),o>=2){var a=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",a.appendChild(s),i.appendChild(a),1===s.offsetHeight&&i.classList.add("hairlines"),i.removeChild(a)}}(window,document);