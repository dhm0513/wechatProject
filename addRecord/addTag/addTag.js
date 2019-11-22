// addRecord/addTag/addTag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagList:[
      {name:'早',id:121},
      {name:'中',id:121},
      {name:'晚',id:121},
      {name:'心情',id:121},
      {name:'多云',id:121},
      {name:'多云',id:121},
      {name:'多云',id:121},
      {name:'多云',id:121},
      {name:'多云',id:121}
    ],
    inputVal:''//input框数据
  },
  inputTyping(e){
    // console.log('点击input：' + JSON.stringify(e.detail.value));
    this.setData({
      inputVal: e.detail.value,
    });
  },
  // 回车搜索
  confirmTap(e){
    var obj = { name: this.data.inputVal,id:1};
    this.data.tagList.push(obj);
    this.setData({
      tagList: this.data.tagList,
    });
  },
  // 请求标签数据
  tagDataRequest(){
    const that = this;
    
    app.requestUrl({
      url: "sys/login",
      method: "POST",
      data: data,
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            showLoginPage: false,
          });
          wx.showTabBar({});
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加标签'
    })
    // 请求过来的数据
    let r = [
      { name: '早1', id: 121 },
      { name: '中1', id: 121 },
      { name: '晚1', id: 121 },
      { name: '心情1', id: 121 },
      { name: '多云1', id: 121 },
      { name: '多云1', id: 121 },
      { name: '多云1', id: 121 },
      { name: '多云1', id: 121 },
      { name: '多云1', id: 121 }
    ]
    this.setData({
      tagList: r,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})