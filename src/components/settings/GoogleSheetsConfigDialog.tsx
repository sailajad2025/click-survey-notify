
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Settings } from "lucide-react";
import { GoogleSheetsConfig } from "@/utils/googleSheetsUtil";

interface GoogleSheetsConfigDialogProps {
  googleSheetConfig: GoogleSheetsConfig;
  newSheetId: string;
  newSheetName: string;
  setNewSheetId: (id: string) => void;
  setNewSheetName: (name: string) => void;
  saveSheetSettings: () => void;
}

export const GoogleSheetsConfigDialog: React.FC<GoogleSheetsConfigDialogProps> = ({
  googleSheetConfig,
  newSheetId,
  newSheetName,
  setNewSheetId,
  setNewSheetName,
  saveSheetSettings,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost"
          className="text-white hover:bg-[#1A4080]/50"
        >
          <Settings className="h-5 w-5 mr-1" /> Settings
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Google Sheets Configuration</DialogTitle>
          <DialogDescription>
            Configure your Google Sheet to store waitlist emails.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="spreadsheetId">Google Spreadsheet ID</Label>
            <Input
              id="spreadsheetId"
              placeholder="Enter your Google Sheet ID"
              value={newSheetId}
              onChange={(e) => setNewSheetId(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              You can find this in your Google Sheet URL: docs.google.com/spreadsheets/d/<strong>[SPREADSHEET_ID]</strong>/edit
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              You can paste the full URL or just the ID - the system will extract the ID automatically.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sheetName">Sheet Name</Label>
            <Input
              id="sheetName"
              placeholder="Sheet1"
              value={newSheetName}
              onChange={(e) => setNewSheetName(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              This is the name of the tab in your Google Sheet (default is "Sheet1").
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={saveSheetSettings}>Save Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
