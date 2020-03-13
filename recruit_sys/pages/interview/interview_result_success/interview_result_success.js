import {
  getuserinfoModel
} from '../../../model/getuserinfo'
const user = new getuserinfoModel();

import {
  InterviewModel
} from '../../../model/interview'
const interview = new InterviewModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    group_number: null,
    avatar: null
  },

  /**
   * 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    user.getinfo((res) => {
      this.setData({
        name : res.user_info.user_name,
        avatar : res.user_info.user_avatar
      })
    })

    interview.getlastResult({
      result : 1
    },(res)=>{ 
      console.log(res)
    })

    interview.getqq((res) => {
      this.setData({
        group_number : res.qqNumber
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

  },
  result: function () {
    wx.navigateTo({
      url: '../result/result'
    })
  },

  copy: function (e) {
    var that = this;
    wx.setClipboardData({
      //准备复制的数据
      data: that.data.group_number,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'none'
        });
      }
    });
  }
})