'use client'

import { ReactNode } from 'react'

/** Card with lift, scale, and optional running border on hover. GPU-only. */
export function CardHoverAnimation({
  children,
  className = '',
  borderAnimation = true,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  borderAnimation?: boolean
  as?: 'div' | 'article' | 'li'
}) {
  const classes = [
    'card-hover',
    borderAnimation ? 'card-hover-border' : '',
    className,
  ].filter(Boolean).join(' ')
  return <Tag className={classes}>{children}</Tag>
}
