'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number // velocity x
  vy: number // velocity y
  size: number
  color: string
  opacity: number
  baseX: number
  baseY: number
}

export default function Moondust() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()
  const [isMouseActive, setIsMouseActive] = useState(false)
  const mousePosRef = useRef({ x: 0, y: 0 })
  const smoothPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Configuration
    const particleCount = 800 // Increased count for dense dust field
    const colors = ['#c9b8e8', '#a8c8e8', '#f5e6a3', '#d4a8e8'] // lavender, aurora-blue, firefly, aurora-violet
    const repulsionRadius = 150
    const attractionRadius = 300
    const repulsionStrength = 0.5
    const attractionStrength = 0.02
    const friction = 0.95
    const maxVelocity = 2

    // Create particles
    const createParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < particleCount; i++) {
        const size = 0.5 + Math.random() * 1.0 // Smaller size for dust effect
        const color = colors[Math.floor(Math.random() * colors.length)]
        const opacity = 0.1 + Math.random() * 0.3 // Lower opacity for subtlety
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        particlesRef.current.push({
          x,
          y,
          vx: 0,
          vy: 0,
          size,
          color,
          opacity,
          baseX: x,
          baseY: y,
        })
      }
    }

    createParticles()

    // Set initial cursor position
    mousePosRef.current = { x: canvas.width / 2, y: canvas.height / 2 }
    smoothPosRef.current = { x: canvas.width / 2, y: canvas.height / 2 }

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY }
      setIsMouseActive(true)
    }

    const handleMouseLeave = () => {
      setIsMouseActive(false)
      mousePosRef.current = { x: canvas.width / 2, y: canvas.height / 2 }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    const animate = () => {
      // Smooth cursor position
      const easing = 0.06
      smoothPosRef.current.x += (mousePosRef.current.x - smoothPosRef.current.x) * easing
      smoothPosRef.current.y += (mousePosRef.current.y - smoothPosRef.current.y) * easing

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and render particles
      particlesRef.current.forEach((particle, i) => {
        // Calculate distance from cursor
        const dx = smoothPosRef.current.x - particle.x
        const dy = smoothPosRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Apply physics forces
        if (isMouseActive && distance > 0) {
          if (distance < repulsionRadius) {
            // Repulsion: push particles away from cursor
            const force = (repulsionRadius - distance) / repulsionRadius
            const angle = Math.atan2(dy, dx)
            particle.vx -= Math.cos(angle) * force * repulsionStrength
            particle.vy -= Math.sin(angle) * force * repulsionStrength
          } else if (distance > attractionRadius) {
            // Attraction: gently pull particles toward cursor
            const force = (distance - attractionRadius) / (canvas.width / 2)
            const angle = Math.atan2(dy, dx)
            particle.vx += Math.cos(angle) * force * attractionStrength
            particle.vy += Math.sin(angle) * force * attractionStrength
          }
        } else {
          // Return to base position when mouse is inactive
          const baseDx = particle.baseX - particle.x
          const baseDy = particle.baseY - particle.y
          const baseDistance = Math.sqrt(baseDx * baseDx + baseDy * baseDy)
          if (baseDistance > 1) {
            particle.vx += baseDx * 0.01
            particle.vy += baseDy * 0.01
          }
        }

        // Apply friction
        particle.vx *= friction
        particle.vy *= friction

        // Limit velocity
        const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (velocity > maxVelocity) {
          particle.vx = (particle.vx / velocity) * maxVelocity
          particle.vy = (particle.vy / velocity) * maxVelocity
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Draw particles with glow effect (No connections)
      particlesRef.current.forEach((particle) => {
        // Create radial gradient for glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        )
        gradient.addColorStop(0, particle.color)
        gradient.addColorStop(0.5, particle.color + '80')
        gradient.addColorStop(1, 'transparent')

        // Draw particle glow
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw particle core
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isMouseActive])

  return (
    <canvas
      ref={canvasRef}
      className="moondust-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  )
}
