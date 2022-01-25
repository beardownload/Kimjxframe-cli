(function(){
  var rootPath = 'static/cdn/';
  
  Kim.cdn = {
    layui:[rootPath + 'layui/layui.js','js'],
    
    elementui:{
      js:[rootPath + 'elementui/index.min.js','js'],
      css:[rootPath + 'elementui/index.min.css','css']
    },
    
    vant:{
      js:[rootPath + 'vant/vant.min.js','js'],
      css:[rootPath + 'vant/index.min.css','css']
    },
    
    // '4.3.3'
    swiper:{
      css:[rootPath + 'swiper/swiper.min.css','css'],
      js:[rootPath + 'swiper/swiper.min.js','js']
    },
    
    fontawesome:[rootPath + 'fontawesome/css/all.min.css','css']
  }
})()