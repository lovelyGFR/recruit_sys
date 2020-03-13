// pages/myPage/my/my.js
import {
  MyInfoModel,
} from '../../../model/myInfo.js';
const myInfo = new MyInfoModel();
const util = require('../../../utils/util')

Page({
  data: {

    dialogShow: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    wxInfo: {},
    isHide: false,
    userInfo: [],
    user: {
      sex: "男"
    },
    more: "../../../images/more.png",
    manIcon: "../../../images/man.png",
    womanIcon: "../../../images/woman.png",
    myNewsIcon: "../../../images/my-news.png",
    aboutIcon: "../../../images/my-about.png",
    myboard: "../../../images/my-board.png",
    flags: true,
    flag: null
  },


  /* 页面跳转 */
  goMyNews: util.throttle(function () {
    let info = wx.getStorageSync('token')
    if (info) {
      wx.navigateTo({
        url: '../mine-mynews/mine-mynews'
      })
    } else {
      this.setData({
        dialogShow: true
      })
    }

  }, 2000),

  goTopersonInfo: util.throttle(function () {

    wx.navigateTo({
      url: '../mine-myInfo/mine-myInfo'
    })


  }, 2000),

  goToQRcode: util.throttle(function () {
    let info = wx.getStorageSync('token')
    if (info) {
      wx.navigateTo({
        url: '../mine-QRcode/mine-QRcode'
      })
    } else {
      this.setData({
        dialogShow: true
      })
    }

  }, 2000),

  goMessage: util.throttle(function () {
    let info = wx.getStorageSync('token')
    if (info) {
      wx.navigateTo({
        url: '../mine-myboard/mine-myboard'
      })
    } else {
      this.setData({
        dialogShow: true
      })
    }

  }, 2000),

  onLoad: function (options) {


    let stat = wx.getStorageSync('authorization')
    this.setData({
      isHide: stat
    })

  },


  tapDialogButton(e) {
    // console.log('dialog', e.detail.index)
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },


  doit: function () {
    if (wx.getStorageSync("authorization")) {} else {
      wx.reLaunch({
        url: '../../startup/startup'
      })
    }
  },
  onShow: function () {
    let that = this;
    let stat = wx.getStorageSync('authorization')
    this.setData({
      isHide: stat
    })
    // this.setData({
    //   'userInfo.user_avatar': info.user_avatar?info.user_avatar:wx.getStorageSync('wxInfo')
    // })
    // wx.getSetting({
    //   success(res) {
    //     console.log(res.authSetting['scope.userInfo'])

    //     if (res.authSetting['scope.userInfo']) {
    let token = wx.getStorageSync('token');
    if (token) {
      myInfo.getMyInfo((res) => {
        console.log(res)
        let userInfo = res.user_info;

        userInfo.user_avatar = wx.getStorageSync('wxInfo').avatarUrl;
        userInfo.user_vxName = wx.getStorageSync('wxInfo').nickName;
        userInfo.user_vxCity = wx.getStorageSync('wxInfo').city;
        userInfo.user_vxProvince = wx.getStorageSync('wxInfo').province;
        userInfo.user_name = res.user_info.user_name == null ? wx.getStorageSync('wxInfo').nickName : res.user_info.user_name;
        wx.setStorageSync('userInfo', userInfo);
        wx.setStorageSync('isUpdate', false);
        that.setData({
          userInfo: userInfo,
        })
      })
    }

    //     }
    //   }
    // })

    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       myInfo.getMyInfo(res => {
    //         console.log(res)
    //         wx.setStorageSync('userInfo', res.user_info)
    //         that.setData({
    //           userInfo: res.user_info,
    //           wxInfo: wx.getStorageSync('wxInfo')
    //         })
    //       })
    //     }
    //   }
    // })


    let da = wx.getStorageSync('authorization')
    if (da) {
      var tryArr = [] //用来存找到的对象
      myInfo.getnotice((res) => {
        console.log(res)
        for (var i = 0; i < res.msg.length; i++) {
          if (res.msg[i].message_state == 1) {
            tryArr.push(res.msg[i]) //存值
          }
        }
        this.setData({
          flag: true
        })
        if (tryArr.length == res.msg.length) {
          this.setData({
            flags: false,
          })
        }

      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("已推荐！")
    return {
      title: "欢迎您使用云昭云曜招新系统！",
      path: "/pages/index/index",
      imageUrl: '/images/yunding12.jpg',
    }
  }
})