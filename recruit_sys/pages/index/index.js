  import {
    indexModel,
  } from '../../model/index.js'
  let indexMol = new indexModel()

  import {
    MyInfoModel,
  } from '../../model/myInfo.js';
  const myInfo = new MyInfoModel();

  const util = require('../../utils/util')
  Page({

    /**
     * 页面的初始数据
     */
    data: {

      dialogShow: false,
      buttons: [{
        text: '取消'
      }, {
        text: '确定'
      }],
      // 轮播图（第一部分）


      imgUrls: [{
          url: 'https://yundingshuyuan.com/static/images/main.jpg',
        }, {
          url: 'https://yun-recruit-new.oss-cn-beijing.aliyuncs.com/images/rush.jpg',
        },
        {
          url: 'https://yun-recruit-new.oss-cn-beijing.aliyuncs.com/images/intro.png'
        },
        {
          url: 'https://yun-recruit-new.oss-cn-beijing.aliyuncs.com/images/yundingnews.png',
        },
        {
          url: 'https://yun-recruit-new.oss-cn-beijing.aliyuncs.com/images/meetyut.jpg',
        },
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular: true,

      //功能块（第二部分）
      rush: "/images/rush.png",
      signUp: "/images/signUp.png",
      navigation: "/images/navigation.png",
      interview: "/images/interview.png",


      //抢票状态
      rushstat: null,
      //报名状态
      signstat: null,
      //面试状态
      interstat: null,
      //最终面试结果
      result: null,



      //介绍（第三部分）

      introductionpart: "云顶书院（简称云顶）是以能力培养为导向的“五创+”梯级递进、多维赋能的生态育人平台。位于太原理工大学“数港”和“逸庐”双创基地，现有在校学员400余人，分别来自16个学院的26个专业。团队肇始于2015年7月由高航老师创建的“互联网+实验室”，2016年9月更名为“云顶团队”，2018年3月正式命名为“云顶书院”并启动“云顶拔尖学生培养......",

      //新闻（第四部分）
      flag: true, //防止请求发送多次 true 可以请求 false 没得数据
      list: [], //新闻数据
      page: 0, //页数
      showicon: true

    },
    //---------------页面数据加载完毕---------------------

    //------------------功能函数----------------------

    onPullDownRefresh: function () {
      wx.showNavigationBarLoading() //在标题栏中显示加载

      //模拟加载
      setTimeout(function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }, 1500);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let that = this;
      if (wx.getStorageSync('islogin')) {
        wx.login({
          success: res => {
            let e = wx.getStorageSync('wxInfo');
            let data = {};
            data.code = res.code;
            data.user_vxName = e.nickName;
            data.user_avatar = e.avatarUrl;
            data.user_sex = wx.getStorageSync('wxInfo').user_sex;
            if (res.code) {
              indexMol.ifstartup(data, (res) => {
                wx.setStorageSync('token', res.token)
                wx.setStorageSync('islogin', false)
                //获取抢票状态
                indexMol.ifticket((res) => {
                  this.setData({
                    rushstat: res.code
                  })
                })
                //获取报名状态
                indexMol.ifsignup((res) => {
                  this.setData({
                    signstat: res.code
                  })
                })
                //获取面试状态
                indexMol.ifinterview((res) => {
                  this.setData({
                    interstat: res.status,
                    result: res.result
                  })

                })
              })
            }
          }
        });
      }
      // 查看是否授权
      // this.userAuthorized();
      this.requestData();

      // let da = wx.getStorageSync('authorization')
      // if (!da) {
      //   this.setData({
      //     showlink: false
      //   })
      // }
    },


    onShow: function () {





      let info = wx.getStorageSync('authorization')
      if (info) {
        indexMol.ifticket((res) => {
          this.setData({
            rushstat: res.code
          })
        })
        //获取报名状态
        indexMol.ifsignup((res) => {
          this.setData({
            signstat: res.code
          })
        })
        //获取面试状态
        indexMol.ifinterview((res) => {
          this.setData({
            interstat: res.status,
            result: res.result
          })
        })
      }
    },


    tapDialogButton(e) {
      // console.log('dialog', e.detail.index)
      this.setData({
        dialogShow: false,
        showOneButtonDialog: false
      })
      if (e.detail.index == 1) {
        wx.reLaunch({
          url: '../mine/mine-mine/mine-mine',
        });
      }
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      if (this.data.flag) {
        this.requestData();
      }
    },

    swiper(e) {
      let that = this;
      let index = e.currentTarget.dataset.index;
      if (index == 0) {
        wx.navigateTo({
          url: '../index/index-direction/index-direction',
        })
      } else if (index == 1) {
        that.btnclick1();
      } else if (index == 2) {
        wx.navigateTo({
          url: '../index/index-intro/index-intro',
        })
      } else if (index == 3) {
        wx.navigateTo({
          url: '../index/index-newscenter/index-newscenter',
        })
      }
      else if (index == 4) {
        wx.navigateTo({
          url: '../start/start',
        })
      }
    },

    requestData() {

      setTimeout(() => {
        var that = this;
        that.setData({
          flag: false
        })
        let data = {};
        data.page = this.data.page;
        data.limit = 3;
        indexMol.getnews(data, (res) => {
          if (res.code == '1') {
            let page = that.data.page + 1;
            let list = that.data.list.concat(res.result)
            that.setData({
              page: page,
              list: list,
              flag: true,
              showicon: true
            })
          } else if (res.code == '0') {
            that.setData({
              flag: false,
              showicon: false
            })
          }
        })
        // 隐藏加载框
        // wx.hideLoading();
      }, 1000);


    },

    // 跳转到新闻详情页面
    go_detail: util.throttle(function (e) {
      let data = {};
      data.time = e.currentTarget.dataset.time
      data.title = e.currentTarget.dataset.news_title
      data.content = e.currentTarget.dataset.content
      data.author = e.currentTarget.dataset.news_author
      data.img = e.currentTarget.dataset.img
      wx.navigateTo({
        url: "/pages/index/index-newsdetails/index-newsdetails",
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', {
            data: data
          })
        }
      })
    }, 2000),

    //----------------功能函数完毕------------------------

    //--------------------------跳转部分------------------------------------
    //抢票跳转
    btnclick1: util.throttle(function () {
      let info = wx.getStorageSync('token')
      if (info) {
        let that = this;
        if (that.data.rushstat === '1') {
          wx.navigateTo({
            url: '../rush/rush_index/rush_index'
          })
        } else if (that.data.rushstat === '0') {
          wx.showToast({
            title: '无活动需要抢票',
            mask: true,
            image: '/images/star3.png',
            icon: 'none',
            duration: 1500
          })
        }
      } else {
        this.setData({
          dialogShow: true
        })
        // if()
      }

    }, 2000),
    //报名跳转
    btnclick2: util.throttle(function () {
      let info = wx.getStorageSync('token')
      if (info) {
        let that = this;
        switch (that.data.signstat) {
          case '0': {
            wx.showToast({
              title: '无活动需要报名',
              mask: false,
              image: '/images/star1.png',
              icon: 'none',
              duration: 1500
            })
            break;
          }
          case '1': {
            wx.navigateTo({
              url: '../registrationSystem/sign_up/sign_up'
            })
            break;
          }
          case '2': {
            wx.navigateTo({
              url: '../registrationSystem/apply/apply'
            })
            break;
          }
          case '3': {
            wx.navigateTo({
              url: '../registrationSystem/again/again'
            })
            break;
          }
        }
      } else {
        this.setData({
          dialogShow: true
        })
      }

    }, 2000),
    //面试跳转
    btnclick3: util.throttle(function () {
      let info = wx.getStorageSync('token')
      if (info) {
        let that = this;
        if (that.data.interstat == '0') {
          wx.showToast({
            title: '无活动需要面试',
            mask: true,
            image: '/images/star2.png',
            icon: 'none',
            duration: 1500
          })
        } else if (that.data.interstat == '1') {
          wx.showModal({
            title: '提示',
            content: '提交纸质版申请书后才能进入哦',
            showCancel: false,
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
          });
        } else if (that.data.interstat == "2") {
          wx.navigateTo({
            url: '../interview/interview_index/interview_index'
          })
        } else if (that.data.interstat == "3") {
          wx.navigateTo({
            url: '../interview/modify_interview_time/modify_interview_time'
          })
        } else if (that.data.interstat == "4") {
          wx.navigateTo({
            url: '../interview/interview_check_in/interview_check_in'
          })
        } else if (that.data.interstat == "5") {
          wx.navigateTo({
            url: '../interview/interview_ready/interview_ready'
          })
        } else if (that.data.interstat == "6") {
          wx.navigateTo({
            url: '../interview/interview_result_waiting/interview_result_waiting'
          })
        } else if (that.data.interstat == "7") {
          wx.navigateTo({
            url: '../interview/interview_result/interview_result'
          })
        } else if (that.data.interstat == "8") {
          let that = this;
          if (that.data.result == 3) {
            console.log('2113')
            wx.navigateTo({
              url: '../interview/interview_result_success/interview_result_success'
            })
          } else {
            wx.navigateTo({
              url: '../interview/interview_result_failed/interview_result_failed'
            })
          }

        }
      } else {
        this.setData({
          dialogShow: true
        })
      }


    }, 2000),
    //导航跳转
    btnclick4: util.throttle(function () {
      wx.navigateTo({
        url: '../start/start',
      })
    }, 2000),
    //------------------------------跳转部分------------------------------------


  })