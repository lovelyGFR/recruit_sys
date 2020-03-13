// pages/interview/interview_result/interview_result.js
import {
  InterviewModel
} from '../../../model/interview'
const interview = new InterviewModel();
var status = 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qone : null,
    qtwo : null,
    qthree : null,
    answerone: null,
    answertwo: null,
    answerthree: null,
    status: 1,
    checkone : null,
    checktwo : null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    interview.getquestion((res)=>{
      this.setData({
        qone : res.question1,
        qtwo : res.question2,
        qthree : res.question3
      })
    })
    interview.getrusult((res)=>{
      this.setData({
        checktwo : res.result
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

  changeone: function (e) {

    if (e.detail.value == "radio1") {
      this.setData({
        answerone: 1
      })
    } else if (e.detail.value == "radio2") {
      this.setData({
        answerone: 0
      })
    }
    console.log(this.data.answerone)
  },
  changetwo: function (e) {

    if (e.detail.value == "radio1") {
      this.setData({
        answertwo: 1
      })
    }else if(e.detail.value == "radio2"){
      this.setData({
        answertwo: 0
      })
    }
    console.log(this.data.answertwo)
  },
  changethree: function (e) {

    if (e.detail.value == "radio1") {
      this.setData({
        answerthree: 1
      })
    }else if(e.detail.value == "radio2"){
      this.setData({
        answerthree: 0
      })
    }
  },
  inquire: function () {
    if (this.data.answerone == 1 && this.data.answertwo == 1 && this.data.answerthree == 1) {
      let that = this;
      that.setData({
        checkone : 1
      })
      if(that.data.checkone == 1 && that.data.checktwo == 1){
        wx.redirectTo({
          url: '../interview_result_success/interview_result_success'
        })
      }else{
        wx.redirectTo({
          url: '../interview_result_failed/interview_result_failed'
        })
      }

    } else if (this.data.answerone==null || this.data.answertwo==null || this.data.answerthree == null) {
      wx.showModal({
        title: '提示',
        content: '请完善信息',
        showCancel: false,
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
      });
    } else {
      wx.redirectTo({
        url: '../interview_result_failed/interview_result_failed'
      })
    }
  },
})