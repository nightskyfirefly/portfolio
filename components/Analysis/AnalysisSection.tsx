'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AuroraCard from '@/components/Cards/AuroraCard'

export default function AnalysisSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id="analysis"
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
        Exploratory Analysis
      </motion.h2>
      <div className="decorative-line"></div>
      <div className="app-showcase">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3 }}
        >
          <AuroraCard
            icon="🔬"
            title="Fragrance Trends Analysis"
            subtitle="Data-Driven Perfume Market Research"
            badge="Research Project"
            description="Comprehensive exploratory data analysis of the top 1,000 perfumes using custom web scraping tools to harvest fragrance note details, ratings, and market trends. Analyzed brand performance, gender preferences, seasonal patterns, and emerging market dynamics including the rise of Lattafa Perfumes and shifting consumer preferences."
            features={['Web Scraping', 'Data Analysis', 'Market Research', 'Visualization']}
            tech={['Python', 'Pandas', 'Plotly', 'Seaborn']}
            link="https://nightskyfirefly.github.io/portfolio/projects/Fragrance_Analysis_1.html"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
