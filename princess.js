class Princess {
  constructor() {
    this.styles = [];
    this.outfits = [];
  }

  unlockStyle(style) {
    this.styles.push(style);
  }

  unlockOutfit(outfit) {
    this.outfits.push(outfit);
  }
}

module.exports = Princess;
