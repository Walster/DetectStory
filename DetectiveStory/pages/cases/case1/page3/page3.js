// pages/cases/case1/page3/page3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories_line: "",
    ifDisable: true,
    allLines: ['你发现贾富商的表情很轻松，而久店长的表情很失落.', '你又侧身望了望其他人，发现牛工程师正在角落安静的写代码，你认识他是因为他曾经帮你修过电脑。', '你的注意力又放回了贾富商身上，你记得他一直以来都是个为了得到金钱不择手段的人，你很好奇他今天来这里的目的。', '同时你也想到，甄女士之前一直在和贾富商交往，你并不知道今晚她出现在这里有没有别的目的。', '\nPress Next...'],
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
      url: '../page4/page4'
    })
  },
})