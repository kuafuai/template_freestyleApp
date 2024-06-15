class Sound {
  constructor() {
    this.music = '';
    this.soundEffects = [];
  }

  unlockMusic(music) {
    // Add validation to check if the music file exists and is in the correct format
    if (isValidMusic(music)) {
      this.music = music;
    } else {
      throw new Error('Invalid music file');
    }
  }

  unlockSoundEffect(soundEffect) {
    // Add validation to check if the sound effect file exists and is in the correct format
    if (isValidSoundEffect(soundEffect)) {
      this.soundEffects.push(soundEffect);
    } else {
      throw new Error('Invalid sound effect file');
    }
  }

  playMusic() {
    // Implement the logic to play the stored music
    if (this.music) {
      console.log(`Playing music: ${this.music}`);
    } else {
      console.log('No music unlocked');
    }
  }

  playSoundEffect() {
    // Implement the logic to play the stored sound effects
    if (this.soundEffects.length > 0) {
      console.log('Playing sound effects:');
      this.soundEffects.forEach((soundEffect) => {
        console.log(soundEffect);
      });
    } else {
      console.log('No sound effects unlocked');
    }
  }
}

function isValidMusic(music) {
  // Add logic to validate the music file
  // For example, check if the file exists and is in the correct format
  return true; // Placeholder, replace with actual validation logic
}

function isValidSoundEffect(soundEffect) {
  // Add logic to validate the sound effect file
  // For example, check if the file exists and is in the correct format
  return true; // Placeholder, replace with actual validation logic
}

module.exports = Sound;
