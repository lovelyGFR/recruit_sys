import {
  config
} from "../config.js";


class UPLOAD {
  upload(params) {
    if (!params.method) {
      params.method = "GET";
      params.header = {
        'content-type': 'application/json',
        'id': '1',
        'token': wx.getStorageSync('token')
      }
    } else {
      params.header = {
        "Content-Type": "application/x-www-form-urlencoded",
        'id': '1',
        'token': wx.getStorageSync('token')
      }
    }
    wx.chooseImage({
      success: (res) => {
        const tempFilePaths = res.tempFilePaths
        wx.setStorageSync('avatar', res.tempFilePaths[0])
        wx.uploadFile({
          url: config.api_base_url + params.url, //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          header: params.header,
          name: params.name,
          formData: params.data,
          success: (res) => {
            params.success(res);
          }
        })
      }
    })
  }
}





export {
  UPLOAD
};