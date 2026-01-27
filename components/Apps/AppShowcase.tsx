'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AuroraCard from '@/components/Cards/AuroraCard'

export default function AppShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const apps = [
    {
      icon: '📊',
      title: 'TariffLens',
      subtitle: 'Tariff Intelligence for Budgeting & Forecasting',
      badge: 'Live Demo',
      description: 'Understand and quantify tariff impact on your supply chain. Make informed budgeting decisions with real-time tariff analysis. Track tariffs across countries, calculate exposed spend, analyze annual tariff deltas, and model different scenarios including FX rate changes and tariff shocks.',
      features: ['Real-Time Calculations', 'Budget Impact Analysis', 'Proactive Alerts', 'Scenario Planning'],
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Data Analytics'],
      link: 'https://tariffs-mvp.vercel.app/',
    },
    {
      icon: '🚗',
      title: 'Commute Cost Analyzer',
      subtitle: 'Elevation-Aware Fuel Optimization System',
      badge: 'Live Demo',
      description: 'Advanced fuel cost analysis using real elevation data to calculate energy consumption for hills and valleys. Compare traditional vehicles with hybrids, analyze speed distribution impact, and model winter weather effects for accurate fuel estimates and ROI calculations.',
      features: ['Elevation Data', 'Hybrid Comparison', 'ROI Analysis', 'Interactive Charts'],
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      link: 'https://commuter-e2zp.vercel.app/',
    },
  ]

  return (
    <motion.section
      id="apps"
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
        Featured Applications
      </motion.h2>
      <div className="decorative-line"></div>
      <div className="app-showcase">
        {apps.map((app, index) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            style={{ marginTop: index > 0 ? '28px' : 0 }}
          >
            <AuroraCard {...app} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
