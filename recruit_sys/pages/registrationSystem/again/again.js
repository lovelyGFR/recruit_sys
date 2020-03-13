// pages/again/again.js
import {
  SignupModel
} from '../../../model/signup.js'
let sign = new SignupModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeone : null,
    timetwo : null
  },
  goToPicture: function (param) {
    wx.setStorage({
      key: 'id',
      data: 1,
    })
    wx.redirectTo({
      url: '/pages/registrationSystem/picture_1/picture_1',
    })
  },
  goToSuccess: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    sign.getTimeone((res)=>{
      this.setData({
        timeone : res.date,
        timetwo : res.app_time
      })
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