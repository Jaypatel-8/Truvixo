'use client'

import { useEffect, useRef, useState } from 'react'

interface StatsCounterProps {
  end: number
  suffix?: string
  label: string
  color: string
  duration?: number
  className?: string
}

export default function StatsCounter({ end, suffix = '', label, color, duration = 2000, className = '' }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const start = 0
          const startTime = performance.now()
          const step = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(start + (end - start) * easeOut)
            setCount(current)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <div ref={ref} className={className}>
      <div className="text-3xl md:text-4xl font-black mb-1 tabular-nums" style={{ color }}>
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium text-sm">{label}</div>
    </div>
  )
}
