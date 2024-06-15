class Scoreboard {
  constructor() {
    this.score = 0;
  }

  updateScore(points) {
    this.score += points;
  }
}

module.exports = Scoreboard;