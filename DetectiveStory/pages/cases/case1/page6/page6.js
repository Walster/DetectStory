// pages/cases/case1/page6/page6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories_line: "",
    ifDisable: true,
    allLines: ['你本想再去找两个混混攀谈，但发现他们也不在。', '于是你只好继续与牛工程师交谈，你发现其实他人还不错，就是话少。', '8:40分，你看到甄女士回来了。', '8:50分，久店长也回来了。', '9:00，一个混混回来了，9:05，另一个混混突然冲进酒吧说贾富商死了。', '今晚的大家都很奇怪，你决定势必要破解这个案子。', '在场嫌犯分别是【久店长，流浪汉甲，流浪汉乙，牛工程师，甄女士】', '请大家根据后面线索锁定凶手。', '\nPress Next...'],
    clickTimes: 0,
    linesCount: 9,
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
      url: '../../../village/village'
    })
  },
})