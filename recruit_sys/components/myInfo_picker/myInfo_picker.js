// components/myInfo/myInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isMust: {
      type: Boolean,
      value: true
    },
    nature_name: {
      type: String,
      value: ''
    },
    nature: {
      type: String,
      value: '属性'
    },
    value: {
      type: String,
      value: '信息'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})


// that.setData({
//   hiddenmodalput: true,
//   value: that.data.inputValue ? that.data.inputValue : that.data.value
// })
// let myEventDetail = {
//   nature: str,
//   value: that.data.value
// }; // detail对象，提供给事件监听函数
// let myEventOption = {}; // 触发事件的选项
// that.triggerEvent('change', myEventDetail, myEventOption);