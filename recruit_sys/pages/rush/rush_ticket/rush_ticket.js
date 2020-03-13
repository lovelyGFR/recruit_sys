// pages/rush/rush_ticket/rush_ticket.js
import {
  RushModel
} from '../../../model/rush.js'
let rush = new RushModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: null,
    studentID: null,
    NUM: null,
    info_session: null,
    info_time: null,
    info_location: "大数据学院9层云顶数港报告厅",
    QR: null,
    apply : null,
    timetask1 : null
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let date = new Date();
    // console.log(date.getHours())

    //获取宣讲会票的二维码
    let token = wx.getStorageSync('token');
    this.setData({
      QR : 'https://test1.yundingshuyuan.cn/ticket_qr?token=' + token
    })


    //获取票上的个人信息
    rush.getInfo((res)=>{
      let info = wx.getStorageSync("userInfo");
      this.setData({
        avatar : info.user_avatar,
        studentID : res.ticket.user_studentId,
        NUM : res.ticket.brief_number,
        info_session : res.ticket.brief_session,
        info_time : res.ticket.brief_time
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
    let that = this;
    let p1 = new Promise((resolve, reject) => {

      rush.getTicketstat((res) => {
        this.setData({
          apply: res.code
        })
        resolve(that.data.apply)
      })
    })
    p1.then(result => {
      if (result == 0) {
        that.data.timetask1 = setInterval(function () {
          rush.getTicketstat((res) => {
            console.log(res)
            that.setData({
              apply: res.code
            })
            if (res.code == 1) {
              clearInterval(that.data.timetask1);
              wx.showToast({
                title: '签到成功',
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.data.timetask1);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timetask1);
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