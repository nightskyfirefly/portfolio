'use client'

import Nav from '@/components/Navigation/Nav'
import ResumeHeader from '@/components/Resume/ResumeHeader'
import ResumeSection from '@/components/Resume/ResumeSection'
import ExperienceItem from '@/components/Resume/ExperienceItem'
import EducationItem from '@/components/Resume/EducationItem'
import ProjectItem from '@/components/Resume/ProjectItem'
import TechConstellation from '@/components/Resume/TechConstellation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ResumePage() {

  const experiences = [
    {
      title: 'Strategic & Business Advisor - FinOps',
      company: 'Georgia Tech CreateX - Startup',
      dates: '2025 - Present',
      location: 'Atlanta, GA',
      highlights: [
        'Partner with founders, engineering, and finance to shape the cloud FinOps strategy, aligning AI infrastructure decisions with budget, margin, and growth targets',
        'Design cost-visibility dashboards and unit-economics models (by workload, feature, and customer segment) to translate Azure and GPU spend into pricing, ROI, and roadmap decisions',
        'Establish tagging standards, budget guardrails, and right-sizing recommendations that improve cloud spend accountability while preserving model performance and scalability',
      ],
    },
    {
      title: 'Senior Financial Analyst',
      company: 'Lactalis U.S. Yogurt',
      dates: '2024 - Present',
      location: 'Londonderry, NH',
      highlights: [
        'Lead the design, development, and deployment of analytics solutions supporting P&L, CAPEX, operations, and supply chain',
        'Partner with business leaders to identify high-value analytics use cases, prioritize initiatives, and tie insights directly to margin, cost, and growth decisions',
        'Own the dashboard and reporting ecosystem (SAP, IBM TM1, Power BI, Azure), ensuring data integrity, performance, and consistent reporting standards',
        'Drive adoption of self-service analytics by converting manual Excel workflows into automated, governed solutions and training stakeholders across finance and operations',
        'Champion a culture of continuous improvement and innovation in analytics, feeding process and data enhancements into forecasting, pricing, and investment decisions',
        'Supported M&A integration by mapping acquired entity financials into the corporate data warehouse and aligning reporting hierarchies with parent company standards',
        'Led database transformation initiatives to consolidate legacy systems from acquired businesses into unified SAP and TM1 environments, enabling seamless cross-entity reporting',
      ],
    },
    {
      title: 'Data Analyst',
      company: 'Better Buying',
      dates: '2023 - 2024',
      location: 'Remote',
      highlights: [
        'Partnered with global brands including Amazon, Nike, Walmart, and Target to analyze purchasing practices and improve supplier relationships',
        'Produced shareholder and client reports from 500K+ supplier records, delivering $2M+ in annualized savings',
        'Conducted consumer and retail trend analysis to link purchasing practices with market behavior and brand performance, supporting strategy discussions with executives and investors',
      ],
    },
  ]

  const education = [
    {
      degree: 'M.S. in Analytics',
      school: 'Georgia Institute of Technology',
      dates: '2029',
      skills: 'Advanced machine learning, statistical modeling, data engineering, and AI applications',
    },
    {
      degree: 'M.S. in Business Analytics',
      school: 'Cornell SC Johnson College of Business',
      dates: '2026',
      skills: 'Agentic AI, Azure-based finance automations, business intelligence, and data-driven decision making',
    },
    {
      degree: 'B.A. Economics & Statistics',
      school: 'University of Vermont',
      dates: '2021',
      skills: 'Economic analysis, statistical methods, quantitative reasoning, and market research',
    },
  ]

  const projects = [
    {
      title: 'Commute Cost Analyzer',
      tech: 'Next.js 14 • TypeScript • Tailwind CSS • Chart.js',
      description:
        'Elevation-aware fuel optimization system that calculates energy consumption for hills and valleys, compares traditional vehicles with hybrids, and provides ROI analysis for vehicle upgrades.',
    },
    {
      title: 'Fragrance Trends Analysis',
      tech: 'Python • Pandas • Plotly • Seaborn',
      description:
        'Comprehensive exploratory data analysis of top 1,000 perfumes using custom web scraping tools to analyze brand performance, gender preferences, and market trends.',
    },
  ]

  const techCategories = [
    {
      title: 'Languages & Query',
      badges: [
        { src: 'https://img.shields.io/badge/Python-c9b8e8?style=for-the-badge&logo=python&logoColor=0a0a12', alt: 'Python' },
        { src: 'https://img.shields.io/badge/SQL-a8c8e8?style=for-the-badge&logo=mysql&logoColor=0a0a12', alt: 'SQL' },
        { src: 'https://img.shields.io/badge/R-f4b8c5?style=for-the-badge&logo=r&logoColor=0a0a12', alt: 'R' },
        { src: 'https://img.shields.io/badge/JavaScript-d4a8e8?style=for-the-badge&logo=javascript&logoColor=0a0a12', alt: 'JavaScript' },
      ],
    },
    {
      title: 'Data & Analytics',
      badges: [
        { src: 'https://img.shields.io/badge/Power_BI-c9b8e8?style=for-the-badge&logo=powerbi&logoColor=0a0a12', alt: 'Power BI' },
        { src: 'https://img.shields.io/badge/Pandas-a8c8e8?style=for-the-badge&logo=pandas&logoColor=0a0a12', alt: 'Pandas' },
        { src: 'https://img.shields.io/badge/NumPy-f4b8c5?style=for-the-badge&logo=numpy&logoColor=0a0a12', alt: 'NumPy' },
        { src: 'https://img.shields.io/badge/Scikit_Learn-d4a8e8?style=for-the-badge&logo=scikitlearn&logoColor=0a0a12', alt: 'Scikit Learn' },
        { src: 'https://img.shields.io/badge/Tableau-c9b8e8?style=for-the-badge&logo=tableau&logoColor=0a0a12', alt: 'Tableau' },
      ],
    },
    {
      title: 'Enterprise & Cloud',
      badges: [
        { src: 'https://img.shields.io/badge/SAP_FICO-a8c8e8?style=for-the-badge&logo=sap&logoColor=0a0a12', alt: 'SAP FICO' },
        { src: 'https://img.shields.io/badge/IBM_TM1-f4b8c5?style=for-the-badge&logo=ibm&logoColor=0a0a12', alt: 'IBM TM1' },
        { src: 'https://img.shields.io/badge/Azure-d4a8e8?style=for-the-badge&logo=microsoftazure&logoColor=0a0a12', alt: 'Azure' },
        { src: 'https://img.shields.io/badge/Databricks-c9b8e8?style=for-the-badge&logo=databricks&logoColor=0a0a12', alt: 'Databricks' },
      ],
    },
    {
      title: 'Web & Design',
      badges: [
        { src: 'https://img.shields.io/badge/React-a8c8e8?style=for-the-badge&logo=react&logoColor=0a0a12', alt: 'React' },
        { src: 'https://img.shields.io/badge/Tailwind-f4b8c5?style=for-the-badge&logo=tailwindcss&logoColor=0a0a12', alt: 'Tailwind' },
        { src: 'https://img.shields.io/badge/Figma-d4a8e8?style=for-the-badge&logo=figma&logoColor=0a0a12', alt: 'Figma' },
      ],
    },
  ]

  const achievements = [
    'Consolidated and automated financial close processes, cutting manual effort by 50%',
    'Built real-time Power BI dashboards for daily, weekly, and monthly KPI tracking',
    'Led P&L management and forecasting for $20M+ monthly revenue streams',
    'Designed NPV/IRR-based CAPEX prioritization, optimizing $30M in spend',
    'Trained and mentored 4 analysts on FP&A automation and dashboard best practices',
  ]

  return (
    <>
      <Nav />
      <main className="wrap" style={{ maxWidth: '900px' }}>
        <ResumeHeader />

        <ResumeSection title="Professional Summary">
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -2 }}
          >
            <p className="job-description" style={{ margin: 0, fontSize: '15px', lineHeight: '1.8' }}>
              Finance-to-Data bridge professional with expertise in FP&A, P&L management, and data analytics. Specializes in
              translating real financial challenges into scalable data solutions, building database-driven pipelines to replace
              manual Excel processes, and implementing agentic AI and Azure-based automations across FP&A workflows.
            </p>
          </motion.div>
        </ResumeSection>

        <ResumeSection title="Key Achievements">
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -2 }}
          >
            <ul className="job-highlights" style={{ margin: 0 }}>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        </ResumeSection>

        <ResumeSection title="Professional Experience">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="education-grid">
            {education.map((edu, index) => (
              <EducationItem key={index} {...edu} />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Tech Constellation">
          <TechConstellation categories={techCategories} />
        </ResumeSection>

        <ResumeSection title="Featured Projects">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </ResumeSection>

        <ResumeSection title="Contact Information" id="contact">
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -2 }}
          >
            <div className="contact-info" style={{ justifyContent: 'flex-start', gap: '32px' }}>
              <div className="contact-item">
                <span>📧</span>
                <a href="mailto:miamurphyvt@gmail.com">miamurphyvt@gmail.com</a>
              </div>
              <div className="contact-item">
                <span>🔗</span>
                <a href="https://linkedin.com/in/miamurphyvt" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
              <div className="contact-item">
                <span>🌐</span>
                <Link href="/">Portfolio Website</Link>
              </div>
            </div>
          </motion.div>
        </ResumeSection>
      </main>
      <footer>
        <div className="wrap">© {new Date().getFullYear()} Mia Murphy</div>
      </footer>
    </>
  )
}
