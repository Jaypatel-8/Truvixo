'use client'

import Image from 'next/image'
import { useState } from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
  textColor?: 'black' | 'white'
}

const Logo = ({ size = 'md', showText = true, className = '', textColor = 'black' }: LogoProps) => {
  const [imageError, setImageError] = useState(false)

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const textColorClasses = {
    black: 'text-truvixo-black',
    white: 'text-white'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image or Fallback */}
      <div className={`relative ${sizeClasses[size]}`}>
        {!imageError ? (
          <Image
            src="/logo.png"
            alt="TruVixo Logo"
            fill
            className="object-contain"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          // Fallback CSS Logo
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-truvixo-purple rounded-lg transform rotate-45"></div>
            <div className="absolute inset-0 bg-truvixo-pink rounded-lg transform -rotate-45"></div>
            <div className="absolute inset-0 bg-truvixo-yellow rounded-lg transform rotate-90"></div>
            <div className="absolute inset-0 bg-truvixo-red rounded-lg transform -rotate-90"></div>
            <div className="absolute inset-2 bg-white rounded-sm"></div>
          </div>
        )}
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={`font-bold ${textColorClasses[textColor]} ${textSizes[size]}`}>
          TruVixo
        </span>
      )}
    </div>
  )
}

export default Logo
