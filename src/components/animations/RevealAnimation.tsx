'use client'

import { ReactNode } from 'react'

/** Reveal: opacity 0→1, translateY 20px→0, 0.5–0.7s. Use for sections. */
export function RevealAnimation({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
}) {
  return (
    <Tag className={`scroll-animate ${className}`.trim()}>
      {children}
    </Tag>
  )
}

/** Slide in from left: opacity 0→1, translateX -30px→0. */
export function SlideInLeft({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'aside'
}) {
  return (
    <Tag className={`scroll-animate-left ${className}`.trim()}>
      {children}
    </Tag>
  )
}

/** Slide in from right: opacity 0→1, translateX 30px→0. */
export function SlideInRight({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'aside'
}) {
  return (
    <Tag className={`scroll-animate-right ${className}`.trim()}>
      {children}
    </Tag>
  )
}

/** Scale in: opacity 0→1, scale 0.92→1. Use for cards. */
export function ScaleInAnimation({
  children,
  className = '',
  style,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  as?: 'div' | 'article'
}) {
  return (
    <Tag className={`scroll-animate-scale ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
