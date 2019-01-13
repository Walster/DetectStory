// pages/cases/case1/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories_line: "",
    ifDisable:true,
    allLines: ['周日，傍晚，','你一人本来漫无目的走在South LanJing路上，','心里突然冒出念头：','“这里的东西太贵了，我还是去X街这个物美价廉，童叟无欺的地方吧”','心里有了主意，脚步不自觉的加快，不一会你就到了X街。','X街有很多不错的小酒吧，这时你看了下时间，8:00。','于是你决定去“Nagoya Impressive” 酒吧小酌一杯。','\nPress Next...'],
    clickTimes:0,
    linesCount:8,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData ({
      caseId: options.caseId,
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

  clickNext: function() {
    

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
      url: '../page2/page2'
    })
  },
})