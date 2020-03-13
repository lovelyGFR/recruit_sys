import {
  RushModel
} from '../../../model/rush.js'
let rush = new RushModel();

const util = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    aData: "云顶书院19届招生宣讲会",
    // bData: "07.01-07.03 共三场 100人/场",
    bData: null,
    cData: null,


    //宣讲会时间，场次
    time: '',
    brief_session: null,
    brief_time: null,
    brief_state: null,
    brief_num: null,


    //学院
    collegetype: "学院",
    List: [
      '数学学院', '机械工程学院', '软件学院', '材料科学与工程学院', '电气与动力工程学院', '信息与计算机学院', '大数据学院', '土木工程学院', '水利科学与工程学院', '化学化工学院', '矿业工程学院', '轻纺工程学院', '艺术学院', '环境科学与工程学院', '物理与光电工程学院', '生物医学工程学院', '外国语学院', '政法学院', '马克思主义学院', '经济管理学院', '体育学院', '国际教育交流学院', '安全与应急管理工程学院', '建筑学院', '其他学院'
    ],
    Index: 0,


    //填写信息
    college: "数学学院",

    nametype: "姓名",
    name: '',

    numtype: "学号",
    num: '',

    //抢票返回的code
    code: null,

    windowHeight: 654,
    maxtime: "",
    isHiddenLoading: true,
    isHiddenToast: true,
    dataList: {},
    countDownDay: "00",
    countDownHour: "00",
    countDownMinute: "00",
    countDownSecond: "00",

    timestamp: null,

    status: 3,

    canRush: false,

    count: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //宣讲会倒计时
    // this.setData({
    //   windowHeight: wx.getStorageSync('windowHeight')
    // });

    //获取宣讲会时间场次
    rush.getTime((res) => {
      this.setData({
        bData: res.info.date,
        cData: res.info.total
      })

      for (var x = 0; x < res.ticket.length; x++) {
        if (res.ticket[x].brief_state == 0 || res.ticket[x].brief_state == 1) {
          this.setData({
            time: res.ticket[x].brief_time + '  ' + res.ticket[x].brief_session,
            brief_session: res.ticket[x].brief_session,
            brief_time: res.ticket[x].brief_time,
            timestamp: Number(res.ticket[x].brief_rushTime),
            brief_state: res.ticket[x].brief_state,
            brief_num: res.ticket[x].brief_peopleNumber
          });

          rush.getcount({
            brief_session: this.data.brief_session,
          }, (res) => {
            this.setData({
              count: res.count
            })
          })

          this.endtime();
          break;
        }

      }
      if (this.data.brief_state == 1) {
        //判断是否抢到票
        rush.gettics({
          brief_session: this.data.brief_session
        }, (res) => {
          if (res.code == 1) {
            this.setData({
              status: 1
            })
          } else {
            this.setData({
              status: 0
            })
          }
        })

      }else{
        rush.gettics({
          brief_session: this.data.brief_session
        }, (res) => {
          if (res.code == 1) {
            this.setData({
              status: 1
            })
          }
        })
      }

    });




  },

  //获取到用户填写的信息
  get_college: function (e) {
    this.setData({
      college: e.detail.college
    })
  },
  get_name: function (e) {

    // var regRule = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g; 
    // if(param.match(regRule)) { 
    // param = param.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, ""); 
    // wx.showToast({
    //   title: '不支持表情',
    //   icon: 'none',
    //   image: '',
    //   duration: 1500,
    //   mask: false,
    // });
    // }


    let param = e.detail.text;
    let reg = /[\u4e00-\u9fa5]/;
    if (reg.test(param) && param.length <= 5 && param.length > 0) {
      this.setData({
        name: e.detail.text
      })
    } else {
      wx.showToast({
        title: '姓名格式有误',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
      });
    }

  },
  get_num: function (e) {

    let reg = /^\d{10}$/;
    let pattern = /201900..../;
    let number = e.detail.text;
    if (reg.test(number) && pattern.test(number)) {
      this.setData({
        num: e.detail.text
      })
    }
  },

  // 给服务器发送信息  加载抢票  抢票中
  show_status: util.throttle(function () {
    if (this.data.canRush) {
      if (this.data.name === '') {
        wx.showToast({
          title: '请输入姓名',
          icon: 'none'
        });
      } else if (this.data.college === '') {
        wx.showToast({
          title: '请选择学院',
          icon: 'none',
        });
      } else if (this.data.num == '') {
        wx.showToast({
          title: '学号输入错误',
          icon: 'none',
        });
      } else {
        wx.showLoading({
          title: '服务器努力中',
        })
        rush.postInfo({
          brief_session: this.data.brief_session,
          brief_time: this.data.brief_time,
          user_college: this.data.college,
          user_name: this.data.name,
          user_studentId: this.data.num,
          count: this.data.count
        }, (res) => {
          this.setData({
            code: res.code
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 2000)
          if (this.data.code == 1) {
            wx.showToast({
              title: '抢票成功',
              mask: true,
              icon: 'success',
            })
            this.setData({
              status: this.data.code
            })
          } else {
            wx.showToast({
              title: '票被抢完了',
              mask: true,
              image: '../../../images/fail.png',
              icon: 'success'
            })
            this.setData({
              status: this.data.code
            })
          }
        })
      }
    } else {
      wx.showToast({
        title: '抢票未开始',
        icon: 'none',
      });
    }
  }, 3000),

  endtime() {
    
    var totalSecond = this.data.timestamp - Date.parse(new Date()) / 1000;
    // console.log(this.data.timestamp)

    var interval = setInterval(function () {
      // 秒数
      var second = totalSecond;
      // 天数位
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();

      if (dayStr.length == 1) dayStr = '0' + dayStr;
      // 小时位
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;

      // 分钟位
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;

      // 秒位
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;

      this.setData({
        countDownDay: dayStr,
        countDownHour: hrStr,
        countDownMinute: minStr,
        countDownSecond: secStr,
      });
      totalSecond--;
      if (totalSecond < 0) {
        this.setData({
          canRush: true
        })
        clearInterval(interval);
        this.setData({
          countDownDay: '00',
          countDownHour: '00',
          countDownMinute: '00',
          countDownSecond: '00',
        });
      }
    }.bind(this), 1000);
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

  // 路由
  details: util.throttle(function () {
    wx.navigateTo({
      url: '../rush_details/rush_details'
    })
  }, 2000),
  view_tickets: util.throttle(function () {
    wx.navigateTo({
      url: '../rush_ticket/rush_ticket'
    })
  }, 2000)
})

