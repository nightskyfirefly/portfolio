'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Nav from '@/components/Navigation/Nav'
import HeroSection from '@/components/Hero/HeroSection'
import AppShowcase from '@/components/Apps/AppShowcase'
import AnalysisSection from '@/components/Analysis/AnalysisSection'
import DashboardsSection from '@/components/Dashboards/DashboardsSection'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import AboutSection from '@/components/About/AboutSection'
import ContactSection from '@/components/Contact/ContactSection'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <HeroSection />
        <AppShowcase />
        <AnalysisSection />
        <DashboardsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer>
        <div className="wrap">© {new Date().getFullYear()} Mia Murphy</div>
      </footer>
    </>
  )
}
