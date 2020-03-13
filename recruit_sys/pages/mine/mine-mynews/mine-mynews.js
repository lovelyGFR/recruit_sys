import {
  MyInfoModel,
} from '../../../model/myInfo.js';

let myInfo = new MyInfoModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {

    color: "#999999",
    images1: "/images/more.png",
    mlist: []
  },
  // -----------

  changStatus(e) {
    let that = this;

    let index = e.currentTarget.dataset.id;
    let data = {};
    data.message_id = index;
    myInfo.postnotice(data, (res) => {
      console.log("bobobobobo", res)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },






  // 跳转到新闻详情页面
  go_deinfo(e) {
    this.changStatus(e)
    let data = {};
    data.time = e.currentTarget.dataset.time
    data.content = e.currentTarget.dataset.content
    wx.navigateTo({
      url: "/pages/mine/mine-infodetail/mine-infodetail",
      success: function(res) {
        console.log("页面跳转成功")
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: data
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    myInfo.getnotice((res) => {
      if (res.msg.length === 0) {
        wx.showToast({
          title: '还没有消息哦~',
          mask: true,
          image: '/images/star6.png',
          icon: 'none',
          duration: 1500
        })
      } else {
      for (var i = 0; i < res.msg.length; i++) {

        let time = res.msg[i].message_time;
        //将时间戳转化为年月日
        function timestampToTime(timestamp) {
          var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
          var Y = date.getFullYear() + '-';
          var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
          var D = date.getDate() + ' ';
          var h = date.getHours() + ':';
          var m = date.getMinutes() + ':';
          var s = date.getSeconds();
          return Y + M + D + h + m + s;
        }
        res.msg[i].message_time = timestampToTime(time);
      }
      }
   
      this.setData({
        mlist: res.msg
      })
    })
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


})