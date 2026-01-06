'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Mail, Phone, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'

const ContactFormModal = dynamic(() => import('@/components/ContactFormModal'), {
  ssr: false,
  loading: () => null,
})

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if popup has been shown before
    const hasShownBefore = localStorage.getItem('truvixo_contact_popup_shown')
    
    if (!hasShownBefore) {
      // Show popup after a short delay (1 second)
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
        localStorage.setItem('truvixo_contact_popup_shown', 'true')
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

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

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (backdropRef.current && e.target === backdropRef.current) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998] animate-fade-in"
        onMouseDown={handleBackdropClick}
      >
        <div
          ref={popupRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 animate-scale-in"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Header with gradient */}
            <div className="bg-[#5e2cb6] p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">Welcome to TruVixo!</h3>
                      <p className="text-sm text-white/90">Let's transform your business together</p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Close popup"
                  >
                    <X className="w-5 h-5" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-700 text-center">
                We're excited to help you achieve your business goals! Get in touch with us to discuss your project.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    handleClose()
                    setTimeout(() => {
                      setIsContactModalOpen(true)
                    }, 300)
                  }}
                  className="w-full bg-[#5e2cb6] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#4a1f8f] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                  <span>Schedule a Free Consultation</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="mailto:sales@truvixoo.com"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" strokeWidth={2} />
                    <span className="text-sm font-medium">Email Us</span>
                  </a>
                  <a
                    href="tel:+916354326412"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <Phone className="w-5 h-5" strokeWidth={2} />
                    <span className="text-sm font-medium">Call Us</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  💡 Tip: Our AI assistant is available 24/7 to answer your questions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}




