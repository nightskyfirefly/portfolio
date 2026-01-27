'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id="contact"
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
        Let&apos;s build your finance data stack
      </motion.h2>
      <div className="decorative-line"></div>
      <motion.p
        className="muted"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3 }}
      >
        Email: <a href="mailto:miamurphyvt@gmail.com">miamurphyvt@gmail.com</a> · LinkedIn:{' '}
        <a href="https://linkedin.com/in/miamurphyvt" target="_blank" rel="noopener noreferrer">linkedin.com/in/miamurphyvt</a>
      </motion.p>
      <motion.div
        className="card"
        style={{ marginTop: '24px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4 }}
      >
        <div className="mono" style={{ color: 'var(--lavender)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Engagement modes
        </div>
        <ul style={{ margin: '14px 0 0 18px', color: 'var(--muted)' }}>
          <li>Dashboards & executive reporting (Power BI, Python, SQL).</li>
          <li>Close cycle automation & controls.</li>
          <li>Data pipelines (Azure · Databricks · SQL) feeding finance.</li>
        </ul>
      </motion.div>
    </motion.section>
  )
}
