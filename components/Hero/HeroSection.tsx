'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      ref={ref}
      className="hero grid"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.div className="card" variants={itemVariants}>
        <span className="chip mono">FP&A • Automation • AI Reporting</span>
        <h1>
          I help finance teams evolve from Excel-heavy workflows to
          <span className="glow"> intelligent, automated, AI-driven reporting</span>.
        </h1>
        <p className="lead">
          With experience across FP&A, P&L management, and data analytics, I bridge finance, business, and technical teams —
          translating real financial challenges into scalable data solutions.
        </p>
        <div className="cta">
          <Link href="#dashboards" className="btn primary">
            View live dashboards
          </Link>
          <Link href="#contact" className="btn">
            Get in touch
          </Link>
        </div>
        <div className="kpis">
          <div className="kpi">
            <div className="label">Monthly P&L</div>
            <div className="value">$20M+</div>
            <div className="muted">Managed & analyzed (Lactalis U.S. Yogurt)</div>
          </div>
          <div className="kpi">
            <div className="label">Close Cycle</div>
            <div className="value">5 days</div>
            <div className="muted">Controls + automation support</div>
          </div>
          <div className="kpi">
            <div className="label">Tooling</div>
            <div className="value">SAP · TM1 · Power BI</div>
            <div className="muted">+ Azure, Python, SQL</div>
          </div>
        </div>
      </motion.div>
      <motion.div className="card" variants={itemVariants}>
        <h2 className="glow" style={{ marginTop: 0 }}>What I deliver</h2>
        <div className="decorative-line"></div>
        <ul style={{ marginTop: '10px', paddingLeft: '18px', color: 'var(--muted)' }}>
          <li>Database-backed pipelines that replace fragile Excel chains.</li>
          <li>Real-time dashboards for decision speed & tighter controls.</li>
          <li>Agentic AI and Azure-based automations across FP&A workflows.</li>
          <li>Executive-ready visuals that are simple, accurate, and fast.</li>
        </ul>
        <div className="tagbar">
          <div className="tag">FP&A</div>
          <div className="tag">P&L / CAPEX</div>
          <div className="tag">Forecasting</div>
          <div className="tag">Power BI & DAX</div>
          <div className="tag">Python · SQL</div>
          <div className="tag">Azure</div>
          <div className="tag">Agentic AI</div>
        </div>
        <div className="project-nav">
          <h3 className="nav-header">Explore My Work</h3>
          <div className="nav-buttons">
            <Link href="#apps" className="project-btn">
              <span className="project-icon">📊</span>
              <span className="project-name">TariffLens</span>
            </Link>
            <Link href="#apps" className="project-btn">
              <span className="project-icon">🚗</span>
              <span className="project-name">Commute Analyzer</span>
            </Link>
            <Link href="#analysis" className="project-btn">
              <span className="project-icon">🔬</span>
              <span className="project-name">Fragrance Analysis</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
