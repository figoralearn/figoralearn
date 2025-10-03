// lib/utils/googleSheets.ts
import { DateTime } from 'luxon'; // Importing DateTime from luxon


import { google } from 'googleapis';

export type FormDataType = {
  name?: string;
  email?: string;
  organization?: string;
  phone?: string;
  message?: string;
  websitelink?: string;
  services?: string[];
  locations?: string[];
  sources?: string[];
};

// Enquiry form specific type
export type EnquiryFormDataType = {
  parentName: string;
  phoneNumber: string;
  email: string;
  city: string;
  childBoard?: string;
  childGrade?: string;
  route?: string;
};

// ✅ Always generates IST regardless of server's location

function getFormattedISTTimestamp(): string {
  const istTime = DateTime.now().setZone('Asia/Kolkata');
  return istTime.toFormat('dd-MM-yy, HH:mm'); // Added a space after the comma for better formatting
}

export async function appendEnquiryToGoogleSheet(enquiryData: EnquiryFormDataType) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEET_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        project_id: process.env.GOOGLE_SHEET_PROJECT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.SPREADSHEET_ID!;
    const sheetName = 'Main'; // Using the existing main sheet

    const timestamp = getFormattedISTTimestamp();

    const row = [
      enquiryData.parentName || '',
      enquiryData.email || '',
      enquiryData.phoneNumber || '',
      enquiryData.city || '',
      enquiryData.childBoard || 'Not specified',
      enquiryData.childGrade || 'Not specified',
      enquiryData.route || 'Unknown',
      // 'Demo Booking',
      timestamp,
    ];

    const appendRes = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetName,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row],
      },
    });

    return { success: true, updates: appendRes.data.updates };
  } catch (error: unknown) {
    console.error('[Google Sheets Enquiry Error]', (error as Error).message);
    return { success: false, error: (error as Error).message };
  }
}

// export async function appendToGoogleSheet(formData: FormDataType) {
//   try {
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_SHEET_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//         project_id: process.env.GOOGLE_SHEET_PROJECT_ID,
//       },
//       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });

//     const sheets = google.sheets({ version: 'v4', auth });
//     const spreadsheetId = process.env.SPREADSHEET_ID!;
//     const sheetName = 'Free_Demo_Registrations';

//     const timestamp = getFormattedISTTimestamp(); // ✅ IST timestamp always

//     const row = [
//       formData.name || '',
//       formData.email || '',
//       formData.organization || '',
//       formData.phone || '',
//       formData.message || '',
//       formData.websitelink || '',
//       Array.isArray(formData.services) ? formData.services.join(', ') : '',
//       Array.isArray(formData.locations) ? formData.locations.join(', ') : '',
//       Array.isArray(formData.sources) ? formData.sources.join(', ') : '',
//       timestamp, // ✅ Final timestamp column
//     ];

//     const appendRes = await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: sheetName,
//       valueInputOption: 'USER_ENTERED',
//       insertDataOption: 'INSERT_ROWS',
//       requestBody: {
//         values: [row],
//       },
//     });

//     return { success: true, updates: appendRes.data.updates };
//   } catch (error: unknown) {
//     console.error('[Google Sheets Error]', (error as Error).message);
//     return { success: false, error: (error as Error).message };
//   }
// }
