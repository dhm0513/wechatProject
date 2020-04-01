//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  /*封装全局的请求接口的方法*/
  getUrl:function(){
    return 'http://192.168.10.252:8090/aslogis/'//测试库
    // return 'http://www.dingshangbaoxian.com.cn:8080/aslogis'//正式库
  },

  /*
  url:接口地址
  method：请求的方式Post  Get
  data:传给后台的参数，数据
  success:请求成功调用方法
  fail:请求失败调用方法
   */
  requestUrl: function ({ url, method, data, success, fail}) {
    wx.request({
      "url": this.getUrl()+url,
      "method": method,
      "data": data || {},//string/object/ArrayBuffer
      "header": {
        'content-type': 'application/x-www-form-urlencoded'
      },
      "success": success,
      "fail": fail
    });
  },
  globalData: {
    userInfo: null
  }
})