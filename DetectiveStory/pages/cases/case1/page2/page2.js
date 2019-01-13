// pages/cases/case1/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories_line: "",
    ifDisable: true,
    allLines: ['一进酒吧，你就发现你的老朋友甄女士早就坐在里面。', '你坐到她旁边，点了一杯果汁，跟甄女士攀谈了起来','“认识你这么久了你还是喜欢在酒吧点果汁呀，小K”，甄先开了口.\n "你也是老样子呀，到了酒吧只吃免费的花生米"，你回复到。','甄感受到你的讥讽，连忙转开话题说：“这么久了你还是侦探么？” \n 你马上回应说："当然，我还是那么优秀"',"尴尬的气氛让你不知道说什么，只好望向四周，你突然发现，贾富商也在酒吧，正坐在吧台前和酒吧老板久店长交谈，",'\nPress Next...'],
    clickTimes: 0,
    linesCount: 6,
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