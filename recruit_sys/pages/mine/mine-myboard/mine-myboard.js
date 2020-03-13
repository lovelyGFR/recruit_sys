// pages/mine/mine-myboard/mine-myboard.js

import {
  MyInfoModel
} from '../../../model/myInfo.js';

const myInfo = new MyInfoModel();


var app = getApp();
Page({
  data: {
    words: []
  },

  changeInputValue(ev) {

    
    this.setData({
      inputVal: ev.detail.value
    })
  },
  //删除留言
  DelMsg(ev) {
    var n = ev.target.dataset.index;
    var id = ev.target.dataset.id;
    var list = this.data.words;
    list.splice(n, 1);
    let data = {};
    data.id = id;
    myInfo.delnotice(data, res => {})


    this.setData({
      words: list
    });
  },
  //添加留言

  addMsg() {

    var that = this;
    var list = that.data.words;
    const userInfo = wx.getStorageSync('userInfo')
    let data = {};
    data.words = that.data.inputVal;
    data.nickName = userInfo.nickName;
    let data2 = {};
    data2.content = that.data.inputVal;
    data2.nickName = userInfo.nickName;
    if (!data.words) {
      wx.showToast({
        title: '填写再提交哦~',
        mask: true,
        image: '/images/star4.png',
        duration: 1500
      })
    } else {
      myInfo.postwords(data, (res) => {
        list.push(data2);
        wx.showToast({
          title: '提交成功',
          mask: true,
          image: '/images/star5.png',
          duration: 1500
        })
        that.setData({
          words: list,
          inputVal: ''

        })
      })
    }
  },


  onLoad: function (options) {
    //更新
    let that = this;
    myInfo.getwords((res) => {

      that.setData({
        words: res.result
      });
    })

  }

})