import { NextRequest, NextResponse } from 'next/server';
import { sendHiringEmail, HiringEmailData } from '@/lib/server/emailService';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const position = formData.get('position') as string;
        const experience = formData.get('experience') as string;
        const coverLetter = formData.get('coverLetter') as string;
        const linkedin = formData.get('linkedin') as string;
        const portfolio = formData.get('portfolio') as string;
        const availability = formData.get('availability') as string;
        const salary = formData.get('salary') as string;

        const resumeFile = formData.get('resume') as File | null;

        // Basic validation
        if (!name || !email || !phone || !position) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields (Name, Email, Phone, or Position)' },
                { status: 400 }
            );
        }

        // Prepare resume link if coverLetter looks like a URL
        let resumeLink = '';
        if (coverLetter && (coverLetter.startsWith('http://') || coverLetter.startsWith('https://'))) {
            resumeLink = coverLetter;
        }

        let resumeAttachment;
        if (resumeFile && resumeFile.size > 0) {
            const buffer = Buffer.from(await resumeFile.arrayBuffer());
            resumeAttachment = {
                buffer,
                filename: resumeFile.name
            };
        }

        const hiringData: HiringEmailData = {
            name,
            email,
            phone,
            position,
            experience,
            resumeLink,
            coverLetter,
            linkedin,
            portfolio,
            availability,
            salary
        };

        // Fire emails in background (async)
        // We don't await them to return success immediately to the user
        sendHiringEmail(hiringData, resumeAttachment).then((results) => {
            results.forEach((result, index) => {
                if (result.status === 'rejected') {
                    console.error(`Error sending hiring email ${index === 0 ? 'Confirmation' : 'Notification'}:`, result.reason);
                } else {
                    console.log(`Hiring email ${index === 0 ? 'Confirmation' : 'Notification'} sent successfully`);
                }
            });
        }).catch(err => {
            console.error('Unexpected error in sendHiringEmail promise chain:', err);
        });

        return NextResponse.json({
            success: true,
            message: 'Thank you for your application! Our team will get back to you soon.'
        });

    } catch (error: any) {
        console.error('Hiring API Error:', error);
        return NextResponse.json(
            { success: false, message: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
