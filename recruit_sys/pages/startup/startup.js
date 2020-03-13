// pages/startup/startup.js
import {
  indexModel
} from '../../model/index.js'
let indexMol = new indexModel()
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',
    token: '',
    authorization: null,
    imageUrl: null,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        // console.log(app.globalData.userInfo);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },


  getUserInfo: function(e) {
    if (e.detail.userInfo) {

      //用户按了允许授权按钮

      let userInfo = e.detail.userInfo;
      userInfo.user_avatar = userInfo.avatarUrl;
      if (userInfo.gender == 1) {
        userInfo.user_sex = '男';
      } else {
        userInfo.user_sex = '女';
      }
      wx.setStorageSync('wxInfo',userInfo)
      wx.setStorageSync('islogin', true)
      wx.setStorageSync('authorization', true);
      wx.reLaunch({
        url: '../index/index',
      })

    } else {
      wx.reLaunch({
        url: '../mine/mine-mine/mine-mine',
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})



























// wx.getSetting({
//   success: data => {
//     if (data.authSetting['scope.userInfo']) {
//       wx.getUserInfo({
//         success: function (res) {
//           wx.login({
//             success: res => {
//               // 获取到用户的 code 之后：res.code
//               console.log("用户的code:" + res.code);
//               startupModel.startup((res) => {
//                 console.log(res)
//               })
//             }
//           });
//         }
//       });
//     } else {


//     }

//   }
// });