import React from "react";
import { Button } from "@/components/ui/button";
import { GoogleSheetsConfig } from "@/utils/googleSheetsUtil";
import { ExternalLink } from "lucide-react";

interface WaitlistAdminProps {
  waitlistEmails: string[];
  googleSheetConfig: GoogleSheetsConfig;
  clearWaitlist: () => void;
}

export const WaitlistAdmin: React.FC<WaitlistAdminProps> = ({
  waitlistEmails,
  googleSheetConfig,
  clearWaitlist,
}) => {
  // Extract sheet ID for viewing
  const extractedId = googleSheetConfig.spreadsheetId 
    ? googleSheetConfig.spreadsheetId.includes('spreadsheets/d/') 
      ? googleSheetConfig.spreadsheetId.match(/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)?.[1] 
      : googleSheetConfig.spreadsheetId
    : '';
    
  const viewInGoogleSheets = () => {
    if (googleSheetConfig.spreadsheetId) {
      // If it's already a URL, use it directly
      if (googleSheetConfig.spreadsheetId.startsWith('http')) {
        window.open(googleSheetConfig.spreadsheetId, '_blank', "noopener,noreferrer");
      } else {
        // Otherwise construct a URL
        window.open(`https://docs.google.com/spreadsheets/d/${extractedId}/edit`, '_blank', "noopener,noreferrer");
      }
    }
  };
  
  return (
    <div className="bg-white p-4 border-b shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Waitlist Emails</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={viewInGoogleSheets}
              disabled={!googleSheetConfig.spreadsheetId}
            >
              {googleSheetConfig.spreadsheetId ? "View in Google Sheets" : "Set Up Google Sheets"} <ExternalLink className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="destructive" size="sm" onClick={clearWaitlist}>
              Clear Local Storage
            </Button>
          </div>
        </div>
        
        {googleSheetConfig.spreadsheetId && (
          <div className="bg-gray-100 p-3 rounded-md mb-3 text-sm">
            <p className="font-medium">Google Sheet Configuration:</p>
            <p>Sheet ID: {extractedId}</p>
            <p>Sheet Name: {googleSheetConfig.sheetName || 'Sheet1'}</p>
          </div>
        )}
        
        {waitlistEmails.length === 0 ? (
          <p className="text-gray-500 italic">No emails in waitlist yet.</p>
        ) : (
          <div className="bg-gray-50 p-4 rounded-md max-h-60 overflow-y-auto">
            <ul className="space-y-2">
              {waitlistEmails.map((email, index) => (
                <li key={index} className="bg-white p-2 rounded border">
                  {email}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              Total: {waitlistEmails.length} email(s)
              {googleSheetConfig.spreadsheetId && " (Also syncing to Google Sheets)"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
