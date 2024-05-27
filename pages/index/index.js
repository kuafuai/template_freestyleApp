Page({
  data: {
    videos: [],
    images: []
  },

  onLoad() {
    // Fetch videos and images from server
    // ...

    // Update data with fetched videos and images
    this.setData({
      videos: fetchedVideos,
      images: fetchedImages
    });
  },

  onCustomizeClick() {
    wx.navigateTo({
      url: '/pages/customize/customize'
    });
  },

  onGuideClick() {
    wx.navigateTo({
      url: '/pages/guide/guide'
    });
  }
});
