
// This utility handles interactions with Google Sheets API

// This is a public API key as it's client-side and will be used for the demo
// For production use, you should use a backend service with proper authentication
const API_KEY = 'AIzaSyBs15iX-E7gMx6V5C-xSxC2liKcyF8XuBs'; // This is a demo key, replace with your actual API key

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
    
    if (!cleanSpreadsheetId) {
      console.error('Invalid spreadsheet ID');
      return false;
    }
    
    // Make the actual API call to Google Sheets API
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${cleanSpreadsheetId}/values/${config.sheetName}!A:B:append?valueInputOption=USER_ENTERED&key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [[email, new Date().toISOString()]]
          })
        }
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Google Sheets API error:', errorData);
        return false;
      }
      
      const data = await response.json();
      console.log('Google Sheets API response:', data);
      
      if (data.error) {
        console.error('Google Sheets API error:', data.error);
        return false;
      }
      
      // Store in localStorage as backup only on success
      const savedEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
      if (!savedEmails.includes(email)) {
        savedEmails.push(email);
        localStorage.setItem('waitlistEmails', JSON.stringify(savedEmails));
      }
      
      return true;
    } catch (apiError) {
      console.error('Error calling Google Sheets API:', apiError);
      return false;
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
};

// Helper function to extract the spreadsheet ID from a full URL
const extractSpreadsheetId = (input: string): string => {
  if (!input) return '';
  
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

export const isGoogleSheetConfigured = (): boolean => {
  const config = getGoogleSheetConfig();
  return !!config.spreadsheetId && config.spreadsheetId.length > 10;
};
