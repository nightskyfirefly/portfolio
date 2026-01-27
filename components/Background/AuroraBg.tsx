'use client'

import { useEffect, useRef } from 'react'

export default function AuroraBg() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="aurora-bg moondust-bg">
      <div className="aurora-wave"></div>
      <div className="aurora-wave"></div>
    </div>
  )
}
