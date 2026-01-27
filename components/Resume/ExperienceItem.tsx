'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ExperienceItemProps {
  title: string
  company: string
  dates: string
  location: string
  highlights: string[]
}

export default function ExperienceItem({ title, company, dates, location, highlights }: ExperienceItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="experience-item"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      <div className="job-header">
        <div>
          <h3 className="job-title">{title}</h3>
          <div className="company">{company}</div>
        </div>
        <div className="job-dates">{dates}</div>
      </div>
      <div className="job-description">{location}</div>
      <ul className="job-highlights">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </motion.div>
  )
}
