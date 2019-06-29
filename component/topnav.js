// component/topnav.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerTitle: {
      type: String,
      value: '头部标题'
    }, 
    isShowBack: {
      type: String,
      value: "true"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    someData: {
      statusBarHeight: app.globalData.statusBarHeight,
      titleBarHeight: app.globalData.titleBarHeight
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goback: function () {
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})
