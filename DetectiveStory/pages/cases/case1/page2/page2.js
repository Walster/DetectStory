// pages/cases/case1/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories_line: "",
    ifDisable: true,
    allLines: ['案发时候，你看到了三个人', '大毛，二毛 和小明'],
    clickTimes: 0,
    linesCount: 2,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  clickNext: function () {


    this.data.clickTimes++


    if (this.data.clickTimes >= this.data.linesCount) {
      this.data.clickTimes = this.data.linesCount
      this.setData({
        ifDisable: false
      })
    }
    var lines = ''
    for (var i = 0; i < this.data.clickTimes; i++) {
      lines = lines + '\n' + this.data.allLines[i]
    }
    this.setData({
      stories_line: lines
    })
  },
  goToNextPage: function () {
    wx.navigateTo({
      url: '../page3/page3'
    })
  },
})