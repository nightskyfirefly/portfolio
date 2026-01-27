'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TechCategory {
  title: string
  badges: Array<{ src: string; alt: string }>
}

interface TechConstellationProps {
  categories: TechCategory[]
}

export default function TechConstellation({ categories }: TechConstellationProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="tech-constellation"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          className="tech-category"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 + categoryIndex * 0.1 }}
        >
          <h4>{category.title}</h4>
          <div className="badge-row">
            {category.badges.map((badge, badgeIndex) => (
              <motion.img
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1 + badgeIndex * 0.05 }}
                whileHover={{ y: -3 }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
