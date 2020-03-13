// components/myInfo/myInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    maxlength: {
      type: Number,
      value: -1
    },
    isMust: {
      type: Boolean,
      value: true
    },
    flag: {
      type: Boolean,
      value: false
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
    // 是否隐藏
    hiddenmodalput: {
      type: Boolean,
      value: true
    },
    inputValue: {
      type: String,
      value: ''
    },
    tishi: {
      type: String,
      value: ''
    }

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
    changeValue(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },

    modalinput: function (e) {
      var that = this;
      that.setData({
        hiddenmodalput: !that.data.hiddenmodalput,
        value_nature: e.currentTarget.dataset.nature,
        inputValue: that.data.value
      })
    },
    //取消按钮
    cancel: function () {
      var that = this;
      that.setData({
        hiddenmodalput: true,
        value: this.data.value,
        inputValue: this.data.value
      });
    },
    //确认
    confirm: function (e) {
      var that = this;
      let str = that.data.value_nature;
      if (str !== 'user_email') {
        if (that.data.inputValue.length === 0) {
          wx.showToast({
            title: '该选项不能为空',
            icon: "none",
            duration: 2000
          })
        } else {
          if (str === "user_studentId") {
            if (that.data.inputValue.length === 10 && that.data.inputValue.slice(0, 6) === '201900' && !!Number(that.data.inputValue)) {
              // 成功后执行
              that.setData({
                hiddenmodalput: true,
                value: that.data.inputValue ? that.data.inputValue : that.data.value
              })
              let myEventDetail = {
                nature: str,
                value: that.data.value
              }; // detail对象，提供给事件监听函数
              let myEventOption = {}; // 触发事件的选项
              that.triggerEvent('change', myEventDetail, myEventOption);
            } else {
              wx.showToast({
                title: '学号格式201900xxxx',
                icon: "none",
                duration: 2000
              })
            }
          } else if (str === "user_phoneNumber") {
            if (that.isPoneAvailable(that.data.inputValue)) {
              // 成功后执行
              that.setData({
                hiddenmodalput: true,
                value: that.data.inputValue ? that.data.inputValue : that.data.value
              })
              let myEventDetail = {
                nature: str,
                value: that.data.value
              }; // detail对象，提供给事件监听函数
              let myEventOption = {}; // 触发事件的选项
              that.triggerEvent('change', myEventDetail, myEventOption);
            } else {
              wx.showToast({
                title: '手机号格式不正确',
                icon: 'none',
                duration: 2000
              })
            }
          } else if (str === 'user_class') {
            if (that.isClass(that.data.inputValue)) {
              // 成功后执行9
              that.setData({
                hiddenmodalput: true,
                value: that.data.inputValue
              })
              let myEventDetail = {
                nature: str,
                value: that.data.value
              }; // detail对象，提供给事件监听函数
              let myEventOption = {}; // 触发事件的选项
              that.triggerEvent('change', myEventDetail, myEventOption);
            } else {
              wx.showToast({
                title: '班级格式错误',
                icon: "none",
                duration: 2000
              })
            }
          } 
          else if (str === 'user_name') { 
            if (that.isname(that.data.inputValue)) {
              that.setData({
                hiddenmodalput: true,
                value: that.data.inputValue
              })
              let myEventDetail = {
                nature: str,
                value: that.data.inputValue
              }; // detail对象，提供给事件监听函数
              let myEventOption = {}; // 触发事件的选项
              that.triggerEvent('change', myEventDetail, myEventOption);
            } else {
              wx.showToast({
                title: '请输入正确的姓名',
                icon: 'none',
                duration: 2000
              })
            }
          }
          else if (str === 'user_dorm') {
            if (that.isdorm(that.data.inputValue)) {
              that.setData({
                hiddenmodalput: true,
                value: that.data.inputValue
              })
              let myEventDetail = {
                nature: str,
                value: that.data.inputValue
              }; // detail对象，提供给事件监听函数
              let myEventOption = {}; // 触发事件的选项
              that.triggerEvent('change', myEventDetail, myEventOption);
            } else {
              wx.showToast({
                title: '请输入正确的宿舍号',
                icon: 'none',
                duration: 2000
              })
            }
          } else {
            that.setData({
              hiddenmodalput: true,
              value: that.data.inputValue ? that.data.inputValue : that.data.value
            })
            let myEventDetail = {
              nature: str,
              value: that.data.value
            }; // detail对象，提供给事件监听函数
            let myEventOption = {}; // 触发事件的选项
            that.triggerEvent('change', myEventDetail, myEventOption);
          }
        }
      } else if (str === 'user_email') {
          that.setData({
            hiddenmodalput: true,
            value: that.data.inputValue
          })
          let myEventDetail = {
            nature: str,
            value: that.data.inputValue
          }; // detail对象，提供给事件监听函数
          let myEventOption = {}; // 触发事件的选项
          that.triggerEvent('change', myEventDetail, myEventOption);
      } 
      //

      //

    },
    isname : function(name){
      let reg = /[\u4e00-\u9fa5]/;
      if (!reg.test(name)) {
        return false;
      } else {
        return true;
      }
    },
    isdorm : function (dorm){
      let reg = /^[1,2]{0,1}[0-9]号楼[0-9]{3,4}$/;
      if (!reg.test(dorm)) {
        return false;
      } else {
        return true;
      }
    },
    isClass: function (user_class) {
      let reg = /^[a-zA-Z]{0,1}[0-9]{4}$/;
      if (!reg.test(user_class)) {
        return false;
      } else {
        return true;
      }
    },
    isPoneAvailable: function (pone) {
      var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!myreg.test(pone)) {
        return false;
      } else {
        return true;
      }
    },
  }
})