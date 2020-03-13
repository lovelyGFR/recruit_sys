import {
  RushModel
} from '../../../model/rush.js'
let rush = new RushModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    aData : "云顶书院19届招生宣讲会",
    time : '',
    cData : "欢迎你前往太原理工大学大数据学院九层云顶书院数港基地参加新生宣讲会。",
    dData : "来到这里，你将充分了解到云顶书院，云顶书院的性质，云顶书院的理念，云顶书院的使命愿景，云顶书院与众不同的体制，云顶的坚守和执着，在宣讲会上，学长学姐会告诉你他们在这里的收获的感动和力量，以亲身经历，去让你了解这么一个地方，这么一处与众不同的风景，以及一群敢于极目星辰大海却又“脚踏黄土，头顶清风，不道苦楚，莫问征途”的人。在这里，有和蔼可亲的学长学姐带你参观数港，答疑解惑，你将看得到云顶美景，感受得到云顶氛围，见识得到云顶的胸怀，愿来到这里的你，能够解其所疑，得其所得，星河滚烫，你就是人间理想，云顶书院，期待你的到来。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        //获取宣讲会时间场次
        rush.getTime((res) => {

          for (var x = 0; x < res.ticket.length; x++) {
            if (res.ticket[x].brief_state == 0 || res.ticket[x].brief_state == 1) {
              this.setData({
                time: res.ticket[x].brief_time + '  ' + res.ticket[x].brief_session + ' ' + res.ticket[x].brief_speecher,
                brief_session: res.ticket[x].brief_session,
                brief_time: res.ticket[x].brief_time,
                timestamp: Number(res.ticket[x].brief_rushTime)
              });
    
              rush.getcount({
                brief_session: this.data.brief_session,
              }, (res) => {
                this.setData({
                  count: res.count
                })
              })
              break;
            }
          }
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
  toindex : function(){
    wx.redirectTo({
      url: '../rush_index/rush_index'
    })
  }, 
  pic : function(){
    wx.previewImage({
      current: 'https://yun-recruit-new.oss-cn-beijing.aliyuncs.com/images/pic.png', 
      urls: ["https://yun-recruit-new.oss-cn-beijing.aliyuncs.com/images/pic.png"] 
    })
  }
})