<template>
  <div>
    <!-- Display the queue length -->
    <p>Queue length: {{ queueLength }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queueLength: 0 // Variable to store the queue length
    };
  },
  mounted() {
    // Call backend API to get the queue length
    this.fetchQueueLength();
  },
  methods: {
    fetchQueueLength() {
      // Make an API call to the backend to get the queue length
      // Update the queueLength data property with the response data
      fetch('/api/queue/length')
        .then(response => response.json())
        .then(data => {
          this.queueLength = data.length;
        })
        .catch(error => {
          console.error('Error fetching queue length:', error);
        });
    }
  }
};
</script>

<style>
/* Add CSS styles for the queue length component */
p {
  font-size: 18px;
  font-weight: bold;
}
</style>