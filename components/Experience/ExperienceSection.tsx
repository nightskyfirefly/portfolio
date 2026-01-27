'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const jobs = [
    {
      title: 'Lactalis U.S. Yogurt · Financial Analyst',
      when: 'P&L ($20M+ monthly), CAPEX, 5-day close, SAP FICO · IBM TM1 · Power BI',
      bullets: [
        'Built database-driven pipelines to replace manual Excel processes with real-time dashboards.',
        'Strengthened controls and shortened close cycles with automated checks and reconciliations.',
      ],
    },
    {
      title: 'Better Buying · Data Analyst',
      when: 'Global brands: Amazon, Nike, Walmart, Target',
      bullets: ['Turned supplier data into dashboards and shareholder insights that improved sourcing practices.'],
    },
    {
      title: 'Ann Clark Ltd. · Marketing Business Analyst',
      when: 'E-commerce analytics & optimization',
      bullets: ['Supported 18% e-commerce revenue growth through performance tracking and marketing optimization.'],
    },
  ]

  return (
    <motion.section
      id="work"
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
        Roles & Impact
      </motion.h2>
      <div className="decorative-line"></div>
      <motion.div
        className="timeline"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, staggerChildren: 0.1 }}
      >
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            className="job"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <h3>{job.title}</h3>
            <div className="when">{job.when}</div>
            <ul>
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
