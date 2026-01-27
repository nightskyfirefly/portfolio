'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function ResumeHeader() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      className="resume-header"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="resume-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ delay: 0.2 }}
      >
        Mia Murphy
      </motion.h1>
      <motion.p
        className="resume-subtitle"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        Finance × Data Professional
      </motion.p>
      <div className="decorative-line"></div>
      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, staggerChildren: 0.1 }}
      >
        <motion.div
          className="contact-item"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.5 }}
        >
          <span>📧</span>
          <a href="mailto:miamurphyvt@gmail.com">miamurphyvt@gmail.com</a>
        </motion.div>
        <motion.div
          className="contact-item"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.6 }}
        >
          <span>🔗</span>
          <a href="https://linkedin.com/in/miamurphyvt" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/miamurphyvt
          </a>
        </motion.div>
        <motion.div
          className="contact-item"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          <span>🌐</span>
          <a href="https://github.com/nightskyfirefly" target="_blank" rel="noopener noreferrer">
            GitHub Portfolio
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
