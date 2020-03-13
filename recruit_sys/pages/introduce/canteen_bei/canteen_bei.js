// pages/introduce/canteen_bei/canteen_bei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      indicatorDots: false,
      autoplay: true,
      imgUrls: ['https://yun-recruit.oss-cn-beijing.aliyuncs.com/canteen_bei.jpg'],
      interval: 5000,
  },

  go: function () {
    wx.openLocation({ /*使用微信内置地图查看位置*/
      latitude: 37.752831,
      longitude: 112.720482,
      scale: 25,
      name: '北区餐厅'
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