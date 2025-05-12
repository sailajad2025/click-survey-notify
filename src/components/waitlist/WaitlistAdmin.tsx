
import React from "react";
import { Button } from "@/components/ui/button";
import { GoogleSheetsConfig } from "@/utils/googleSheetsUtil";

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
  return (
    <div className="bg-white p-4 border-b shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Waitlist Emails</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              {googleSheetConfig.spreadsheetId ? "View in Google Sheets" : "Set Up Google Sheets"}
            </Button>
            <Button variant="destructive" size="sm" onClick={clearWaitlist}>
              Clear Local Storage
            </Button>
          </div>
        </div>
        
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
