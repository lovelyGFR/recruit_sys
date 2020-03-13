// components/select/select.js
Component({
  /**
   * 组件的属性列表
   */
    properties: {
      multiArray : Array,
      multiIndex : Number
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
      bindPickerChange(e){
        this.setData({
          multiIndex : e.detail.value
        })
        let multiArray = this.properties.multiArray;
        let multiIndex = this.properties.multiIndex;
        let time = this.properties.multiArray[multiIndex];
        this.triggerEvent('time',{
          time : time,
          Index: multiIndex
        },{})
      },
     
    }
})