'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface AuroraCardProps {
  icon: string
  title: string
  subtitle: string
  badge: string
  description: string
  features: string[]
  tech: string[]
  link: string
}

export default function AuroraCard({
  icon,
  title,
  subtitle,
  badge,
  description,
  features,
  tech,
  link,
}: AuroraCardProps) {
  return (
    <motion.div
      className="aurora-card"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="app-header">
        <div className="app-icon">{icon}</div>
        <div className="app-info">
          <h3 className="app-title">{title}</h3>
          <p className="app-subtitle">{subtitle}</p>
        </div>
        <div className="app-badge">{badge}</div>
      </div>
      <div className="app-content">
        <p className="app-description">{description}</p>
        <div className="app-features">
          {features.map((feature) => (
            <div key={feature} className="feature-tag">
              {feature}
            </div>
          ))}
        </div>
        <div className="app-tech">
          {tech.map((item) => (
            <span key={item} className="tech-item">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="app-footer">
        <a href={link} target="_blank" rel="noopener noreferrer" className="aurora-btn">
          <span>Launch Application</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}
