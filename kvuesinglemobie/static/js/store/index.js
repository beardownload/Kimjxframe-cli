/**
 * vuex 共享数据管理
 * 基于 vuex 3.6.2
 */
(function(){
  var localKey = "KManagerLocalData";
  
  // 解析json
  function jsonParse(jsonstr){
    var result;

    if(/^\d{1,}$/.test(jsonstr)){
      return false;
    }

    try{
      result = JSON.parse(jsonstr);
    }catch(e){
      result = false;
    }
    
    return result;
  }
  
  /**
   * 默认数据
   */
  function getInitState(){
    var state = {
      // 会话缓存数据
      sessionData:{
        // 当前激活的页面ID
        appActive:0,
        // 页面数据列表
        appList:{}
      },
      
      // 本地存储数据
      localData:{
        
      },
      
      // 菜单数据
      menuList:[]
    };
    
    var localData = jsonParse(localStorage[localKey] || '') || {};
    if(localData){
      for(var i in localData){
        state.localData[i] = localData[i];
      }
    }
    
    var sessionData = jsonParse(sessionStorage[localKey] || '') || {};
    if(sessionData){
      for(var i in sessionData){
        state.sessionData[i] = sessionData[i];
      }
    }
    
    return state;
  }
  
  /**
   * @param {Object} state
   * 保存到本地存储
   */
  function saveToLocal(state){
    localStorage[localKey] = JSON.stringify(state.localData);
  }
  
  //保存到session本地存储
  function sateToSessionLcal(state){
    sessionStorage[localKey] = JSON.stringify(state.sessionData);
  }
  
  /**
   * 从本地存储更新到对象
   */
  function getFromLocal(state){
    var localData = jsonParse(localStorage[localKey] || '') || {};
    if(localData){
      for(var i in localData){
        state.localData[i] = localData[i];
      }
    }
  }
  
  var $store = new Vuex.Store({
    state: getInitState(),
    mutations: {
      //保存当前数据到本地
      saveState:function(state){
        saveToLocal(state);
      },

      //更新本地数据 到当前 state
      stateUpdate:function(state,data){
        for(var i in data){
          state[i] = data[i];
        }
      },
      
      // 更新seesionData
      setSessionData(state,data){
        for(var i in data){
          state.sessionData[i] = data[i];
        }
        
        sateToSessionLcal(state);
      },
      
      // 修改和保持 本地数据
      setLocalData:function(state,data){
        for(var i in data){
          state.localData[i] = data[i];
        }
        
        saveToLocal(state);
      },
      
      // 从本地跟新数据到当前state
      stateUpdateFromLocal:function(state){
        getFromLocal(state);
      },
    },
    getters: {
      //获取当前页面的参数
      getPageParam:function(state){
        
      }
    },
    
    actions: {
      
    }
  });


  Vue.prototype.$store = $store;
  window.mapState = Vuex.mapState;
})();