'use client'

import { useEffect, useRef } from 'react'

export default function Fireflies() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const fireflyCount = 20

    for (let i = 0; i < fireflyCount; i++) {
      const firefly = document.createElement('div')
      firefly.className = 'firefly'
      
      firefly.style.left = Math.random() * 100 + '%'
      firefly.style.top = (Math.random() * 70 + 30) + '%'
      
      const floatDuration = Math.random() * 10 + 12
      const glowDuration = Math.random() * 3 + 3
      const floatDelay = Math.random() * 15
      const glowDelay = Math.random() * 4
      
      firefly.style.animationDuration = `${floatDuration}s, ${glowDuration}s`
      firefly.style.animationDelay = `${floatDelay}s, ${glowDelay}s`
      
      const size = Math.random() * 2 + 2
      firefly.style.width = size + 'px'
      firefly.style.height = size + 'px'
      
      container.appendChild(firefly)
    }

    return () => {
      // Cleanup
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return <div ref={containerRef} className="fireflies" />
}
