import { NextRequest, NextResponse } from 'next/server';
import { appendEnquiryToGoogleSheet } from '@/lib/googlesheets';

export interface EnquiryFormData {
  parentName: string;
  phoneNumber: string;
  email: string;
  city: string;
  childBoard: string;
  childGrade: string;
  route: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: EnquiryFormData = await request.json();

    // Validate required fields
    const requiredFields = ['parentName', 'phoneNumber', 'email', 'city'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof EnquiryFormData]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Append enquiry data directly to Google Sheet
    const result = await appendEnquiryToGoogleSheet(formData);

    if (result.success) {
      return NextResponse.json(
        { message: 'Form submitted successfully!' },
        { status: 200 }
      );
    } else {
      console.error('Google Sheets error:', result.error);
      return NextResponse.json(
        { error: 'Failed to submit the details' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
