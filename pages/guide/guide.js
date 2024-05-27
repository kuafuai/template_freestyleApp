Page({
  data: {
    guideContent: ''
  },

  onLoad() {
    // Fetch guide content from server
    // ...

    this.setData({
      guideContent: fetchedGuideContent
    });
  }
});
