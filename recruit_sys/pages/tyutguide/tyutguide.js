// pages/tyutguide/tyutguide.js
var amapFile = require('../../utils/amap-wx.js');
var click = true
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height: 0,
    Height_1: 0,
    scale: 13,
    latitude: "",
    longitude: "",
    hx_door: true,
  },
  /************************************ 校门 **************************************/
  hx_door: function () {
    this.setData({
      hx_door: true,
      hx_yun: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      hx_sport: false,
      hx_send: false,
      hx_college: false,
      latitude: 37.744120, //经度
      longitude: 112.721390, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.749821,
        longitude: 112.726679,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.748969,
        longitude: 112.714980,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.744120,
        longitude: 112.721390,
        width: 20,
        height: 30
      }]
    })
  },
  /**************************************************** 云顶********************************/
  hx_yun: function () {
    this.setData({
      hx_door: false,
      hx_yun: true,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      hx_sport: false,
      hx_send: false,
      hx_college: false,
      latitude: 37.752697, //经度
      longitude: 112.720180, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752697,
        longitude: 112.720180,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752761,
        longitude: 112.716070,
        width: 20,
        height: 30
      }]
    })
  },
  /*********************************************** 餐厅 ********************************************/
  hx_canteen: function () {
    this.setData({
      hx_door: false,
      hx_yun: false,
      hx_canteen: true,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      hx_sport: false,
      hx_send: false,
      hx_college: false,
      latitude: 37.749776, //经度
      longitude: 112.725309, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.749776,
        longitude: 112.725309,
        width: 20,
        height: 30
      },
      {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.750398,
        longitude: 112.718283,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752831,
        longitude: 112.720482,
        width: 20,
        height: 30
      }
      ]
    })
  },
  /********************************************** 超市 **************************************************/
  hx_supermarket: function () {
    this.setData({
      hx_door: false,
      hx_yun: false,
      hx_canteen: false,
      hx_supermarket: true,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      hx_sport: false,
      hx_send: false,
      hx_college: false,
      latitude: 37.749191,
      longitude: 112.724928,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',   //东区超市
        latitude: 37.749191,  
        longitude: 112.724928,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //黑洪堂，鲜果之茶
        latitude: 37.748910, 
        longitude: 112.725519,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //西区超市
        latitude: 37.750398, 
        longitude: 112.718283,
        width: 20,
        height: 30
      }

      ]
    })
  },
  /****************************************教学楼******************************************/
  hx_teach: function () {
    this.setData({
      hx_door: false,
      hx_yun: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: true,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      hx_sport: false,
      hx_send: false,
      hx_college: false,
      latitude: 37.749521,
      longitude: 112.724271,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',   //行知
        latitude: 37.749521,
        longitude: 112.724271,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //行知c
        latitude: 37.749147,
        longitude: 112.724352,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //行思
        latitude: 37.750183,
        longitude: 112.718837,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //行勉
        latitude: 37.750110,
        longitude: 112.724237,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //行远
        latitude: 37.749981,
        longitude: 112.724607,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',   //行逸
        latitude: 37.748446,
        longitude: 112.718405,
        width: 20,
        height: 30
      }
      ]
    })
  },

  /****************************************医 务 室***************************************** */
  hx_hospital: function () {
    this.setData({
      hx_door: false,
      hx_yun: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: true,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      hx_sport: false,
      hx_send: false,
      hx_college: false,
      latitude: 37.751326, //经度
      longitude: 112.718943, //纬度
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.751326,
        longitude: 112.718943,
        width: 20,
        height: 30
      }]
    })
  },
  /**************************************** 体 育 场***************************************** */
  hx_playground: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_yun: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: true,
      hx_library: false,
      hx_dorm: false,
      hx_sport: false,
      hx_send: false,
      hx_college: false,
      latitude: 37.750971,  
      longitude: 112.725182,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.750971,  //东操场
        longitude: 112.725182,
        width: 20,
        height: 30
      },
      {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752702,
        longitude: 112.723951,   //西操场
        height: 30,
        width:20
      }]
    })
  },
  /**************************************** 图 书 馆***************************************** */
  hx_library: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_yun: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: true,
      hx_dorm: false,
      hx_sport: false,
      hx_send: false,
      hx_college: false,
      latitude: 37.746407,     
      longitude: 112.722901,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.746407,     //临时图书馆
        longitude: 112.722901,
        width: 20,
        height: 30
      }, 
      ]
    })
  },

  /**************************************** 宿 舍***************************************** */
  hx_dorm: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_yun: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: true,
      hx_sport: false,
      hx_send: false,
      hx_college: false,
      latitude: 37.748042,   
      longitude: 112.724992,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.748042,    //1-5号楼
        longitude: 112.724992,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752953,   //20-22号楼
        longitude: 112.721880,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752964,   //18,19
        longitude: 112.719772,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752687,   //16,17
        longitude: 112.719541,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.750599,  //15
        longitude: 112.716796,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.750348,   //13,14
        longitude: 112.716979,
        width: 20,
        height: 30
      },{
          iconPath: '../../images/hxLocation.png',
          latitude: 37.748964,   //8
          longitude: 112.716912,
          width: 20,
          height: 30
      }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.748136,   //6,7
          longitude: 112.717157,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.749393,   //11,12
          longitude: 112.717132,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.749368,   //9,10
          longitude: 112.717101,
          width: 20,
          height: 30
        }
      ]
    })
  },

  /****************************************运动***************************************** */
  hx_sport: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_yun: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      hx_sport: true,
      hx_send: false,
      hx_college: false,
      latitude: 37.746817,   
      longitude: 112.725438,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.746817,    //东区排球场
        longitude: 112.725438,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752702,   //操场篮球场
        longitude: 112.723951,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.751879,   //西排
        longitude: 112.719108,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.753046,   //排球场，手球场，网球场
        longitude: 112.723979,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.750458,  //西区篮球场
        longitude: 112.715726,
        width: 20,
        height: 30
      }, 
      ]
    })
  },
  /****************************************生活***************************************** */
  hx_send: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_yun: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      hx_sport: false,
      hx_send: true,
      hx_college: false,
      latitude: 37.750406,   
      longitude: 112.715885,  
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.750406,     //西区快递
        longitude: 112.715885,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.748079,       //东区快递
        longitude: 112.725851,
        width: 20,
        height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.748901,       //东区浴室，莱斯造型
          longitude: 112.725516,
          width: 20,
          height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.749730,       //西区浴室，春尚造型
          longitude: 112.715694,
          width: 20,
          height: 30
        },
        
      ]
    })
  },

  /****************************************学院楼***************************************** */
  hx_college: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_yun: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      hx_sport: false,
      hx_send: false,
      hx_college: true,
      latitude: 37.752697,
      longitude: 112.720180,
      scale: 16,
      markers: [{
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752697,    //数学学院
        longitude: 112.720180,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.751721,   //经管
        longitude: 112.719444,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.751241,   //基础
        longitude: 112.719070,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.747922,   //马哲，外国语，政法
        longitude: 112.719719,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.747000,  //体育
        longitude: 112.720358,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.746354,   //轻纺
        longitude: 112.723333,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.748008,   //软件
        longitude: 112.724721,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.747127,   //光电
        longitude: 112.723150,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752741,   //环境
        longitude: 112.725347,
        width: 20,
        height: 30
      }, {
        iconPath: '../../images/hxLocation.png',
        latitude: 37.752324,   //艺术
        longitude: 112.716801,
        width: 20,
        height: 30
        }, {
          iconPath: '../../images/hxLocation.png',
          latitude: 37.751910,   //生医
          longitude: 112.720915,
          width: 20,
          height: 30
        }
      ]
    })
  },


  toLocation:function(){
    var _this = this
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {

        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,

        })
      }

    })
    var myAmapFun = new amapFile.AMapWX({ key: 'eeef012afe4c956d0d38fd3a132fb267' });
    myAmapFun.getRegeo({
      success: function (data) {
        //console.log(data[0])
        getApp().globalData.mapInfo = data[0]
        _this.setData({
          mapMsg: data[0]
        });
      },
      fail: function (info) {

        console.log(info)
      }
    });
  },

  

bindSearch: function (e) {

   wx.navigateTo({
     url: '../search/search'
   })

 },
 toAdmin: function () {
   wx.navigateTo({
     url: '../admin/admin'
   })

 },

 toLoadline: function () {
   wx.navigateTo({
     url: '../navigation/navigation?startPoint=' + this.data.mapMsg.longitude + ',' + this.data.mapMsg.latitude + '&startName=我的位置'
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  go: function (e) {
    var id = e.currentTarget.id; //获取id
    switch (id) {
      /*校门*/
      case "door1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.744120,
          longitude: 112.721390,
          scale: 25,
          name:'南门'
        })
        break;
      case "door2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.749821,
          longitude: 112.726679,
          scale: 25,
          name:'东门'
        })
        break;
      case "door3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.748969,
          longitude: 112.714980,
          scale: 25,
          name:'西门'
        })
        break;
      
      /*云顶*/
      case "yun1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.752697,
          longitude: 112.720180,
          scale: 25,
          name:'云顶书院-数港基地'
        })
        break;
      case "yun2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.752761,
          longitude: 112.716070,
          scale: 25,
          name:'云顶书院-逸庐基地'
        })
        break;


      /*太理餐饮*/
      case "canteen1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.749776,
          longitude: 112.725309,
          scale: 25,
          name:'东餐厅'
        })
        break;
      case "canteen2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.750398,
          longitude: 112.718283,
          scale: 25,
          name:'西餐厅'
        })
        break;
      case "canteen3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.752831,
          longitude: 112.720482,
          scale: 25,
          name:'北餐厅'
        })
        break;
     
      /*太理超市*/
      case "supermarket1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.749191,
          longitude: 112.724928,
          scale: 25,
          name:'东区超市'
        })
        break;
      case "supermarket2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.749191,
          longitude: 112.724928,
          scale: 25,
          name:'东区餐厅小吃商铺'
        })
        break;
      case "supermarket3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.748910,
          longitude: 112.725519,
          scale: 25,
          name:'鲜果爱上茶奶茶店'
        })
        break;
      case "supermarket4":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.750398,
          longitude: 112.718283,
          scale: 25,
          name:'西区餐厅周围餐铺'
        })
        break;
      case "supermarket5":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: '',
          longitude:'',
          scale: 25,
          name:'印刷厂'
        })
        break;




      /**教学楼 */
      case "teach1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.750183,
          longitude: 112.718837,
          scale: 25,
          name: '行思楼'
        })
        break;
      case "teach2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.749981,
          longitude: 112.724607,
          scale: 25,
          name: '行远楼'
        })
        break;
      case "teach3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.749521,
          longitude: 112.724271,
          scale: 25,
          name: '行知楼'
        })
        break;
      case "teach4":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.749147,
          longitude: 112.724352,
          scale: 25,
          name: '行知楼C座'
        })
        break;
      case "teach5":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.748446,
          longitude: 112.718405,
          scale: 25,
          name:'行逸楼'
        })
        break;
      case "teach6":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 37.750110,
          longitude: 112.724237,
          scale: 25,
          name:'行勉楼'
        })
        break;
      /**太理医务室 */
      case "hospital1":
        wx.openLocation({
          latitude: 37.751326,
          longitude: 112.718943,
          scale: 25,
          name:'太理校医院'
        })
        break;
      /**体育场 */
      case "playground1":
        wx.openLocation({
          latitude: 37.750971,  //东操场
          longitude: 112.725182,
          scale: 25,
          name:'东操场'
        })
        break;
      case "playground2":
        wx.openLocation({
          latitude: 37.752702,
          longitude: 112.723951,   //西操场
          scale: 25,
          name:'西操场'
        })
        break;
      /**图书馆*/
      case "library1":
        wx.openLocation({
          latitude: 37.746407,     //临时图书馆
          longitude: 112.722901,
          scale: 25,
          name:'临时图书馆'
        })
        break;

      /**宿舍楼*/
      case "dorm1":
        wx.openLocation({
          latitude: 37.748042,    //1-5号楼
          longitude: 112.724992,
          scale: 25,
          name:'1-5号楼'
        })
        break;
      case "dorm2":
        wx.openLocation({
          latitude: 37.748136,   //6,7
          longitude: 112.717157,
          scale: 25,
          name:'6-7号楼'
        })
        break;
      case "dorm3":
        wx.openLocation({
          latitude: 37.748964,   //8
          longitude: 112.716912,
          name:'8号楼',
          scale: 25
        })
        break;
      case "dorm4":
        wx.openLocation({
          latitude: 37.749368,   //9,10
          longitude: 112.717101,
          scale: 25,
          name:'9-10号楼'
        })
        break;
      case "dorm5":
        wx.openLocation({
          latitude: 37.749393,   //11,12
          longitude: 112.717132,
          scale: 25,
          name:'11-12号楼'
        })
        break;
      case "dorm6":
        wx.openLocation({
          latitude: 37.750348,   //13,14
          longitude: 112.716979,
          scale: 25,
          name:'13-14号楼'
        })
        break;
      case "dorm7":
        wx.openLocation({
          latitude: 37.750599,  //15
          longitude: 112.716796,
          scale: 25,
          name: '15号楼'
        })
        break;
      case "dorm8":
        wx.openLocation({
          latitude: 37.752687,   //16,17
          longitude: 112.719541,
          scale: 25,
          name: '16-17号楼'
        })
        break;
      case "dorm9":
        wx.openLocation({
          latitude: 37.752964,   //18,19
          longitude: 112.719772,
          scale: 25,
          name: '18-19号楼'
        })
        break;
      case "dorm10":
        wx.openLocation({
          latitude: 37.752953,   //20-22号楼
          longitude: 112.721880,
          scale: 25,
          name: '20-22号楼'
        })
        break;
      /** 运动 **/
      case "sport1":
        wx.openLocation({
          latitude: 37.750458,  //西区篮球场
          longitude: 112.715726,
          scale: 25,
          name: '篮球场(一)'
        })
        break;
      case "sport2":
        wx.openLocation({
          latitude: 37.752702,   //操场篮球场
          longitude: 112.723951,
          scale: 25,
          name: '篮球场(二)'
        })
         break;
      case "sport4":
        wx.openLocation({
          latitude: 37.751879,   //西排
          longitude: 112.719108,
          scale: 25,
          name: '排球场'
        })
        break;
      case "sport5":
        wx.openLocation({
          latitude: 37.753046,   //排球场，手球场，网球场
          longitude: 112.723979,
          name: '网球场'
        })
        break;
      case "sport6":
        wx.openLocation({
          latitude: 37.753046,   //排球场，手球场，网球场
          longitude: 112.723979,
          scale: 25,
          name: '手球场'
        })
        break;
      case "sport7":
        wx.openLocation({
          latitude: 37.752241,       //学生活动中心
          longitude: 112.716908,
          scale: 25,
          name: '乒乓球场'
        })
        break;
      case "sport8":
        wx.openLocation({
          latitude: 37.752497,   //艺术
          longitude: 112.715914,
          scale: 25,
          name: '健身房'
        })
        break;
      case "sport9":
        wx.openLocation({
          latitude: 37.752529,   //艺术
          longitude: 112.715753,
          scale: 25,
          name: '舞蹈教室'
        })
        break;
      /** 生活 **/
      case "send1":
        wx.openLocation({
          latitude: 37.750406,     //西区快递
          longitude: 112.715885,
          scale: 25,
          name: '近邻宝(西区)'
        })
        break;
      case "sport2":
        wx.openLocation({
          latitude: 37.748079,       //东区快递
          longitude: 112.725851,
          scale: 25,
          name: '近邻宝(东区)'
        })
        break;
      case "sport4":
        wx.openLocation({
          latitude: 37.750398,
          longitude: 112.718283,
          name: '中通快递'
        })
        break;
      case "send5":
        wx.openLocation({
          latitude: 37.750398,
          longitude: 112.718283,
          scale: 25,
          name: '菜鸟驿站'
        })
        break;
      case "send6":
        wx.openLocation({
          latitude: 37.750406,     //西区快递
          longitude: 112.715885,
          scale: 25,
          name: '京东/顺丰'
        })
        break;
      case "send8":
        wx.openLocation({
          latitude: 37.748901,       //东区浴室，莱斯造型
          longitude: 112.725516,
          scale: 25,
          name: '东区浴室(莱丝造型)'
        })
        break;
      case "send9":
        wx.openLocation({
          latitude: 37.749730,       //西区浴室，春尚造型
          longitude: 112.715694,
          scale: 25,
          name: '西区浴室(春尚造型)'
        })
        break;
      /** 学院楼 **/
      case "college1":
        wx.openLocation({
          latitude: 37.752697,    //数学学院
          longitude: 112.720180,
          scale: 25,
          name: '数学学院/大数据学院'
        })
        break;
      case "college2":
        wx.openLocation({
          latitude: 37.748008,   //软件
          longitude: 112.724721,
          scale: 25,
          name: '软件学院/信息与计算机学院'
        })
        break;
      case "college3":
        wx.openLocation({
          latitude: 37.747127,   //光电
          longitude: 112.723150,
          scale: 25,
          name: '物电学院'
        })
        break;
      case "college4":
        wx.openLocation({
          latitude: 37.752324,   //艺术
          longitude: 112.716801,
          name: '艺术学院'
        })
        break;
      case "college5":
        wx.openLocation({
          latitude: 37.751241,   //基础
          longitude: 112.719070,
          scale: 25,
          name: '基础学院'
        })
        break;
      case "college6":
        wx.openLocation({
          latitude: 37.746354,   //轻纺
          longitude: 112.723333,
          scale: 25,
          name: '轻纺工程学院'
        })
        break;
      case "college7":
        wx.openLocation({
          latitude: 37.747000,  //体育
          longitude: 112.720358,
          scale: 25,
          name: '体育学院'
        })
        break;
      case "college8":
        wx.openLocation({
          latitude: 37.747922,   //马哲，外国语，政法
          longitude: 112.719719,
          scale: 25,
          name: '政法学院/马克思主义学院'
        })
        break;
      case "college9":
        wx.openLocation({
          latitude: 37.747922,   //马哲，外国语，政法
          longitude: 112.719719,
          scale: 25,
          name: '外国语学院'
        })
        break;
      case "college10":
        wx.openLocation({
          latitude: 37.751721,   //经管
          longitude: 112.719444,
          scale: 25,
          name: '经济管理学院'
        })
        break;
      case "college11":
        wx.openLocation({
          latitude: 37.751910,   //生医
          longitude: 112.720915,
          scale: 25,
          name: '生物医学工程学院'
        })
        break;
      case "college12w":
        wx.openLocation({
          latitude: 37.752741,   //环境
          longitude: 112.725347,
          scale: 25,
          name: '环境科学与工程学院'
        })
        break;
    }
  }
})