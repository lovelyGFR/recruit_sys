import {
  HTTP
} from '../utils/http.js'
let http = new HTTP();

class indexModel extends HTTP {
  getnews(data, sCallback) {
    console.log('请求新闻接口成功')
    http.request({
      url: '/news',
      data: data,
      success: (res) => {
        sCallback(res)
      }
    })
  }

  ifticket(sCallback, reCode) {
    http.request({
      url: '/If_briefing',
      success: (res) => {
        sCallback(res)
        // if (res.code == '1') {
        //   sCallback(res)
        // }
        // if (res.code == '-1') {
        //   if (wx.getStorageSync('recode'))
        //     console.log('重新登录')
        //   wx.setStorageSync('recode', false)
        //   setTimeout(() => {
        //     wx.setStorageSync('recode', true)
        //   }, 2000)
        //   reCode()
        // }
      }
    })
  }

  ifinterview(sCallback) {
    http.request({
      url: '/If_interview',
      success: (res) => {
        sCallback(res)
      }
    })
  }

  ifsignup(sCallback) {

    http.request({
      url: '/if_user',
      success: (res) => {
        console.log('获取报名接口成功')
        sCallback(res)
      }
    })
  }

  ifstartup(data, sCallback) {
    http.request({
      url: '/login',
      data: data,
      success: (res) => {
        sCallback(res)
      }
    })
  }

}






export {
  indexModel
}