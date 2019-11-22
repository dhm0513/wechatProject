// addRecord/addDetail/addDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:false,
    list:[
      {index:1,name:"身份证"},
      {index:2,name:"驾驶证"},
      {index:3,name:"营运证"},
      {index:4,name:"行驶证"}
    ],
    uploadImageList:[]//上传图片数组
  },

  // 触发转发
  // onShareAppMessage(ops) {
  //   console.log(ops);
  //   console.log("1");
  //   return {
  //     title: '转发的页面名称',
  //     path: 'addRecord/addDetail/addDetail'
  //   }
  // },

  tabSelect(e) {
    console.log(e.target.dataset.index);//获取点击的下标
    // 请求接口
    this.setData({
      isshow: true,
    })

  },
  clickBack(e){
    this.setData({
      isshow: false,
    })
  },
  chooseImage(e){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://localhost:8088/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            "Content-Type": "multipart/form-data"
          },
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            //do something
            // this.setData({
            //   uploadImageList: this.data.uploadImageList,
            // })
          }
        })
      } 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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