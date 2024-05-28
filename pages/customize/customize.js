Page({
  data: {
    selectedSpots: [],
    selectedTime: '',
    selectedLocation: ''
  },

  // Function to handle spot selection
  onSpotSelect(event) {
    const selectedSpot = event.currentTarget.dataset.spot;
    const selectedSpots = this.data.selectedSpots;

    if (selectedSpots.includes(selectedSpot)) {
      const index = selectedSpots.indexOf(selectedSpot);
      selectedSpots.splice(index, 1);
    } else {
      selectedSpots.push(selectedSpot);
    }

    this.setData({
      selectedSpots: selectedSpots
    });
  },

  // Function to handle time selection
  onTimeSelect(event) {
    const selectedTime = event.detail.value;

    this.setData({
      selectedTime: selectedTime
    });
  },

  // Function to handle location selection
  onLocationSelect(event) {
    const selectedLocation = event.detail.value;

    this.setData({
      selectedLocation: selectedLocation
    });
  }
});