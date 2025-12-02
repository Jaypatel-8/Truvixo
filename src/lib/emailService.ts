// Email service for sending form submissions using EmailJS (Free)
// Contact forms → sales@truvixoo.com (Template: template_7ezfh6w)
// Hiring forms → hr@truvixoo.com (Template: template_zxfomo7)
// This uses EmailJS which works with static sites - no backend required

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

export interface HiringFormData {
  name: string
  email: string
  phone: string
  position: string
  experience?: string
  resume?: string
  coverLetter?: string
  linkedin?: string
  portfolio?: string
  availability?: string
  salary?: string
}

export interface ScheduleDemoData extends ContactFormData {
  selectedDate: string
  selectedTime: string
}

/**
 * Validates contact form data
 */
const validateContactData = (data: ContactFormData): { valid: boolean; error?: string } => {
  if (!data.name || data.name.trim().length === 0) {
    return { valid: false, error: 'Name is required' }
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { valid: false, error: 'Valid email is required' }
  }
  if (!data.message || data.message.trim().length === 0) {
    return { valid: false, error: 'Message is required' }
  }
  return { valid: true }
}

/**
 * Validates hiring form data
 */
const validateHiringData = (data: HiringFormData): { valid: boolean; error?: string } => {
  if (!data.name || data.name.trim().length === 0) {
    return { valid: false, error: 'Name is required' }
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { valid: false, error: 'Valid email is required' }
  }
  if (!data.phone || data.phone.trim().length === 0) {
    return { valid: false, error: 'Phone number is required' }
  }
  if (!data.position || data.position.trim().length === 0) {
    return { valid: false, error: 'Position is required' }
  }
  return { valid: true }
}

/**
 * Send contact email to sales@truvixoo.com
 * Uses EmailJS template: template_7ezfh6w
 */
export const sendContactEmail = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate form data
    const validation = validateContactData(data)
    if (!validation.valid) {
      return { success: false, message: validation.error || 'Please fill in all required fields' }
    }

    // Dynamic import to avoid SSR issues
    const emailjs = (await import('@emailjs/browser')).default
    
    // Get environment variables
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_7ezfh6w'
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Validate environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration missing. Please check your .env.local file.')
      return { 
        success: false, 
        message: 'Email service is not configured. Please contact us directly at sales@truvixoo.com' 
      }
    }

    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY)

    // Map all fields exactly as required by EmailJS template template_7ezfh6w
    const templateParams = {
      from_name: data.name.trim(),
      from_email: data.email.trim(),
      company: data.company?.trim() || 'Not provided',
      phone: data.phone?.trim() || 'Not provided',
      message: data.message?.trim() || 'No message provided',
      industry: data.industry?.trim() || 'Not provided',
      service: data.service?.trim() || 'Not provided',
      subject: data.subject?.trim() || 'New Contact Form Submission from TruVixo Website',
      to_email: 'sales@truvixoo.com',
      reply_to: data.email.trim(),
    }

    // Send email via EmailJS
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    
    if (response.status === 200) {
      return { success: true, message: 'Thank you for your message! Our team will get back to you soon.' }
    } else {
      return { success: false, message: 'Failed to send message. Please try again.' }
    }
  } catch (error: any) {
    console.error('EmailJS Error:', error)
    // Email sending failed - return user-friendly error message
    return { 
      success: false, 
      message: error?.text || error?.message || 'Failed to send message. Please try again or contact us directly at sales@truvixoo.com' 
    }
  }
}

/**
 * Send hiring email to hr@truvixoo.com
 * Uses EmailJS template: template_zxfomo7
 */
export const sendHiringEmail = async (data: HiringFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate form data
    const validation = validateHiringData(data)
    if (!validation.valid) {
      return { success: false, message: validation.error || 'Please fill in all required fields' }
    }

    // Dynamic import to avoid SSR issues
    const emailjs = (await import('@emailjs/browser')).default
    
    // Get environment variables
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_HIRING || 'template_zxfomo7'
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Validate environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration missing. Please check your .env.local file.')
      return { 
        success: false, 
        message: 'Email service is not configured. Please contact us directly at hr@truvixoo.com' 
      }
    }

    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY)

    // Map all fields exactly as required by EmailJS template template_zxfomo7
    const templateParams = {
      from_name: data.name.trim(),
      from_email: data.email.trim(),
      phone: data.phone.trim(),
      position: data.position.trim() || 'Not specified',
      experience: data.experience?.trim() || 'Not provided',
      resume: data.resume?.trim() || 'Not provided',
      cover_letter: data.coverLetter?.trim() || 'Not provided',
      linkedin: data.linkedin?.trim() || 'Not provided',
      portfolio: data.portfolio?.trim() || 'Not provided',
      availability: data.availability?.trim() || 'Not provided',
      salary: data.salary?.trim() || 'Not provided',
      subject: `Job Application: ${data.position} - ${data.name}`,
      to_email: 'hr@truvixoo.com',
      reply_to: data.email.trim(),
    }

    // Send email via EmailJS
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    
    if (response.status === 200) {
      return { success: true, message: 'Thank you for your application! Our HR team will review it and get back to you soon.' }
    } else {
      return { success: false, message: 'Failed to send application. Please try again.' }
    }
  } catch (error: any) {
    console.error('EmailJS Error:', error)
    // Email sending failed - return user-friendly error message
    return { 
      success: false, 
      message: error?.text || error?.message || 'Failed to send application. Please try again or contact us directly at hr@truvixoo.com' 
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

