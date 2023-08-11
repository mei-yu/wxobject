// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    imgData: [
      '../../images/123.webp',
      '../../images/123.webp',
      '../../images/123.webp',
      '../../images/123.webp',
      '../../images/123.webp'
    ],
    showIndex: null, //打开弹窗的对应下标
    height: '' //屏幕高度
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      });
    }
    var that = this;
    // 动态获取屏幕高度
    wx.getSystemInfo({
      success: result => {
        that.setData({
          height: result.windowHeight
        });
      }
    });
  },
  // 打开弹窗
  openPopup(e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      showIndex: index
    });
  },
  //关闭弹窗
  closePopup() {
    this.setData({
      showIndex: null
    });
  }
});
