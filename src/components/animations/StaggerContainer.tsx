'use client'

import { ReactNode, Children, cloneElement, isValidElement } from 'react'

const DEFAULT_DELAY = 0.1

/** Injects animation-delay into each child (0, step, 2*step, ...). No wrapper divs. */
export function StaggerContainer({
  children,
  className = '',
  step = DEFAULT_DELAY,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  step?: number
  as?: 'div' | 'section' | 'ul' | 'ol'
}) {
  const staggered = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child
    const delay = index * step
    const existingStyle = (child.props as { style?: React.CSSProperties }).style ?? {}
    return cloneElement(child, {
      style: { ...existingStyle, animationDelay: `${delay}s` },
    })
  })
  return <Tag className={className}>{staggered}</Tag>
}
