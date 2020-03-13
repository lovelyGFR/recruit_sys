// pages/introduce/yun_yi/yun_yi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    imgUrls: ['https://yun-recruit.oss-cn-beijing.aliyuncs.com/yi_1.jpg',
             'https://yunding-zhaoxin.oss-cn-beijing.aliyuncs.com/yun_yi2.jpg',
             'https://yunding-zhaoxin.oss-cn-beijing.aliyuncs.com/yun_yi3.jpg'
    ],
    interval: 5000,
    duration: 1000,
    circular: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  go: function () {
    wx.openLocation({ /*使用微信内置地图查看位置*/
      latitude: 37.752761,
      longitude: 112.716070,
      scale: 25,
      name: '云顶书院-逸庐基地'
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