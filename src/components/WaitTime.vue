<template>
  <div class="wait-time">
    <!-- Display the wait time -->
    <p>Wait time: {{ waitTime }} seconds</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waitTime: 0 // Variable to store the wait time
    };
  },
  mounted() {
    // Call backend API to get the wait time
    this.fetchWaitTime();
  },
  methods: {
    fetchWaitTime() {
      // Make an API call to the backend to get the wait time
      // Assuming the backend API endpoint is '/api/wait-time'
      fetch('/api/wait-time')
        .then(response => response.json())
        .then(data => {
          this.waitTime = data.waitTime;
        })
        .catch(error => {
          console.error('Error fetching wait time:', error);
        });
    }
  }
};
</script>

<style>
.wait-time {
  font-size: 18px;
  font-weight: bold;
  color: blue;
}
</style>