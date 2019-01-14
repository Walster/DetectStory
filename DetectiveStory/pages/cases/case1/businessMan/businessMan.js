// pages/cases/case1/businessMan/businessMan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories_line: '>>>当地有名的富商\n>>>今天戴着金链子\n>>>来酒吧是为了谈论收购酒吧的事\n>>>曾在酒吧内与甄女士交谈',
    const_lines: ">>>当地有名的富商\n>>>今天戴着金链子\n>>>来酒吧是为了谈论收购酒吧的事\n>>>曾在酒吧内与甄女士交谈",
    allLines: ['死亡讯息：', '>>>死者曾中慢性毒药，发作时间约为50分钟', '>>>腹部中刀', '>>>衣服被人翻过', '>>>生前有扭打的痕迹'],
    clickTimes: 0,
    linesCount: 5,
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
  onShareAppMessage: function () {

  },

  clickNext: function () {


    this.data.clickTimes++


    if (this.data.clickTimes >= this.data.linesCount) {
      this.data.clickTimes = this.data.linesCount
    }
    var lines = this.data.const_lines
    for (var i = 0; i < this.data.clickTimes; i++) {
      lines = lines + '\n' + this.data.allLines[i]
    }
    this.setData({
      stories_line: lines
    })
  },

  goToVillage: function () {
    wx.navigateBack({
      delta: 1
    })
  },
})