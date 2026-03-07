'use client'

import { ReactNode } from 'react'

/** Heading that reveals on scroll (slide-up). Use above-fold on hero so it's visible immediately. */
export function HeadingAnimation({
  children,
  className = '',
  aboveFold = false,
  as: Tag = 'h2',
}: {
  children: ReactNode
  className?: string
  aboveFold?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) {
  return (
    <Tag
      className={`scroll-animate ${aboveFold ? 'above-fold' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
