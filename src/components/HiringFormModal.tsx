'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, Send, Loader2, Upload } from 'lucide-react'
import { sendHiringEmail, type HiringFormData } from '@/lib/emailService'

interface HiringFormModalProps {
  isOpen: boolean
  onClose: () => void
  initialPosition?: string
}

export default function HiringFormModal({ isOpen, onClose, initialPosition }: HiringFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: initialPosition || '',
    experience: '',
    resume: '',
    coverLetter: '',
    linkedin: '',
    portfolio: '',
    availability: '',
    salary: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // For EmailJS, we'll store the file name and let the user know to include it in cover letter or provide link
      setFormData(prev => ({
        ...prev,
        resume: file.name
      }))
    }
  }

  const positions = [
    'Senior Full-Stack Developer',
    'AI/ML Engineer',
    'UI/UX Designer',
    'Digital Marketing Specialist',
    'DevOps Engineer',
    'Project Manager',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Mobile App Developer',
    'QA Engineer',
    'Data Engineer',
    'Other'
  ]

  // Update position when initialPosition changes
  useEffect(() => {
    if (initialPosition && isOpen) {
      setFormData(prev => ({
        ...prev,
        position: initialPosition
      }))
    }
  }, [initialPosition, isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const emailData: HiringFormData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      experience: formData.experience,
      resume: formData.resume,
      coverLetter: formData.coverLetter,
      linkedin: formData.linkedin,
      portfolio: formData.portfolio,
      availability: formData.availability,
      salary: formData.salary
    }

    const result = await sendHiringEmail(emailData)
    
    setIsSubmitting(false)
    
    if (result.success) {
      setIsSubmitted(true)
      setSubmitMessage(result.message)
      // Reset form after successful submission
      setTimeout(() => {
        handleClose()
      }, 2000)
    } else {
      setSubmitMessage(result.message)
    }
  }

  const handleClose = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: initialPosition || '',
      experience: '',
      resume: '',
      coverLetter: '',
      linkedin: '',
      portfolio: '',
      availability: '',
      salary: ''
    })
    setIsSubmitted(false)
    setSubmitMessage('')
    onClose()
  }, [onClose, initialPosition])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle backdrop click
  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }, [handleClose])

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, handleClose])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!isOpen) return null

  // Wait for client-side mounting before rendering portal
  if (typeof window === 'undefined' || typeof document === 'undefined' || !mounted) {
    return null
  }

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hiring-modal-title"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999
      }}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
        role="document"
        style={{ 
          position: 'relative',
          zIndex: 10000
        }}
      >
        <div className="flex justify-between items-center mb-8">
          <h3 id="hiring-modal-title" className="text-3xl font-bold text-gray-900">
            Apply for a Position at{' '}
            <span className="hollow-text-brand">TruVixo</span>
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close hiring form"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        
        {submitMessage && (
          <div className={`mb-6 p-4 border rounded-xl ${
            submitMessage.includes('Thank you') || submitMessage.includes('success')
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <p>{submitMessage}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hiring-name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="hiring-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="hiring-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="hiring-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hiring-phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="hiring-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="+91 12345 67890"
              />
            </div>
            <div>
              <label htmlFor="hiring-position" className="block text-sm font-medium text-gray-700 mb-2">
                Position Applied For *
              </label>
              <select
                id="hiring-position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select Position</option>
                {positions.map((position) => (
                  <option key={position} value={position}>{position}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="hiring-experience" className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience
            </label>
            <input
              type="text"
              id="hiring-experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="e.g., 3-5 years"
            />
          </div>

          <div>
            <label htmlFor="hiring-resume" className="block text-sm font-medium text-gray-700 mb-2">
              Resume / CV
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                id="hiring-resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <label
                htmlFor="hiring-resume"
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <Upload className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">
                  {formData.resume || 'Upload Resume (PDF, DOC, DOCX)'}
                </span>
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Note: Please also provide a link to your resume in the cover letter section if you prefer.
            </p>
          </div>

          <div>
            <label htmlFor="hiring-cover-letter" className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter / Resume Link
            </label>
            <textarea
              id="hiring-cover-letter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell us about yourself, your experience, and why you'd like to join TruVixo. You can also paste a link to your resume here."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hiring-linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="hiring-linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
            <div>
              <label htmlFor="hiring-portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio / GitHub
              </label>
              <input
                type="url"
                id="hiring-portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="https://github.com/yourusername"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hiring-availability" className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <input
                type="text"
                id="hiring-availability"
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="e.g., Immediate, 2 weeks notice"
              />
            </div>
            <div>
              <label htmlFor="hiring-salary" className="block text-sm font-medium text-gray-700 mb-2">
                Expected Salary (Optional)
              </label>
              <input
                type="text"
                id="hiring-salary"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="e.g., ₹X LPA or Negotiable"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
              aria-label="Close form"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label={isSubmitting ? "Submitting application" : "Submit application"}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" aria-hidden="true" />
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}


