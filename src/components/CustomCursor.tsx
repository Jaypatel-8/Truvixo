'use client'

import { useEffect, useState, useRef } from 'react'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>()
  
  // Smooth position tracking with lerp (linear interpolation)
  const currentPos = useRef({ x: 0, y: 0 })
  const targetPos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only show custom cursor on desktop (not touch devices)
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    // Hide default cursor
    document.body.style.cursor = 'none'

    // Smooth animation loop using lerp
    const animate = () => {
      // Lerp factor for smooth following - optimized for sleek movement
      const lerpFactor = 0.2
      const followerLerpFactor = 0.04

      // Smooth main cursor movement
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor

      // Smooth follower cursor movement (subtle trail)
      followerPos.current.x += (currentPos.current.x - followerPos.current.x) * followerLerpFactor
      followerPos.current.y += (currentPos.current.y - followerPos.current.y) * followerLerpFactor

      // Update DOM positions
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate)

    const updatePosition = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY }
    }

    // Enhanced hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target
      if (target && target instanceof HTMLElement) {
        const tagName = target.tagName?.toUpperCase()
        const isInteractive = 
          tagName === 'BUTTON' || 
          tagName === 'A' || 
          target.getAttribute('data-cursor') === 'hover' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.closest('[role="button"]') !== null
        
        if (isInteractive) {
          setIsHovering(true)
        }
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target
      if (target && target instanceof HTMLElement) {
        const relatedTarget = e.relatedTarget as HTMLElement | null
        if (!relatedTarget || 
            (relatedTarget.tagName !== 'BUTTON' && 
             relatedTarget.tagName !== 'A' && 
             relatedTarget.getAttribute('data-cursor') !== 'hover' &&
             !relatedTarget.closest('button') &&
             !relatedTarget.closest('a'))) {
          setIsHovering(false)
        }
      }
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    // Event listeners
    document.addEventListener('mousemove', updatePosition, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })
    document.addEventListener('mousedown', handleMouseDown, { passive: true })
    document.addEventListener('mouseup', handleMouseUp, { passive: true })

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
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
    <>
      {/* Subtle follower - minimal trailing effect */}
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          transition: 'none',
        }}
      >
        <div
          className={`absolute rounded-full transition-all duration-600 ease-out ${
            isHovering ? 'scale-140 opacity-15' : 'scale-100 opacity-20'
          }`}
          style={{
            width: '24px',
            height: '24px',
            margin: '-12px 0 0 -12px',
            background: 'rgba(0, 0, 0, 0.08)',
            filter: 'blur(6px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        />
      </div>

      {/* Main cursor - sleek monochrome design */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[10000]"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          transition: 'none',
        }}
      >
        {/* Outer ring - minimal border */}
        <div
          className={`absolute rounded-full transition-all duration-300 ease-out ${
            isHovering 
              ? 'scale-130 opacity-70' 
              : isClicking 
              ? 'scale-85 opacity-100' 
              : 'scale-100 opacity-100'
          }`}
          style={{
            width: isHovering ? '36px' : '28px',
            height: isHovering ? '36px' : '28px',
            margin: isHovering ? '-18px 0 0 -18px' : '-14px 0 0 -14px',
            border: isHovering 
              ? '1px solid rgba(0, 0, 0, 0.3)'
              : '1px solid rgba(0, 0, 0, 0.2)',
            background: 'transparent',
            boxShadow: isHovering
              ? '0 0 8px rgba(0, 0, 0, 0.1)'
              : '0 0 4px rgba(0, 0, 0, 0.08)',
          }}
        />
        
        {/* Main cursor body - sleek monochrome */}
        <div
          className={`absolute rounded-full transition-all duration-300 ease-out ${
            isHovering 
              ? 'scale-120 opacity-100' 
              : isClicking 
              ? 'scale-80 opacity-100' 
              : 'scale-100 opacity-100'
          }`}
          style={{
            width: isHovering ? '20px' : '16px',
            height: isHovering ? '20px' : '16px',
            margin: isHovering ? '-10px 0 0 -10px' : '-8px 0 0 -8px',
            background: 'rgba(0, 0, 0, 0.85)',
            boxShadow: isHovering
              ? '0 0 10px rgba(0, 0, 0, 0.2), inset 0 0 6px rgba(255, 255, 255, 0.1)'
              : '0 0 6px rgba(0, 0, 0, 0.15), inset 0 0 4px rgba(255, 255, 255, 0.08)',
            border: '0.5px solid rgba(255, 255, 255, 0.2)',
          }}
        />
      </div>

      {/* Inner dot - precision pointer */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[10001]"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          transition: 'none',
        }}
      >
        <div
          className={`absolute rounded-full transition-all duration-200 ease-out ${
            isHovering ? 'scale-120' : isClicking ? 'scale-60' : 'scale-100'
          }`}
          style={{
            width: '3px',
            height: '3px',
            margin: '-1.5px 0 0 -1.5px',
            background: 'white',
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
    </>
  )
}

export default CustomCursor
