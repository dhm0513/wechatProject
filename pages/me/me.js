// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
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
    contentList: [{
        src: '/orderManagement/index/index',
        text: '我的优惠券'
      },
      {
        src: '/orderManagement/index/index',
        text: '我的优惠券'
      },
      {
        src: '/orderManagement/index/index',
        text: '我的优惠券'
      },
    ],
    TabCur: null,
  },
  exitAccount(){
    console.log('退出账户');
    wx.reLaunch({
      url: './../index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})