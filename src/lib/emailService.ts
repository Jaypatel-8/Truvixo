// ============================================================================
// Backend API Configuration
// ============================================================================
// All email sending is now handled via server-side API routes for security
// and professional formatting.
// ============================================================================

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
  resumeFile?: File
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

    // Call the backend API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: result.message || 'Thank you for your message! Our team will get back to you soon.'
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to send message. Please try again or contact us directly at sales@truvixoo.com'
      };
    }
  } catch (error: any) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact Email Error:', error);
    }

    return {
      success: false,
      message: 'Failed to send message. Please check your connection and try again, or contact us directly at sales@truvixoo.com'
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

    const formData = new FormData();

    // Append all text fields except file related ones
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'resumeFile' && key !== 'resume' && value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });

    // Append the actual file as 'resume'
    if (data.resumeFile) {
      formData.append('resume', data.resumeFile);
    } else if (data.resume) {
      // Fallback: if only a filename/link exists
      formData.append('resume', data.resume);
    }

    // Call the backend API route
    const response = await fetch('/api/hiring', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: result.message || 'Thank you for your application! Our team will get back to you soon.'
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to send application. Please try again or contact us directly at hr@truvixo.com'
      };
    }
  } catch (error: any) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Hiring Email Error:', error);
    }

    return {
      success: false,
      message: 'Failed to send application. Please check your connection and try again, or contact us directly at hr@truvixo.com'
    }
  }
}

export const sendScheduleDemoEmail = async (data: ScheduleDemoData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.selectedDate || !data.selectedTime) {
      return {
        success: false,
        message: 'Please fill in all required fields (name, email, date, and time).'
      }
    }

    // Call the backend API route for Scheduling
    const response = await fetch('/api/schedule-demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: result.message || 'Thank you for showing interest! Our team will get back to you soon.'
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to schedule demo. Please try again or contact us directly at sales@truvixoo.com'
      };
    }
  } catch (error: any) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Schedule Demo Error:', error);
    }

    return {
      success: false,
      message: 'Failed to schedule demo. Please check your connection and try again, or contact us directly at sales@truvixoo.com'
    }
  }
}

