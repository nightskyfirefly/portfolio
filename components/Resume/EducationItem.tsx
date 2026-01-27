'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface EducationItemProps {
  degree: string
  school: string
  dates: string
  skills: string
}

export default function EducationItem({ degree, school, dates, skills }: EducationItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="education-item"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      <h3 className="degree">{degree}</h3>
      <div className="school">{school}</div>
      <div className="education-dates">{dates}</div>
      <p className="degree-skills">{skills}</p>
    </motion.div>
  )
}
