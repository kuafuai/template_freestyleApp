class Level {
  constructor() {
    this.scenes = [];
  }

  // Unlock a scene and add it to the scenes array
  unlockScene(scene) {
    this.scenes.push(scene);
  }

  // Get all unlocked scenes
  getUnlockedScenes() {
    return this.scenes;
  }

  // Remove a scene from the scenes array
  removeScene(scene) {
    const index = this.scenes.indexOf(scene);
    if (index > -1) {
      this.scenes.splice(index, 1);
    }
  }

  // Perform an action within the level
  performAction(action) {
    // Add your implementation here
  }
}

module.exports = Level;
