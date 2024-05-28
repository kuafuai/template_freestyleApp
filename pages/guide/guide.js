Page({
  data: {
    guideContent: '',
    isLoading: true,
    isError: false
  },

  onLoad() {
    // Fetch guide content from server
    fetchGuideContent()
      .then((fetchedGuideContent) => {
        this.setData({
          guideContent: fetchedGuideContent,
          isLoading: false
        });
      })
      .catch(() => {
        this.setData({
          isError: true,
          isLoading: false
        });
      });
  }
});

function fetchGuideContent() {
  return new Promise((resolve, reject) => {
    // Simulating server request delay
    setTimeout(() => {
      const fetchedGuideContent = 'Guide content fetched from server';
      const shouldFail = false; // Set to true to simulate error

      if (shouldFail) {
        reject();
      } else {
        resolve(fetchedGuideContent);
      }
    }, 2000);
  });
}