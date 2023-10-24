<template>
  <div>
    <!-- Display the queue list -->
    <ul>
      <li v-for="person in queueList" :key="person.id">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queueList: [] // Array to store the queue list
    };
  },
  mounted() {
    // Call backend API to get the queue list
    this.fetchQueueList();
  },
  methods: {
    async fetchQueueList() {
      try {
        const response = await fetch('/api/queue'); // Replace '/api/queue' with the actual API endpoint
        const data = await response.json();
        this.queueList = data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
/* Add CSS styles for the queue list component */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>