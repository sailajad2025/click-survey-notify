
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
    
    console.log(`Attempting to save email: ${email} to Google Sheet: ${cleanSpreadsheetId}, Sheet: ${config.sheetName}`);
    
    if (!cleanSpreadsheetId) {
      console.error('Invalid spreadsheet ID');
      // Always save to localStorage as a backup
      saveEmailLocally(email);
      return false;
    }
    
    // Make the actual API call to Google Sheets API
    try {
      // Default to Sheet1 if no sheet name is provided, but allow for Tab3
      const sheetName = config.sheetName || 'Sheet1';
      
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${cleanSpreadsheetId}/values/${sheetName}!A:B:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;
      console.log('API URL:', url);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [[email, new Date().toISOString()]]
        })
      });
      
      // Handle non-JSON responses gracefully
      let data;
      let responseText = '';
      
      try {
        responseText = await response.text();
        console.log('Raw API Response:', responseText);
        
        if (responseText) {
          data = JSON.parse(responseText);
        }
      } catch (e) {
        console.error('Failed to parse response as JSON:', e);
        saveEmailLocally(email);
        return false;
      }
      
      if (!response.ok) {
        console.error('Google Sheets API error:', data || responseText);
        saveEmailLocally(email);
        return false;
      }
      
      console.log('Google Sheets API response:', data);
      
      if (data && data.error) {
        console.error('Google Sheets API error:', data.error);
        saveEmailLocally(email);
        return false;
      }
      
      // Store in localStorage as backup on success too
      saveEmailLocally(email);
      return true;
    } catch (apiError) {
      console.error('Error calling Google Sheets API:', apiError);
      saveEmailLocally(email);
      return false;
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    saveEmailLocally(email);
    return false;
  }
};

// Save email to localStorage
const saveEmailLocally = (email: string): void => {
  try {
    const savedEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
    if (!savedEmails.includes(email)) {
      savedEmails.push(email);
      localStorage.setItem('waitlistEmails', JSON.stringify(savedEmails));
    }
  } catch (e) {
    console.error('Failed to save email locally:', e);
  }
};

// Helper function to extract the spreadsheet ID from a full URL
const extractSpreadsheetId = (input: string): string => {
  if (!input) return '';
  
  // Log the input for debugging
  console.log('Extracting ID from:', input);
  
  // For published URLs with PACX format
  if (input.includes('PACX-')) {
    // Extract the ID between PACX- and the next / or ? or end of string
    const match = input.match(/PACX-([a-zA-Z0-9-_]+)/i);
    if (match && match[1]) {
      console.log('Extracted PACX ID:', match[1]);
      return match[1];
    }
  }
  
  // Special handling for PACX URLs with /d/e/ pattern
  if (input.includes('/d/e/')) {
    const match = input.match(/\/d\/e\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      console.log('Extracted /d/e/ ID:', match[1]);
      return match[1];
    }
  }
  
  // Standard spreadsheet ID extraction
  if (input.includes('spreadsheets/d/')) {
    const match = input.match(/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      console.log('Extracted standard ID:', match[1]);
      return match[1];
    }
  }
  
  // Document ID extraction
  if (input.includes('/document/d/')) {
    const match = input.match(/\/document\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      console.log('Extracted document ID:', match[1]);
      return match[1];
    }
  }
  
  // If the input contains "/edit" or "#gid=" or "?gid=" pattern, clean it
  if (input.includes('/edit') || input.includes('#gid=') || input.includes('?gid=') || input.includes('?tab=')) {
    const cleanId = input.split(/\/edit|#gid=|\?gid=|\?tab=/)[0];
    // Further clean if the ID still contains the spreadsheet URL
    if (cleanId.includes('spreadsheets/d/')) {
      const match = cleanId.match(/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
      if (match && match[1]) {
        console.log('Extracted ID from URL parts:', match[1]);
        return match[1];
      }
    }
    // Further clean if the ID still contains the document URL
    if (cleanId.includes('/document/d/')) {
      const match = cleanId.match(/\/document\/d\/([a-zA-Z0-9-_]+)/);
      if (match && match[1]) {
        console.log('Extracted document ID from URL parts:', match[1]);
        return match[1];
      }
    }
    console.log('Cleaned ID:', cleanId);
    return cleanId;
  }
  
  // Otherwise, return the input as is (assuming it's already a clean ID)
  return input;
};

export const getGoogleSheetConfig = (): GoogleSheetsConfig => {
  // Use the document ID from the link provided by the user
  const defaultSpreadsheetId = "15Crh6l-zHRXJYkBsenWK-ceuiPtbx3PQsC3Q2vW9mPQ";
  
  // In a real app, you might get this from user settings or environment variables
  return {
    spreadsheetId: localStorage.getItem('googleSheetId') || defaultSpreadsheetId,
    sheetName: localStorage.getItem('googleSheetName') || 'Sheet1'
  };
};

export const saveGoogleSheetConfig = (config: GoogleSheetsConfig): void => {
  localStorage.setItem('googleSheetId', config.spreadsheetId);
  localStorage.setItem('googleSheetName', config.sheetName || 'Sheet1');
  
  // Log the saved config for debugging
  console.log('Saved Google Sheet config:', {
    spreadsheetId: config.spreadsheetId,
    extractedId: extractSpreadsheetId(config.spreadsheetId),
    sheetName: config.sheetName
  });
};

export const isGoogleSheetConfigured = (): boolean => {
  const config = getGoogleSheetConfig();
  return !!config.spreadsheetId && config.spreadsheetId.length > 10;
};

// Function to specifically set the provided spreadsheetId
export const setSpreadsheetId = (spreadsheetId: string): void => {
  const currentConfig = getGoogleSheetConfig();
  saveGoogleSheetConfig({
    ...currentConfig,
    spreadsheetId: spreadsheetId
  });
};
