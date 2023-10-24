<template>
  <div>
    <!-- Display the operation buttons -->
    <button @click="cancelCall">Cancel Call</button>
    <button @click="exitQueue">Exit Queue</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    cancelCall() {
      axios.post('/api/cancel-call')
        .then(response => {
          // Handle success response
          console.log(response.data);
        })
        .catch(error => {
          // Handle error response
          console.error(error);
        });
    },
    exitQueue() {
      axios.post('/api/exit-queue')
        .then(response => {
          // Handle success response
          console.log(response.data);
        })
        .catch(error => {
          // Handle error response
          console.error(error);
        });
    }
  }
};
</script>

<style>
/* Add CSS styles for the operation button component */
</style>