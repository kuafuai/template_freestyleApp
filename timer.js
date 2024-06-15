class Timer {
  constructor(timeRemaining) {
    this.timeRemaining = timeRemaining;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        console.log(`Time remaining: ${this.timeRemaining}`);
      } else {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    console.log("Timer stopped");
  }
}

module.exports = Timer;
