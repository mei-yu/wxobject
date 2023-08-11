Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: '#000000',
    list: [
      {
        pagePath: '/pages/index/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '首页'
      },
      {
        pagePath: '/pages/indexOne/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '首页'
      },
      {
        pagePath: '/pages/indexTwo/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '首页'
      },
      {
        pagePath: '/pages/indexThree/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '首页'
      },
      {
        pagePath: '/pages/indexFour/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '我的'
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      console.log(data);
      const url = data.path;
      wx.switchTab({ url });
      this.setData({
        selected: data.index
      });
    }
  }
});
Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: '#1296db',
    list: [
      {
        pagePath: '/pages/index/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '首页'
      },
      {
        pagePath: '/pages/indexOne/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '首页'
      },
      {
        pagePath: '/pages/indexTwo/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '首页'
      },
      {
        pagePath: '/pages/indexThree/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '首页'
      },
      {
        pagePath: '/pages/indexFour/index',
        iconPath: '/images/index.jpg',
        selectedIconPath: '/images/index_select.jpg',
        text: '我的'
      }
    ]
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const path = data.path;
      const index = data.index;
      if (index != 2) {
        wx.switchTab({
          url: path
        });
      } else {
        wx.navigateTo({
          url: '/pages/indexThree/index'
        });
      }
    }
  }
});
