// pages/myInfo.js

import {
  MyInfoModel,
  Upload
} from '../../../model/myInfo.js';

const myInfo = new MyInfoModel();
const upload = new Upload();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [
      ['数学学院', '机械工程学院', '软件学院', '材料科学与工程学院', '电气与动力工程学院', '信息与计算机学院', '大数据学院', '土木工程学院', '水利科学与工程学院', '化学化工学院', '矿业工程学院', '轻纺工程学院', '艺术学院', '环境科学与工程学院', '物理与光电工程学院', '生物医学工程学院', '外国语学院', '政法学院', '马克思主义学院', '经济管理学院', '体育学院', '国际教育交流学院', '安全与应急管理工程学院', '建筑学院','其他学院'],
      ['统计学', '数学与应用数学', '信息与计算科学']
    ],
    multiIndex: [0, 0],
    userInfo: {},
    flag: true,
    array: ['男', '女'],
    index1: 0,
    index2: 0,
    index3: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
  },

  bindMultiPickerChange: function (e) {
    console.log(this.data.multiArray[0][e.detail.value[0]]);
    console.log(this.data.multiArray[1][e.detail.value[1]]);
    this.setData({
      "userInfo.user_college": this.data.multiArray[0][e.detail.value[0]],
      "userInfo.user_major": this.data.multiArray[1][e.detail.value[1]]
    })
    console.log(this.data.userInfo)
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['统计学', '数学与应用数学', '信息与计算科学'];
            break;
          case 1:
            data.multiArray[1] = ['机械设计制造及其自动化', '车辆工程', '机械电子工程','机械电子工程(飞机机电系统)'];
            break;
          case 2:
            data.multiArray[1] = ['软件工程'];
            break;
          case 3:
            data.multiArray[1] = ['材料成型及控制工程', '金属材料工程', '材料科学与工程', '材料科学与工程（先进航空材料）','材料化学和冶金工程'];
            break;
          case 4:
            data.multiArray[1] = ['电气工程及其自动化','电气工程及其自动化（试验班）', '能源与动力工程', '自动化', '交通设备与控制工程'];
            break;
          case 5:
            data.multiArray[1] = ['电子信息工程', '通信工程', '测控技术与仪器', '电子科学与技术程', '计算机科学与技术', '物联网工程', '信息安全'];
            break;
          case 6:
            data.multiArray[1] = ['数据科学与大数据技术'];
            break;
          case 7:
            data.multiArray[1] = ['土木工程', '土木工程（试验班）','道路桥梁与渡河工程'];
            break;
          case 8:
            data.multiArray[1] = ['水利水电工程', '农业水利工程', '水文与水资源工程'];
            break;
          case 9:
            data.multiArray[1] = ['化学工程与工艺','化学工程与工艺（试验班） ','应用化学', '过程装备与控制工程', '精细化工'];
            break;
          case 10:
            data.multiArray[1] = ['采矿工程','采矿工程（试验班） ', '矿物加工工程', '安全工程', '资源勘查工程', '地质工程', '勘查技术与工程', '测绘工程', '地理信息科学', '城市地下空间工程'];
            break;
          case 11:
            data.multiArray[1] = ['纺织工程', '服装设计与工程', '服装与服饰设计'];
            break;
          case 12:
            data.multiArray[1] = ['绘画', '工艺美术', '环境设计', '视觉传达设计', '数字媒体艺术', '文物保护技术'];
            break;
          case 13:
            data.multiArray[1] = ['环境工程', '给排水科学与工程', '建筑环境与能源应用工程'];
            break;
          case 14:
            data.multiArray[1] = ['光电信息科学与工程', '应用物理学', '光源与照明'];
            break;
          case 15:
            data.multiArray[1] = ['生物医学工程', '制药工程', '生物工程'];
            break;
          case 16:
            data.multiArray[1] = ['英语专业（英语方向）', '英语专业（英日双语方向）', '英语专业（英俄双语方向）'];
            break;
          case 17:
            data.multiArray[1] = ['法学', '行政管理'];
            break;
          case 18:
            data.multiArray[1] = ['思想政治教育'];
            break;
          case 19:
            data.multiArray[1] = ['工程管理', '市场营销', '物流管理','物流管理（航空物流）', '会计学', '国际经济与贸易', '电子商务', '能源经济'];
            break;
          case 20:
            data.multiArray[1] = ['体育教育'];
            break;
          case 21:
            data.multiArray[1] = ['汉语国际教育'];
            break;
          case 22:
            data.multiArray[1] = ['安全科学与工程', '应急技术与管理'];
            break;
          case 23:
            data.multiArray[1] = ['工业设计', '建筑学', '城乡规划'];
            break;
          case 24:
            data.multiArray[1] = ['其他专业'];
            break;

        }
        data.multiIndex[1] = 0;
        break;
    }
    console.log(this.data.multiArray[0][data.multiIndex[0]]);
    console.log(this.data.multiArray[1][data.multiIndex[1]]);
    this.setData({
      multiArray: data.multiArray,
      multiIndex: data.multiIndex,
      "userInfo.user_college": this.data.multiArray[0][data.multiIndex[0]],
      "userInfo.user_major": this.data.multiArray[1][data.multiIndex[1]]
    });
    console.log(this.data.userInfo)
  },
  // // 上传图片
  // uploadImg() {
  //   let that = this;
  //   upload.uploadAvatar({}, (res) => {
  //     that.setData({
  //       'userInfo.user_avatar': wx.getStorageSync('avatar')
  //     })
  //   })
  // },
  // 获取组件中的值
  getData(e) {
    this.data.userInfo[e.detail.nature] = e.detail.value
    // console.log("让人费解的个人信息",this.data.userInfo);
  },
  submit() {
    let that = this
    if (this.data.flag) {
      this.setData({
        flag: false
      })
    }
    let data = this.data.userInfo;
    myInfo.postMyInfo(data, (res) => {
      wx.setStorageSync('userInfo', data)
      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1000
      })
      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        })
      }, 300)
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

  // 性别picker
  bindPickerChange: function (e) {

    var that = this;
    this.setData({
      index1: e.detail.value,
      "userInfo.user_sex": that.data.array[e.detail.value]
    })
  },

  // 日期picker
  bindDateChange(e) {
    console.log(e.detail.value)
    this.setData({
      "userInfo.user_birthday": e.detail.value
    })
    console.log(this.data.userInfo)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})