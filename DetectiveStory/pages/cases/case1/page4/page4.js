// pages/cases/case1/page4/page4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories_line: "",
    ifDisable: true,
    allLines: ['甄女士看出了你的猜疑，主动对你说','“我劝你就不要猜了，你不妨多看看酒吧里那两个小混混，他们盯着贾富商的金链子很久了”', '作为侦探的你敏锐的看向那两个混混，觉得他们一定心怀不轨。', '你本想着多注意一会他们，没想到甄女士突然向你敬酒', '“好久不见，我们也算是老朋友了，我敬你一杯吧”', '你心里觉得很奇怪，但是看在对方是女士，你便也没有推辞，喝了下去。', '你又看了看表，8:15，你决定观察到9点就走，前提是没有意外发生的话。', '\nPress Next...'],
    clickTimes: 0,
    linesCount: 8,
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
      url: '../page5/page5'
    })
  },
})