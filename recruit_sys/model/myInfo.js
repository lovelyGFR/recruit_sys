import {
  HTTP
} from "../utils/http.js";
import {
  UPLOAD
} from "../utils/upload.js";
const http = new HTTP();
const upload = new UPLOAD();

class MyInfoModel extends HTTP {

  // 获取自己的信息
  getMyInfo(sCallback) {
    http.request({
      url: '/User_info',
      success: (res) => {
        sCallback(res);
      }
    })
  }
  // 修改个人数据
  postMyInfo(data, sCallback) {
    http.request({
      url: '/info',
      data: data,
      method: 'POST',
      success: (res) => {
        sCallback(res);
      }
    })
  }
  //获取个人通知
  getnotice(sCallback) {
    http.request({
      url: '/notice',
      success: (res) => {
        sCallback(res)
      }
    })
  }
  // 删除留言
  delnotice(data, sCallback) {
    http.request({
      url: '/del_words',
      data: data,
      success: (res) => {
        sCallback(res)
      }
    })
  }
  //获取个人二维码
  getqr(sCallback) {
    http.request({
      url: '/people_qr',
      success: (res) => {
        console.log("二维码", res)
        sCallback(res)
      }
    })
  }

  //发送改变状态消息
  postnotice(data, sCallback) {
    http.request({
      url: '/change_notice',
      data: data,
      method: 'POST',
      success: (res) => {
        sCallback(res)
      }
    })
  }

  //发送意见
  postwords(data, sCallback) {
    http.request({
      url: '/words',
      data: data,
      method: 'POST',
      success: (res) => {
        sCallback(res)
      }
    })
  }

  //接收意见
  getwords(sCallback) {
    http.request({
      url: '/words_person',
      success: (res) => {
        sCallback(res)
      }
    })
  }


}

class Upload extends UPLOAD {
  // 上传单张图片
  uploadAvatar(data, sCallback) {
    upload.upload({
      url: '/upload',
      formData: data,
      name: 'img',
      method: 'POST',
      success: (res) => {
        sCallback(res)
      }
    })
  }

}






export {
  MyInfoModel,
  Upload
}