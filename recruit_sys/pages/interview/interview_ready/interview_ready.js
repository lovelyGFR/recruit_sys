// pages/interview/interview_ready/interview_ready.js.
import {
  InterviewModel
} from '../../../model/interview'
let interview = new InterviewModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aData : "面试时请沉着冷静",
    a_Data : "同学加油",
    bData : "面试房间号",
    cData : "面试中",
    location : null,
    other_number : null,
    my_number : null,
    timetask : null,
    status : 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    interview.getnumber((res)=>{
      
        let my;
        if(res.interview_number < 10){
          my = "00" + res.interview_number
        }else if(res.interview_number < 100 && res.interview_number > 10){
          my = "0" + res.interview_number
        }
        let other;
        if(res.interviewing_interview_user_number < 10){
          other = "00" + res.interviewing_interview_user_number
        }else if(res.interviewing_interview_user_number < 100 && res.interviewing_interview_user_number > 10){
          other = "0" + res.interviewing_interview_user_number
        }
        this.setData({
          location : res.room_number,
          other_number : other,
          my_number : my
        })
        if(this.data.other_number == this.data.my_number){
          this.setData({
            status : 2
          })
        }

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
    let that = this;
    that.data.timetask = setInterval(function(){
      interview.getnumber((res)=>{
          
          let my;
          if(res.interview_number < 10){
            my = "00" + res.interview_number
          }else if(res.interview_number < 100 && res.interview_number > 10){
            my = "0" + res.interview_number
          }
          let other;
          if(res.interviewing_interview_user_number < 10){
            other = "00" + res.interviewing_interview_user_number
          }else if(res.interviewing_interview_user_number < 100 && res.interviewing_interview_user_number > 10){
            other = "0" + res.interviewing_interview_user_number
          }
          that.setData({
            location : res.room_number,
            other_number : other,
            my_number : my
          })
          if(that.data.other_number == that.data.my_number){
            that.setData({
              status : 2
            })
          }
  
  
      })
    },5000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.data.timetask)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timetask)
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