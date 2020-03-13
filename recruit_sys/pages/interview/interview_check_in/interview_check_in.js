// pages/interview/interview_check_in/interview_check_in.js
import {
  InterviewModel
} from '../../../model/interview'
let interview = new InterviewModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aData: "期待与你的相遇",
    bData: "具体面试时间安排会由于人数限制做出调整",
    cData: "面试时间安排",
    time: null,
    date: null,
    week: null,
    location: null,

    status: 1

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    interview.getcheck((res) => {

      let d = res.interview.interview_date;
      let arr = d.split('-');
      let date1 = arr[1] + '.' + arr[2] + '号';
      let week1 = new Date(d).getDay();
      let arrweek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

      this.setData({
        date: date1,
        time: res.interview.interview_time,
        week: arrweek[week1],
        location: res.wait_room,
      })
    })
  },

  my: function () {
    wx.navigateTo({
      url: '../../mine/mine-QRcode/mine-QRcode',
    });
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

})