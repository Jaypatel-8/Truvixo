import { NextRequest, NextResponse } from 'next/server';
import { sendUserConfirmationEmail, sendAdminNotificationEmail } from '@/lib/server/emailService';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        // Basic server-side validation
        if (!data.name || !data.email || !data.message) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Trigger emails in background (async)
        // We don't await them to ensure the request is not blocked
        // However, for better error logging in this specific context, we'll use Promise.allSettled

        const emailPromises = [
            sendUserConfirmationEmail(data),
            sendAdminNotificationEmail(data)
        ];

        // Fire and forget or handle properly? 
        // The user said "Do NOT block the request (send email async / background-safe)"
        // So we'll trigger them and return success immediately, but we should log errors.

        Promise.allSettled(emailPromises).then((results) => {
            results.forEach((result, index) => {
                if (result.status === 'rejected') {
                    console.error(`Error sending email ${index === 0 ? 'Confirmation' : 'Notification'}:`, result.reason);
                } else {
                    console.log(`Email ${index === 0 ? 'Confirmation' : 'Notification'} sent successfully`);
                }
            });
        });

        return NextResponse.json({
            success: true,
            message: 'Thank you for your message! Our team will get back to you soon.'
        });

    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { success: false, message: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
