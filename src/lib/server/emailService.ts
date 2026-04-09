import nodemailer from 'nodemailer';

// Transporter configuration using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  industry?: string;
  service?: string;
  subject?: string;
}

export interface HiringEmailData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience?: string;
  resumeLink?: string;
  coverLetter?: string;
  linkedin?: string;
  portfolio?: string;
  availability?: string;
  salary?: string;
}

export interface DemoEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  service?: string;
  selectedDate: string;
  selectedTime: string;
  message?: string;
}

/**
 * Sends a professional thank-you email to the user
 */
export const sendUserConfirmationEmail = async (data: EmailData) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6; }
        .header { background: linear-gradient(135deg, #5e2cb6 0%, #4a1f8f 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0; }
        .content { padding: 30px; background: #ffffff; border: 1px solid #ebebeb; border-top: none; border-radius: 0 0 12px 12px; }
        .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
        h1 { margin: 0; font-size: 24px; font-weight: 800; }
        p { margin-bottom: 20px; }
        .button { display: inline-block; padding: 12px 30px; background-color: #5e2cb6; color: white !important; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 10px; }
        .brand { font-weight: 800; color: #5e2cb6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thanks for contacting us 🚀</h1>
        </div>
        <div class="content">
          <p>Hi <strong>${data.name}</strong>,</p>
          <p>Thank you for reaching out to <span class="brand">TruVixo™</span>! We have received your message regarding <strong>${data.service || 'our services'}</strong>.</p>
          <p>Our team is already reviewing your inquiry, and we will get in touch with you shortly to discuss how we can help transform your vision into reality.</p>
          <p>In the meantime, feel free to explore our latest work and insights on our website.</p>
          <a href="https://truvixoo.com" class="button">Visit Our Website</a>
          <p style="margin-top: 30px;">Best Regards,<br><strong>The TruVixo Team</strong></p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} TruVixo™. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;

  return transporter.sendMail({
    from: `"TruVixo" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Thanks for contacting us 🚀",
    html: htmlContent,
  });
};

/**
 * Sends a detailed notification email to the admin
 */
export const sendAdminNotificationEmail = async (data: EmailData) => {
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .container { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; }
        .header { background-color: #f4f4f4; padding: 20px; text-align: center; border-bottom: 3px solid #5e2cb6; }
        .content { padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { text-align: left; padding: 12px; border-bottom: 1px solid #ddd; }
        th { background-color: #f9f9f9; color: #5e2cb6; width: 30%; }
        .message-box { background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #5e2cb6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
          <table>
            <tr><th>Name</th><td>${data.name}</td></tr>
            <tr><th>Email</th><td>${data.email}</td></tr>
            <tr><th>Phone</th><td>${data.phone || 'N/A'}</td></tr>
            <tr><th>Company</th><td>${data.company || 'N/A'}</td></tr>
            <tr><th>Industry</th><td>${data.industry || 'N/A'}</td></tr>
            <tr><th>Service</th><td>${data.service || 'N/A'}</td></tr>
            <tr><th>Timestamp</th><td>${timestamp}</td></tr>
          </table>
          <h3 style="color: #5e2cb6; margin-top: 30px;">Message:</h3>
          <div class="message-box">
            ${data.message?.replace(/\n/g, '<br>') || 'No message provided.'}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  return transporter.sendMail({
    from: `"TruVixo Website" <${process.env.EMAIL_USER}>`,
    to: "abhipatel.dev@gmail.com",
    subject: `New Contact Form Submission: ${data.name}`,
    html: htmlContent,
    replyTo: data.email,
  });
};

/**
 * Sends professional career application emails (User Confirmation + Admin Notification)
 */
export const sendHiringEmail = async (data: HiringEmailData, resumeFile?: { buffer: Buffer, filename: string }) => {
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  // 1. Applicant Confirmation Email Template
  const userHtmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6; }
        .header { background: linear-gradient(135deg, #5e2cb6 0%, #4a1f8f 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0; }
        .content { padding: 30px; background: #ffffff; border: 1px solid #ebebeb; border-top: none; border-radius: 0 0 12px 12px; }
        .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
        h1 { margin: 0; font-size: 24px; font-weight: 800; }
        .brand { font-weight: 800; color: #5e2cb6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Application Received 🚀</h1>
        </div>
        <div class="content">
          <p>Hi <strong>${data.name}</strong>,</p>
          <p>Thank you for applying for the <strong>${data.position}</strong> position at <span class="brand">TruVixo™</span>!</p>
          <p>We've successfully received your application. Our team will review your profile and get back to you shortly regarding the next steps.</p>
          <p>We appreciate your interest in joining our team and look forward to potentially working with you.</p>
          <p style="margin-top: 30px;">Best Regards,<br><strong>The TruVixo Hiring Team</strong></p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} TruVixo™. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;

  // 2. Admin Notification Email Template
  const adminHtmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .container { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; }
        .header { background-color: #f4f4f4; padding: 20px; text-align: center; border-bottom: 3px solid #5e2cb6; }
        .content { padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { text-align: left; padding: 12px; border-bottom: 1px solid #ddd; }
        th { background-color: #f9f9f9; color: #5e2cb6; width: 35%; }
        .link { color: #5e2cb6; text-decoration: none; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🚀 New Job Application Received</h2>
        </div>
        <div class="content">
          <table>
            <tr><th>Full Name</th><td>${data.name}</td></tr>
            <tr><th>Email</th><td>${data.email}</td></tr>
            <tr><th>Phone</th><td>${data.phone}</td></tr>
            <tr><th>Position</th><td>${data.position}</td></tr>
            <tr><th>Experience</th><td>${data.experience || 'N/A'}</td></tr>
            <tr><th>Availability</th><td>${data.availability || 'N/A'}</td></tr>
            <tr><th>Expected Salary</th><td>${data.salary || 'N/A'}</td></tr>
            <tr><th>LinkedIn</th><td>${data.linkedin ? `<a href="${data.linkedin}" class="link">View Profile</a>` : 'N/A'}</td></tr>
            <tr><th>Portfolio/GitHub</th><td>${data.portfolio ? `<a href="${data.portfolio}" class="link">View Portfolio</a>` : 'N/A'}</td></tr>
            <tr><th>Resume Link</th><td>${data.resumeLink ? `<a href="${data.resumeLink}" class="link">Click here to view</a>` : 'N/A'}</td></tr>
            <tr><th>Applied On</th><td>${timestamp}</td></tr>
          </table>
          <h3 style="color: #5e2cb6; margin-top: 30px;">Cover Letter / Additional Info:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #5e2cb6;">
            ${data.coverLetter?.replace(/\n/g, '<br>') || 'No cover letter provided.'}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Define email promises
  const userPromise = transporter.sendMail({
    from: `"TruVixo" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Application Received – TruVixo 🚀",
    html: userHtmlContent,
  });

  const attachments = [];
  if (resumeFile) {
    attachments.push({
      filename: resumeFile.filename,
      content: resumeFile.buffer,
    });
  }

  const adminPromise = transporter.sendMail({
    from: `"TruVixo Hiring" <${process.env.EMAIL_USER}>`,
    to: "abhipatel.dev@gmail.com",
    subject: `🚀 New Job Application – ${data.position}`,
    html: adminHtmlContent,
    replyTo: data.email,
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  return Promise.allSettled([userPromise, adminPromise]);
};

/**
 * Sends specialized emails for Demo/Consultation scheduling
 */
export const sendDemoEmails = async (data: DemoEmailData) => {
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  // 1. User Confirmation Email
  const userHtmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6; }
        .header { background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0; }
        .content { padding: 30px; background: #ffffff; border: 1px solid #ebebeb; border-top: none; border-radius: 0 0 12px 12px; }
        .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
        .details-box { background: #f0f7ff; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #d0e7ff; }
        .brand { font-weight: 800; color: #0072ff; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Demo Scheduled! 📅</h1>
        </div>
        <div class="content">
          <p>Hi <strong>${data.name}</strong>,</p>
          <p>We're excited to show you how <span class="brand">TruVixo™</span> can transform your business. Your demo session has been scheduled:</p>
          <div class="details-box">
            <p style="margin: 0;"><strong>📅 Date:</strong> ${data.selectedDate}</p>
            <p style="margin: 5px 0 0 0;"><strong>⏰ Time:</strong> ${data.selectedTime}</p>
            <p style="margin: 5px 0 0 0;"><strong>🛠️ Service:</strong> ${data.service || 'General Demo'}</p>
          </div>
          <p>Our experts will be ready to guide you through our platform and answer any questions you may have.</p>
          <p>In the meantime, if you need to reschedule or have urgent questions, please reply to this email.</p>
          <p style="margin-top: 30px;">Best Regards,<br><strong>The TruVixo Team</strong></p>
        </div>
      </div>
    </body>
    </html>
  `;

  // 2. Admin Notification Email
  const adminHtmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .container { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; }
        .header { background-color: #0072ff; padding: 20px; text-align: center; color: white; }
        .content { padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { text-align: left; padding: 12px; border-bottom: 1px solid #ddd; }
        th { background-color: #f9f9f9; color: #0072ff; width: 35%; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>📅 New Demo Scheduling Request</h2>
        </div>
        <div class="content">
          <table>
            <tr><th>Name</th><td>${data.name}</td></tr>
            <tr><th>Email</th><td>${data.email}</td></tr>
            <tr><th>Phone</th><td>${data.phone || 'N/A'}</td></tr>
            <tr><th>Company</th><td>${data.company || 'N/A'}</td></tr>
            <tr><th>Industry</th><td>${data.industry || 'N/A'}</td></tr>
            <tr><th>Service</th><td>${data.service || 'N/A'}</td></tr>
            <tr><th>Requested Date</th><td style="color: #0072ff; font-weight: bold;">${data.selectedDate}</td></tr>
            <tr><th>Requested Time</th><td style="color: #0072ff; font-weight: bold;">${data.selectedTime}</td></tr>
            <tr><th>Submitted On</th><td>${timestamp}</td></tr>
          </table>
          <h3 style="color: #0072ff; margin-top: 30px;">Additional Message:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #0072ff;">
            ${data.message?.replace(/\n/g, '<br>') || 'No additional message.'}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const userPromise = transporter.sendMail({
    from: `"TruVixo Demo" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Demo Scheduled – TruVixo 📅",
    html: userHtmlContent,
  });

  const adminPromise = transporter.sendMail({
    from: `"TruVixo Scheduling" <${process.env.EMAIL_USER}>`,
    to: "abhipatel.dev@gmail.com",
    subject: `📅 New Demo Request: ${data.name} - ${data.selectedDate}`,
    html: adminHtmlContent,
    replyTo: data.email,
  });

  return Promise.allSettled([userPromise, adminPromise]);
};
