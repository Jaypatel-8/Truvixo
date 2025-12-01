'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasAppeared, setHasAppeared] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm TruVixo's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Show chatbot button after 20 seconds (but don't auto-open)
    const timer = setTimeout(() => {
      if (!hasAppeared) {
        setHasAppeared(true)
      }
    }, 20000)

    return () => clearTimeout(timer)
  }, [hasAppeared, isMounted])

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return

    const userInput = inputValue.trim()
    const userMessage: Message = {
      id: Date.now().toString(),
      text: userInput,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userInput),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()
    
    if (lowerInput.includes('service') || lowerInput.includes('what do you do')) {
      return "We offer a wide range of services including Custom Software Development, AI & Machine Learning, Web & Mobile Development, Cloud & DevOps, Digital Marketing, and more. Which service are you interested in?"
    }
    
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing')) {
      return "Our pricing depends on your specific project requirements. I'd recommend scheduling a call with our team to discuss your needs and get a customized quote. Would you like me to help you book a consultation?"
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email')) {
      return "You can reach us at:\n📧 Email: sales@truvixoo.com\n📞 Phone: +91 63543 26412\nOr fill out our contact form and we'll get back to you within 24 hours!"
    }
    
    if (lowerInput.includes('portfolio') || lowerInput.includes('work') || lowerInput.includes('projects')) {
      return "We've worked with clients across various industries including FinTech, Healthcare, E-commerce, and more. Check out our 'Our Works' section on the homepage to see some of our recent projects!"
    }
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! Welcome to TruVixo. I'm here to help answer any questions about our services, pricing, or how we can help your business. What would you like to know?"
    }
    
    if (lowerInput.includes('help') || lowerInput.includes('support')) {
      return "I'm here to help! I can answer questions about our services, pricing, contact information, or help you schedule a consultation. What do you need help with?"
    }
    
    return "That's a great question! For detailed information, I'd recommend speaking with our team directly. Would you like to schedule a call or fill out our contact form? I can help you get started!"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    "What services do you offer?",
    "How much does it cost?",
    "Contact information",
    "View portfolio"
  ]

  if (!isMounted) return null

  return (
    <>
      {/* Chatbot Toggle Button - Appears after 20 seconds */}
      {!isOpen && hasAppeared && isMounted && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-4 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#5e2cb6] dark:bg-[#8b5cf6] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#4a1f8f] dark:hover:bg-[#7c3ae0] transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group animate-fade-in"
          style={{ 
            boxShadow: '0 4px 20px rgba(94, 44, 182, 0.4)',
            animation: 'bounce 2s infinite, fade-in 0.5s ease-out'
          }}
          aria-label="Open AI chatbot"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
          <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-3 h-3 md:w-4 md:h-4 bg-[#c91a6f] rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100vw-2rem)] md:w-96 h-[600px] max-h-[calc(100vh-2rem)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700 animate-scale-in">
          {/* Header */}
          <div className="bg-[#5e2cb6] dark:bg-[#8b5cf6] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-bold text-lg">TruVixo AI Assistant</h3>
                <p className="text-xs text-white/90">We're here to help!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 bg-[#5e2cb6] dark:bg-[#8b5cf6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-[#5e2cb6] dark:bg-[#8b5cf6] text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-gray-700 dark:text-gray-300" strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-[#5e2cb6] dark:bg-[#8b5cf6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-2xl px-4 py-2 border border-gray-200 dark:border-gray-600">
                  <Loader2 className="w-5 h-5 animate-spin text-[#5e2cb6] dark:text-[#8b5cf6]" />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(question)
                      setTimeout(() => handleSend(), 100)
                    }}
                    className="text-xs px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full hover:bg-[#5e2cb6]/10 dark:hover:bg-[#8b5cf6]/20 hover:border-[#5e2cb6] dark:hover:border-[#8b5cf6] transition-colors text-gray-700 dark:text-gray-300"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#5e2cb6] dark:focus:ring-[#8b5cf6] focus:border-[#5e2cb6] dark:focus:border-[#8b5cf6] bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="w-12 h-12 bg-[#5e2cb6] dark:bg-[#8b5cf6] text-white rounded-xl hover:bg-[#4a1f8f] dark:hover:bg-[#7c3ae0] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                {isTyping ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

