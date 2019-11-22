//index.js


//获取应用实例(可获取在app.js全局定义的方法)
const app = getApp()

Page({
  data: {
    tablist: [{
        src: '/orderManagement/index/index',
        iconName: 'medal',
        text: '中式糕点'
      },
      {
        src: '/orderManagement/index/index',
        iconName: 'github',
        text: '西式甜点'
      },
      {
        src: '/orderManagement/index/index',
        iconName: 'present',
        text: '新用户专享'
      },
      {
        src: '/orderManagement/index/index',
        iconName: 'favorfill',
        text: '服务中心'
      }
    ],
    TabCur: null,
    showLoginPage: true, //显示首页
    // showHomePage: false, //显示登录页
    /*登录数据*/
    username: '',
    password: '',
    isChecked: false,
    captcha: '',
    error: false,
    errorMore3: false,
    errorMsg: '',
    src: 'captcha.jpg'
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  },
  /*获取用户名 */
  usernameBlur(e) {
    this.setData({
      username: e.detail.value,
    })
  },
  /*获取密码 */
  passwordBlur(e) {
    this.setData({
      password: e.detail.value,
    })
  },
  /*获取checked值 */
  checkboxChange(e) {
    if (e.detail.value.length == 0) {
      this.setData({
        isChecked: false,
      })
    } else {
      this.setData({
        isChecked: true,
      })
    }
  },
  login: function(e) {
    // console.log('点击登录:' + this.data.username + ':' + this.data.password + ':' + this.data.isChecked);
    let data = "username=" + this.data.username + "&password=" + this.data.password + "&captcha=" + this.data.captcha;
    this.rememberUserInfo();
    const that = this;
    app.requestUrl({
      url:"sys/login",
      method: "POST",
      data: data,
      success:function(res){
        if (res.data.code==0){
          that.setData({
            showLoginPage: false,
          });
          wx.showTabBar({});
        }
      },
    })
  },
  rememberUserInfo: function(event) {
    wx.setStorageSync('remember', this.data.isChecked)
    wx.setStorageSync('username', this.data.username)
    wx.setStorageSync('password', this.data.password)

    // //判断是否点击了记住密码
    // if (this.data.isChecked) {
    //   $.cookie("remember", "true", { expires: 7 }); // 存储一个带7天期限的 cookie
    //   $.cookie("username", username, { expires: 7 }); // 存储一个带7天期限的 cookie
    //   $.cookie("password", password, { expires: 7 }); // 存储一个带7天期限的 cookie
    // }
    // else {
    //   $.cookie("remember", "false", { expires: -1 });
    //   $.cookie("username", '', { expires: -1 });
    //   $.cookie("password", '', { expires: -1 });
    // }
  },
  onLoad: function() {
    wx.hideTabBar({});
    /*页面加载从缓存中获取账号密码*/
    this.setData({
      isChecked: wx.getStorageSync('remember'),
      username: wx.getStorageSync('username'),
      password: wx.getStorageSync('password')
    })
    //是否记住密码
    // wx.setStorageSync({
    //   key: "key",
    //   data: "value"
    // })
    // wx.getStorageSync({//获取本地缓存
    //   key: "remember",
    //   success: function (res) {
    //     if (res.data == "true"){
    //       this.setData({
    //         username = wx.getStorageSync('username'),
    //         password = wx.getStorageSync('password'),
    //       });
    //     }
    //   },
    // })
    // if ($.cookie("remember") == "true") {
    //   $("#remember").attr("checked", true);
    //   this.username = $.cookie("username");
    //   this.password = $.cookie("password");
    // }

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})