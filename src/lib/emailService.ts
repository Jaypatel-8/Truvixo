// Email service for sending form submissions to sales@truvixoo.com
// This uses EmailJS which works with static sites

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message?: string
  phone?: string
  subject?: string
  industry?: string
  service?: string
}

export interface ScheduleDemoData extends ContactFormData {
  selectedDate: string
  selectedTime: string
}

// Send email using EmailJS (client-side, works with static export)
export const sendContactEmail = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Dynamic import to avoid SSR issues
    const emailjs = (await import('@emailjs/browser')).default
    
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY)

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Not provided',
      phone: data.phone || 'Not provided',
      message: data.message || 'No message provided',
      industry: data.industry || 'Not provided',
      service: data.service || 'Not provided',
      subject: data.subject || 'New Contact Form Submission from TruVixo Website',
      to_email: 'sales@truvixoo.com',
      reply_to: data.email,
    }

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    
    return { success: true, message: 'Thank you for showing interest! Our team will get back to you soon.' }
  } catch (error: any) {
    // Email sending failed - return user-friendly error message
    return { 
      success: false, 
      message: error?.text || 'Failed to send message. Please try again or contact us directly at sales@truvixoo.com' 
    }
  }
}

export const sendScheduleDemoEmail = async (data: ScheduleDemoData): Promise<{ success: boolean; message: string }> => {
  try {
    // Dynamic import to avoid SSR issues
    const emailjs = (await import('@emailjs/browser')).default
    
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY)

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Not provided',
      phone: data.phone || 'Not provided',
      selected_date: data.selectedDate,
      selected_time: data.selectedTime,
      industry: data.industry || 'Not provided',
      service: data.service || 'Not provided',
      subject: 'New Demo Scheduling Request from TruVixo Website',
      to_email: 'sales@truvixoo.com',
      reply_to: data.email,
    }

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    
    return { success: true, message: 'Thank you for showing interest! Our team will get back to you soon.' }
  } catch (error: any) {
    // Email sending failed - return user-friendly error message
    return { 
      success: false, 
      message: error?.text || 'Failed to schedule demo. Please try again or contact us directly at sales@truvixoo.com' 
    }
  }
}

