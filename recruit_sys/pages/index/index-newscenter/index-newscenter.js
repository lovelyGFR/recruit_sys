import {
  indexModel
} from '../../../model/index.js'
let indexMol = new indexModel()

Page({

  data: {
    //新闻（第四部分）
    page: 0,
    newslist: [],
    showtext: ""
  },

  //-----------执行加载函数
  loadData: function () {
    // if (wx.getStorageSync("authorization")) {
      var that = this
      that.setData({
        flag: false
      })
      let data = {};
      data.page = this.data.page;
      data.limit = 3;
      indexMol.getnews(data, (res) => {

        if (res.code === '1') {

          var len = res.result.length
          let page = that.data.page + 1;
          let newslist = that.data.newslist.concat(res.result)
          that.setData({
            page: page,
            newslist: newslist,
            flag: true,
            showtext: "Click"
          })
        } else if (res.code === '0') {
          that.setData({
            showtext: "END",
          })
        }
      })
    // }
  },

  loadMore: function (event) {

    if (this.data.flag) {

      this.loadData();
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.loadData();
  },

  // 跳转到新闻详情页面
  go_detail(e) {
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
  },
  //用户授权
  userAuthorized() {
    if (wx.getStorageSync("authorization")) {} else {
      wx.reLaunch({
        url: '../startup/startup'
      })
    }
  },
})