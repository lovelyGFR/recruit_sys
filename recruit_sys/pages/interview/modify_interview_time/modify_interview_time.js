// pages/interview/interview_index/interview_index.js
import {
  InterviewModel
} from '../../../model/interview'
let interview = new InterviewModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aData: "期待与你的每一次相遇",
    bData: null,
    cData: "面试空课时间",
    dData: "面试前24小时可修改面试时间,具体时间安排会由于人数限制做出调整",

    //大数组
    arr: [],

    //日期
    navList: [],

    //被点击的首页导航栏的菜单的索引
    currentIndexNav: 0,

    // 时间
    List: [],
    Index: [0],
    time: null,

    //剩余人数
    num: null,

    // 原面试时间
    previoustime: null


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        currentIndexNav : 0,
        Index: 0
      })
      interview.getpreviousTime((res) => {
        this.setData({
          bData : res.interDate
        })
        //获取大数组
        this.setData({
          arr: res.array
        })
        this.setData({
          previoustime: res.time
        })
        //读大数组的长度
        let len = res.array.length;
        //遍历日期
        var i;
        var arr1 = [];
        for (i = 0; i < len; i++) {
          arr1.push(res.array[i].date)
        }
        this.setData({
          navList: arr1
        })
        //显示第一个数组的信息
        let b;
        let arr3 = [];
        for (b = 0; b < res.array[0].info.length; b++) {
          arr3.push(res.array[0].info[b].time)
        }
        this.setData({
          List: arr3
        })
        this.setData({
          time: this.data.arr[0].info[0].time
        })
        this.setData({
          num: this.data.arr[0].info[0].number
        })
      })
  },

  onShow() {
    interview.getpreviousTime((res) => {
      //获取大数组
      this.setData({
        arr: res.array
      })
      this.setData({
        previoustime: res.time
      })
      //读大数组的长度
      let len = res.array.length;
      //遍历日期
      var i;
      var arr1 = [];
      for (i = 0; i < len; i++) {
        arr1.push(res.array[i].date)
      }
      this.setData({
        navList: arr1
      })
      //显示第一个数组的信息
      let b;
      let arr3 = [];
      for (b = 0; b < res.array[0].info.length; b++) {
        arr3.push(res.array[0].info[b].time)
      }
      this.setData({
        List: arr3,
        num: this.data.arr[this.data.currentIndexNav].info[this.data.Index].number,
        time: this.data.arr[0].info[0].time
      })
    })
  },

  //获取到选择的时间和剩余人数
  get_time: function (e) {
    this.setData({
      time: e.detail.time,
      Index: e.detail.Index
    })
    this.data.arr[this.data.currentIndexNav].info.forEach(item => {
      if (item.time == e.detail.time) {
        this.setData({
          num: item.number
        })
      }
    });

  },

  //点击切换日期和时间
  activeNav(e) {
    this.setData({
      currentIndexNav: e.currentTarget.dataset.index
    })
    let info_len = this.data.arr[e.currentTarget.dataset.index].info.length;
    var a;
    var arr2 = [];
    for (a = 0; a < info_len; a++) {
      arr2.push(this.data.arr[e.currentTarget.dataset.index].info[a].time)
    }
    this.setData({
      List: arr2,
      // Index: [0]
    })
    this.setData({
      num: this.data.arr[this.data.currentIndexNav].info[0].number
    })

  },

  //提交
  push: function () {
    
    let arr = this.data.time.split('-');
    let today = new Date();
    let year = today.getFullYear();
    interview.postResultagain({
      date: year + '-' + this.data.arr[this.data.currentIndexNav].date,
      begin_time: arr[0],
      over_time: arr[1]
    }, (res) => {
      if (res.result == 0) {
        wx.showToast({
          title: '人数已满',
          icon: 'none',
          image: '../../../images/fail.png',
        });
      } else if (res.result == 1) {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 1500,
          },1500);
          this.onShow()
      }else if (res.result == 2) {
        wx.showModal({
          title: '提示',
          content: '与原面试时间相同',
          showCancel: false,
          cancelColor: '#000000',
          confirmText: '确定',
          confirmColor: '#3CC51F',
        });
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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