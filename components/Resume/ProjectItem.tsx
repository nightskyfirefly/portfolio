'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ProjectItemProps {
  title: string
  tech: string
  description: string
}

export default function ProjectItem({ title, tech, description }: ProjectItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="project-item"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      <h3 className="project-title">{title}</h3>
      <div className="project-tech">{tech}</div>
      <p className="job-description" style={{ margin: 0 }}>
        {description}
      </p>
    </motion.div>
  )
}
