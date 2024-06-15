/**
 * This file is responsible for defining the Storyline class.
 */

class Storyline {
  constructor() {
    this.selectedTheme = '';
    this.selectedBackground = '';
    this.selectedDevelopment = '';
  }

  /**
   * Sets the selected theme.
   * @param {string} theme - The theme to be unlocked.
   */
  unlockTheme(theme) {
    // Add validation to ensure theme is a non-empty string
    if (typeof theme === 'string' && theme.trim() !== '') {
      this.selectedTheme = theme;
    } else {
      throw new Error('Invalid theme');
    }
  }

  /**
   * Sets the selected background.
   * @param {string} background - The background to be unlocked.
   */
  unlockBackground(background) {
    // Add validation to ensure background is a non-empty string
    if (typeof background === 'string' && background.trim() !== '') {
      this.selectedBackground = background;
    } else {
      throw new Error('Invalid background');
    }
  }

  /**
   * Sets the selected development.
   * @param {string} development - The development to be unlocked.
   */
  unlockDevelopment(development) {
    // Add validation to ensure development is a non-empty string
    if (typeof development === 'string' && development.trim() !== '') {
      this.selectedDevelopment = development;
    } else {
      throw new Error('Invalid development');
    }
  }
}

module.exports = Storyline;
