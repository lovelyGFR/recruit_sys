// components/scanf/scanf.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    textone : String,
    text : null
  },

  /**
   * 组件的初始数据
   */
  data: {
    status : false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getText(e) {
      this.triggerEvent('text',{
        text : e.detail.value
      },{})
    },

    getfocus(e){
      this.setData({
        status : true
      })
    }
    
  }
})
