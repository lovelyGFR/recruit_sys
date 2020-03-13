// components/input/input.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    orig: {
      type: String,
      value: '嘤嘤嘤'
    },
    more: {
      type: String,
      value: '../../images/more.png'
    },
    key: {
      type: String,
      value: 'key'
    },
    value: {
      type: String,
      value: 'value'
    },
    // 输入的值
    inputValue: {
      type: String,
      value: 'aa'
    },
    // 是否隐藏
    hiddenmodalput: {
      type: Boolean,
      value: true
    },
    must: {
      type: Boolean,

    },
    flag: {
      type: Boolean,
      value: false
    },
    name: {
      type: String,
      value: "name"
    }
  },

  /**F
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {

    //点击按钮弹出指定的hiddenmodalput弹出框
    modalinput: function (e) {
      var that = this;
      that.setData({
        hiddenmodalput: !that.data.hiddenmodalput,
      })
    },
    // 实时得到input中的value值
    getValue(e) {
      var that = this;
      that.setData({
        inputValue: e.detail.value,
        flag: true,
      })
    },
    //取消按钮
    cancel: function () {
      var that = this;
      that.setData({
        hiddenmodalput: true
      });
    },
    //确认
    confirm: function (e) {
      var that = this;
      if (that.data.value === '' && that.data.must) {
        console.log('必填  空');
        wx: wx.showToast({
          image: '/images/avatar.jpg',
          title: '该选项不能为空'
        })
      } else if (!that.data.must && that.data.value === '') {
        that.setData({
          hiddenmodalput: true,
          value: that.data.inputValue
        })
      } else {
        if (that.data.flag) {
          that.setData({
            hiddenmodalput: true,
            value: that.data.inputValue,
            flag: false
          })
        } else {
          that.setData({
            hiddenmodalput: true,
          })
        }
      }
    },
  }
})