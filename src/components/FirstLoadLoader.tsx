'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'truvixo_first_load_done'

export default function FirstLoadLoader() {
  const [visible, setVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const done = sessionStorage.getItem(STORAGE_KEY)
    if (done === '1') {
      setVisible(false)
      return
    }
    setVisible(true)

    const onLoad = () => {
      setFadeOut(true)
      setTimeout(() => {
        setVisible(false)
        sessionStorage.setItem(STORAGE_KEY, '1')
      }, 500)
    }

    if (document.readyState === 'complete') {
      const t = setTimeout(onLoad, 600)
      return () => clearTimeout(t)
    }
    window.addEventListener('load', onLoad)
    const fallback = setTimeout(onLoad, 2500)
    return () => {
      window.removeEventListener('load', onLoad)
      clearTimeout(fallback)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-white"
      style={{
        transition: 'opacity 0.5s ease-out',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
      aria-hidden
    >
      <div className="text-center">
        {/* Animated rings */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#5e2cb6] border-r-[#c91a6f]"
            style={{ animation: 'first-load-spin 0.9s linear infinite' }}
          />
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#10b981] border-l-[#5e2cb6]"
            style={{ animation: 'first-load-spin 0.7s linear infinite reverse' }}
          />
          <div
            className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#c91a6f]"
            style={{ animation: 'first-load-spin 1.1s linear infinite' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-2 h-2 rounded-full bg-[#5e2cb6]"
              style={{ animation: 'first-load-pulse 1.2s ease-in-out infinite' }}
            />
          </div>
        </div>
        {/* Progress bar */}
        <div className="w-56 h-0.5 bg-gray-100 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#5e2cb6] via-[#c91a6f] to-[#10b981]"
            style={{
              width: '100%',
              animation: 'first-load-progress 1.8s ease-in-out forwards',
            }}
          />
        </div>
        <p className="mt-6 text-xs font-medium text-gray-500 tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  )
}
