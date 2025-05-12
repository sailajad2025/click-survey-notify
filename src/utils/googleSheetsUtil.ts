// This utility handles interactions with Google Sheets API

// This is a public API key as it's client-side and will be used for the demo
// In a production environment, use a backend service with proper authentication
const API_KEY = 'YOUR_GOOGLE_API_KEY';

export interface GoogleSheetsConfig {
  spreadsheetId: string;
  sheetName: string;
}

export const saveEmailToGoogleSheet = async (
  email: string, 
  config: GoogleSheetsConfig
): Promise<boolean> => {
  try {
    // Clean the spreadsheet ID to remove any URL parts
    const cleanSpreadsheetId = extractSpreadsheetId(config.spreadsheetId);
    
    console.log(`Attempting to save email: ${email} to Google Sheet: ${cleanSpreadsheetId}`);
    
    // This is a simplified version - in a real app you would:
    // 1. Use Google Sheets API with proper authentication
    // 2. Append the email to the specified sheet
    
    // For demo purposes, we'll just log success and store in localStorage as backup
    localStorage.setItem('lastEmailSavedToGoogleSheets', email);
    
    // In reality, you would make an API call like:
    /*
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${cleanSpreadsheetId}/values/${config.sheetName}!A:A:append?valueInputOption=USER_ENTERED&key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}` // You would need OAuth authentication
        },
        body: JSON.stringify({
          values: [[email, new Date().toISOString()]]
        })
      }
    );
    const data = await response.json();
    return data.updates && data.updates.updatedCells > 0;
    */
    
    return true; // Simulate successful save
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
};

// Helper function to extract the spreadsheet ID from a full URL
const extractSpreadsheetId = (input: string): string => {
  // If the input contains "spreadsheets/d/" pattern, extract the ID
  if (input.includes('spreadsheets/d/')) {
    const match = input.match(/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // If the input contains "/edit" or "#gid=" or "?gid=" pattern, clean it
  if (input.includes('/edit') || input.includes('#gid=') || input.includes('?gid=')) {
    return input.split(/\/edit|#gid=|\?gid=/)[0];
  }
  
  // Otherwise, return the input as is (assuming it's already a clean ID)
  return input;
};

export const getGoogleSheetConfig = (): GoogleSheetsConfig => {
  // In a real app, you might get this from user settings or environment variables
  return {
    spreadsheetId: localStorage.getItem('googleSheetId') || '',
    sheetName: localStorage.getItem('googleSheetName') || 'Sheet1'
  };
};

export const saveGoogleSheetConfig = (config: GoogleSheetsConfig): void => {
  localStorage.setItem('googleSheetId', config.spreadsheetId);
  localStorage.setItem('googleSheetName', config.sheetName);
};
