const util = require('../../../utils/util')
import {
  HTTP
} from '../../../utils/http.js'
var http = new HTTP()
var saveExprs = function (expr) {
  //获取存储数据的数组
  var exprs = wx.getStorageSync("link") || []
  //向数组中添加新的元素
  exprs.unshift(expr)
  //将添加的元素存储到本地
  wx.setStorageSync("link", exprs)
}



Page({
  data: {
    imgArr: [],
    chooseViewShow: true,
  },
  onLoad: function () { 
    wx.removeStorage({
      key: 'card',
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
  },
  /** 选择图片 */
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 9 - that.data.imgArr.length, //最多选择4张图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        if (res.tempFilePaths.count == 0) {
          return;
        }
        //上传图片
        var imgArrNow = that.data.imgArr;
        imgArrNow = imgArrNow.concat(res.tempFilePaths);
        that.setData({
          imgArr: imgArrNow
        })
        that.chooseViewShow();
        wx.setStorageSync('card', imgArrNow)
      }
    })
  },

  litao(imageArr, token) {
    let flag = 0;
    let arr = [];
    return new Promise((resolve, reject) => {
      for (var i = 0; i < imageArr.length; i++) {
        wx.uploadFile({
          url: 'https://test1.yundingshuyuan.cn/upload_application',
          filePath: imageArr[i],
          name: 'img',
          header: {
            token: token
          },
          success: function (res) {
            var jsonObj = JSON.parse(res.data)
            var link = jsonObj.link;
            arr.push(link)
            saveExprs(jsonObj.link)
            if (jsonObj.code == 1) {
              flag++;
              wx.showToast({
                title: '上传成功',
                icon: 'success'
              })
            }
            if (flag === imageArr.length) {
              resolve(arr)
            }

          }
        })
      }
    })
  },

  /**上传图片**/
  uploadimg: util.throttle(function (e) {
    var that = this
    var card = wx.getStorageSync('card')
    var token = wx.getStorageSync('token')

    this.litao(card, token)

      .then(res => {
        http.request({
          url: '/application_data',
          method: "POST",
          data: {
            link_data: res
          }
        })
        console.log(res)

      })

    if (that.data.imgArr != '') {
      wx.redirectTo({
        url: '/pages/registrationSystem/again/again',
      })
    } else {
      wx.showToast({
        title: '请先上传图片',
        icon: 'none',
        duration: 1500,
        mask: false,
      });
    }
    console.log(that.data.imgArr)


  }, 3000),


  /** 删除图片 */
  deleteImv: function (e) {
    var imgArr = this.data.imgArr;
    var itemIndex = e.currentTarget.dataset.id;
    imgArr.splice(itemIndex, 1);
    wx.removeStorage({
      key: 'card',
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
    wx.setStorage({
      key: 'card',
      data: imgArr,
    })
    this.setData({
      imgArr: imgArr
    })
    //判断是否隐藏选择图片
    this.chooseViewShow();
  },


  /** 是否隐藏图片选择 */
  chooseViewShow: function () {
    if (this.data.imgArr.length >= 9) {
      this.setData({
        chooseViewShow: false
      })
    } else {
      this.setData({
        chooseViewShow: true
      })
    }
  },

  /** 显示图片 */
  showImage: function (e) {
    var imgArr = this.data.imgArr;
    var itemIndex = e.currentTarget.dataset.id;

    wx.previewImage({
      current: imgArr[itemIndex], // 当前显示图片的http链接
      urls: imgArr // 需要预览的图片http链接列表
    })
  },

  /**跳转到again页面 **/
  /* goToAgain: function (param) {
     wx.redirectTo({
       url: '/pages/registrationSystem/again/again',
     })
   } */
})