// pages/cases/case1/page5/page5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories_line: "",
    ifDisable: true,
    allLines: ['"哇"的一声，你在酒吧背后的小巷吐了出来。”', '“酒果然不好喝”，你嘟囔道。', '吐了五分钟后，你终于舒坦了，走回酒吧，看到钟表刚刚指向8:30。', '你发现甄女士已经不在你刚来的地方，但你没太在意。', '“你打算喝点热的，于是去找久店长要杯姜汁可乐，但你发现他也不见了。“', '你心里觉得愈发奇怪，打算问一下坐在角落的牛工程师。', '”你看到刚刚坐在吧台前戴金链子的人来么？“你客气的问道。', '“我没看到”，牛工程师简洁地答道。','\nPress Next...'],
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
      url: '../page6/page6'
    })
  },
})