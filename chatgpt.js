// This file contains the logic for generating the meeting summary using the ChatGPT API

/**
 * Function to generate meeting summary using ChatGPT API
 * @param {Object} meetingRecord - The meeting record object
 * @returns {string} - The generated meeting summary
 * @throws {Error} - If the meetingRecord is invalid or summary generation fails
 */
function generateSummary(meetingRecord) {
  if (!meetingRecord || typeof meetingRecord !== 'object') {
    throw new Error('Invalid meetingRecord. Please provide a valid meeting record object.');
  }

  // Call ChatGPT API to generate summary
  const summary = chatGPTAPI.generateSummary(meetingRecord);

  if (!summary || typeof summary !== 'string') {
    throw new Error('Invalid summary. Failed to generate meeting summary.');
  }

  return summary;
}
