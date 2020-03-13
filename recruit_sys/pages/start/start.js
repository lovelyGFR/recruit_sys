//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animationData: '',
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      showBack: 1,
      showHome: 1,
      title: '首页', //导航栏 中间的标题
    },
    height: app.globalData.height * 2 + 20,
  },
  containerTap: function (res) {
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.setData({
      rippleStyle: ''
    });
    this.setData({
      rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.5s linear;animation:ripple 0.5s linear;'
    });
  },

  /*返回首页*/ 
  return: function(){
    wx.redirectTo({
      url: '/index/index',
    })
  },
  
  onLoad: function () {
    var that = this;

    // 旋转动画

    var animation = wx.createAnimation({

      duration: 1000, //动画的持续时间

      timingFunction: "linear", //  动画的效果设置为平均

      delay: 0 //动画延迟时间无

    })

    that.animation = animation

    animation.scale(1, 1).step()

    animation.scale(0.8, 0.8).step()

    

    //延时动画

    setTimeout(function () {

      that.setData({

        animationData: animation.export()

      })

    }, 600)
  },

})
