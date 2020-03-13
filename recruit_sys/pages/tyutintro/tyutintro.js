// pages/tyutintro/tyutintro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoUrl:'',
    animationData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        videoUrl:'https://yunding-zhaoxin.oss-cn-beijing.aliyuncs.com/2019.mp4'
      })
    var that = this;

    // 旋转动画

    var animation = wx.createAnimation({

      duration: 1000, //动画的持续时间

      timingFunction: "linear", //  动画的效果设置为平均

      delay: 0 //动画延迟时间无

    })

    that.animation = animation

    animation.rotate(360).step();

    //延时动画

    setTimeout(function () {

      that.setData({

        animationData: animation.export()

      })

    }, 500)
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
