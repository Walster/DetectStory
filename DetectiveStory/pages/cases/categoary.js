// pages/cases/categoary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cases: ["case1", "case2", "case3"],
    case: "case1",
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
  bindChange(e) {
    const val = e.detail.value
    this.setData({
      case: this.data.cases[val[0]]
    })
  },
  inToCase: function() {
    var val = "1"
    if (this.data.case == "case2") {
        val = "2";
    }
    else if (this.data.case == "case3") {
        val = "3";
    }
    wx.redirectTo({
      url: './case' + val + '/page1/page1?caseId=' + val
    })
  },
})