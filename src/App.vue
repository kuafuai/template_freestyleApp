<template>
  <div id="app">
    <QueueListComponent />
    <WaitTimeComponent />
    <OperationButtonComponent />
    <QueueLengthComponent />
  </div>
</template>

<script>
import QueueListComponent from './components/QueueListComponent.vue';
import WaitTimeComponent from './components/WaitTimeComponent.vue';
import OperationButtonComponent from './components/OperationButtonComponent.vue';
import QueueLengthComponent from './components/QueueLengthComponent.vue';

export default {
  components: {
    QueueListComponent,
    WaitTimeComponent,
    OperationButtonComponent,
    QueueLengthComponent
  }
};
</script>

<style>
/* Add CSS styles for the main app component */
</style>