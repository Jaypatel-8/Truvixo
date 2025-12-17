'use client'

import { useEffect, useRef, useState } from 'react'

interface InfiniteCarouselProps {
  items: React.ReactNode[]
  speed?: number // pixels per second
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
}

export default function InfiniteCarousel({
  items,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = ''
}: InfiniteCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Duplicate items for seamless loop (need at least 2 copies)
  const duplicatedItems = [...items, ...items]

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return

    const container = containerRef.current
    const wrapper = wrapperRef.current
    let position = 0
    const itemWidth = container.scrollWidth / 2 // Since we have 2 copies
    const isLeft = direction === 'left'

    const animate = () => {
      if (isPaused) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      position += (speed / 60) * (isLeft ? -1 : 1)

      // Reset position when we've scrolled one full set
      if (isLeft && position <= -itemWidth) {
        position = 0
      } else if (!isLeft && position >= itemWidth) {
        position = 0
      }

      container.style.transform = `translateX(${position}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed, direction, isPaused])

  return (
    <div
      ref={wrapperRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex gap-8"
        style={{
          width: 'fit-content',
          willChange: 'transform'
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ minWidth: '380px', maxWidth: '380px' }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}




