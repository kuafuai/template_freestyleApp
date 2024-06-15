class Achievement {
  constructor() {
    this.achievements = [];
    this.rewards = [];
  }

  unlockAchievement(achievement) {
    if (!this.achievements.includes(achievement)) {
      this.achievements.push(achievement);
    } else {
      throw new Error("Achievement already unlocked");
    }
  }

  unlockReward(reward) {
    if (!this.rewards.includes(reward)) {
      this.rewards.push(reward);
    } else {
      throw new Error("Reward already unlocked");
    }
  }

  getAllAchievements() {
    return this.achievements;
  }

  getAllRewards() {
    return this.rewards;
  }

  isAchievementUnlocked(achievement) {
    return this.achievements.includes(achievement);
  }

  isRewardUnlocked(reward) {
    return this.rewards.includes(reward);
  }

  removeAchievement(achievement) {
    const index = this.achievements.indexOf(achievement);
    if (index !== -1) {
      this.achievements.splice(index, 1);
    } else {
      throw new Error("Achievement not found");
    }
  }

  removeReward(reward) {
    const index = this.rewards.indexOf(reward);
    if (index !== -1) {
      this.rewards.splice(index, 1);
    } else {
      throw new Error("Reward not found");
    }
  }
}

module.exports = Achievement;
