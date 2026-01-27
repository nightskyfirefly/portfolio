'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const tags = [
    'Azure Data Factory',
    'Databricks',
    'Power BI / DAX',
    'SQL Server',
    'Python',
    'SAP FICO',
    'IBM TM1',
  ]

  return (
    <motion.section
      id="about"
      className="section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="glow"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2 }}
      >
        Now @ Cornell — MS in Business Analytics
      </motion.h2>
      <div className="decorative-line"></div>
      <motion.p
        className="muted"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3 }}
      >
        Focused on agentic AI and Azure-based finance automations — helping companies move beyond spreadsheets to smarter,
        faster, data-driven decision-making.
      </motion.p>
      <motion.div
        className="tagbar"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, staggerChildren: 0.05 }}
      >
        {tags.map((tag) => (
          <motion.div
            key={tag}
            className="tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.45 }}
          >
            {tag}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
