'use client'

import { useEffect, useState, useRef } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()

  useEffect(() => {
    // Only show custom cursor on desktop (not touch devices)
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    // Hide default cursor
    document.body.style.cursor = 'none'

    const updatePosition = (e: MouseEvent) => {
      // Cancel previous animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
    }

    // Simple hover detection using mouseover/mouseout on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target
      if (target && target instanceof HTMLElement) {
        const tagName = target.tagName?.toUpperCase()
        if (tagName === 'BUTTON' || tagName === 'A' || target.getAttribute('data-cursor') === 'hover') {
          setIsHovering(true)
        }
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    // Use mouseover/mouseout on document for better performance
    document.addEventListener('mousemove', updatePosition, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.body.style.cursor = ''
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[10000] mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
        transition: 'none',
      }}
    >
      {/* Outer ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-white transition-all duration-300 ease-out ${
          isHovering ? 'scale-150 opacity-50' : 'scale-100 opacity-100'
        }`}
        style={{
          width: '24px',
          height: '24px',
          margin: '-12px 0 0 -12px',
        }}
      />
      {/* Inner dot */}
      <div
        className={`absolute rounded-full bg-white transition-all duration-300 ease-out ${
          isHovering ? 'scale-75' : 'scale-100'
        }`}
        style={{
          width: '6px',
          height: '6px',
          left: '50%',
          top: '50%',
          margin: '-3px 0 0 -3px',
        }}
      />
    </div>
  )
}

export default CustomCursor
