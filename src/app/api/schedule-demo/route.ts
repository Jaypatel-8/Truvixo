import { NextRequest, NextResponse } from 'next/server';
import { sendDemoEmails, DemoEmailData } from '@/lib/server/emailService';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        // Basic server-side validation for Demo Scheduling
        if (!data.name || !data.email || !data.selectedDate || !data.selectedTime) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields for scheduling' },
                { status: 400 }
            );
        }

        const demoData: DemoEmailData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            industry: data.industry,
            service: data.service,
            selectedDate: data.selectedDate,
            selectedTime: data.selectedTime,
            message: data.message
        };

        // Trigger emails async
        sendDemoEmails(demoData).then((results) => {
            results.forEach((result, index) => {
                if (result.status === 'rejected') {
                    console.error(`Error sending demo email ${index === 0 ? 'Confirmation' : 'Notification'}:`, result.reason);
                } else {
                    console.log(`Demo email ${index === 0 ? 'Confirmation' : 'Notification'} sent successfully`);
                }
            });
        }).catch(err => {
            console.error('Unexpected error in sendDemoEmails promise chain:', err);
        });

        return NextResponse.json({
            success: true,
            message: 'Thank you for showing interest! Our team will get back to you soon.'
        });

    } catch (error: any) {
        console.error('Schedule Demo API Error:', error);
        return NextResponse.json(
            { success: false, message: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
