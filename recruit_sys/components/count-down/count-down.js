// components/count-down/count-down.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    initDuration: {
      type: Number,
      value: 0,
      observer: function (newVal) {
        if (this.timer) {
          this.clearTimer()
        }

        this.init()      // 重置num和flag
        this.runCountDown(this.parseDate(newVal))
      }
    },
    endContent: {
      type: String,
      value: '00:00:00'
    }
  },

  attached: function () {
    if (this.properties.initDuration === 0) {
      this.setEndContent(this.properties.endContent)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    countDownTime: ''
  },

  timer: null,     // 存储setInterval的ID
  flag: false,     // 倒计时是否结束的标志
  num: 0,          // 过去的秒数

  /**
   * 组件的方法列表
   */
  methods: {

    countDown: function (duration) {
      if (duration <= 0) {
        this.setFlag(true)
        return '00:00:00'
      }

      let seconds = this.format(duration % 60)
      let minutes = Math.floor(duration / 60)
      minutes = minutes >= 60 ? this.format(minutes % 60) : this.format(minutes)
      let hours = this.format(Math.floor(duration / 3600))

      return `${hours}:${minutes}:${seconds}`
    },

    format: function (time) {
      return time >= 10 ? time : `0${time}`
    },

    runCountDown: function (initDuration) {
      this.setCountDownTime(this.countDown(initDuration))

      this.timer = setInterval(() => {
        if (this.flag === true) {
          clearInterval(this.timer)
          this.setEndContent(this.properties.endContent)

          return undefined
        }

        this.addNum()
        this.setCountDownTime(this.countDown(initDuration - this.num))
      }, 1000)
    },

    setFlag: function (flag) {
      this.flag = flag
    },

    setCountDownTime: function (countDownTime) {
      this.setData({ countDownTime })
    },

    addNum: function () {
      this.num += 1
    },
    // 初始化函数
    init: function () {
      this.flag = false
      this.num = 0
    },

    setEndContent: function (countDownTime) {
      if (countDownTime) {
        this.setData({ countDownTime })
      }
    },
    // 清空计时器
    clearTimer: function () {
      clearInterval(this.timer)
      this.timer = null
    },

    parseDate: function (date) {
      if (typeof date === 'string') {
        return Math.floor((+new Date(date) / 1000)) - Math.floor((+new Date() / 1000))
      }

      return date
    }
  }
})
