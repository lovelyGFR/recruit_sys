// pages/mine/mine-QRcode/mine-QRcode.js
import {
  MineModel
} from '../../../model/mine.js'
let mine = new MineModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    QRimages: null,
    // "/images/QR.jpg"
    QRtext: "",
    timetask1: null,
    timetask2: null,
    apply: null,
    interview: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let token = wx.getStorageSync('token');
    this.setData({
      QRimages: 'https://test1.yundingshuyuan.cn/people_qr?token=' + token
    })

  },
  onShow: function () {

    let that = this;
    let p1 = new Promise((resolve, reject) => {

      mine.getApplystat((res) => {
        this.setData({
          apply: res.code
        })
        resolve(that.data.apply)
      })
    })
    p1.then(result => {
      if (result == 0) {
        that.data.timetask1 = setInterval(function () {
          mine.getApplystat((res) => {
            console.log(res)
            that.setData({
              apply: res.code
            })
            if (res.code == 1) {
              clearInterval(that.data.timetask1);
              wx.showToast({
                title: '申请书提交成功',
                icon: 'success',
                image: '',
                duration: 1500,
                mask: false,
              });
            }
          })
        }, 1000)
      } 
    })


    let p2 = new Promise((resolve, reject) => {

      mine.getInterviewSign((res) => {
        this.setData({
          interview: res.code
        })
        resolve(that.data.interview)
      })
    })
    p2.then(result => {
      if (result == 0) {
        that.data.timetask2 = setInterval(function () {
          mine.getInterviewSign((res) => {
            console.log(res)
            that.setData({
              interview: res.code
            })
            if (res.code == 1) {
              clearInterval(that.data.timetask2);
              wx.showToast({
                title: '面试签到成功',
                icon: 'success',
                image: '',
                duration: 1500,
                mask: false,
              });
            }
          })
        }, 1000)
      } 
    })

  },


  onHide: function () {
    clearInterval(this.data.timetask1)
    clearInterval(this.data.timetask2)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timetask1)
    clearInterval(this.data.timetask2)
  },
})