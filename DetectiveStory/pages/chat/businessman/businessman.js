Page ({
  data: {
    ChatHistory: "",
    AllLines: ['你好啊，探长，今天到访有何贵干呢？', '昨天我就在家里小酌几杯啊，怎么了，大探长也有这个雅兴吗？', '我不认识这种小角色，呵呵。'],
    ResponseLines:['你昨晚去了哪里？', '你认识受害者吗？', '你的回答似乎看起来很可疑。', '你在说谎，呵呵。'],
    isShowNewTask: false,
  },
  
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    this.setData({
      ChatHistory: this.data.AllLines[0],
      ResponseChat1: this.data.ResponseLines[0],
      ResponseChat2: this.data.ResponseLines[1],
    })
  },

  openToast: function () {
    if (this.data.isShowNewTask == true) {
      this.data.isShowNewTask = false
      wx.showToast({
        title: '获得了新的任务',
        icon: 'success',
        duration: 3000
      });
    }

    if (this.data.isShowNewTask == false) {
      this.data.isShowNewTask = true
    }
    
    this.setData({
      ChatHistory: this.data.AllLines[1],
      ResponseChat1: this.data.ResponseLines[2],
      ResponseChat2: this.data.ResponseLines[3],      
    })  
  },

  openNext: function () {
    this.setData({    
      ChatHistory: this.data.AllLines[2],
      ResponseChat1: this.data.ResponseLines[2],
      ResponseChat2: this.data.ResponseLines[3],      
    })    
  }
});