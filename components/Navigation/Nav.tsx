'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isResumePage = pathname === '/resume'

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#dashboards', label: 'Dashboards' },
    { href: '#apps', label: 'Apps' },
    { href: '#analysis', label: 'Analysis' },
    { href: '#about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ]

  // For hash links, if we're on resume page, prepend '/' to go to main page first
  const getHref = (href: string) => {
    if (href.startsWith('#') && isResumePage) {
      return `/${href}`
    }
    return href
  }

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <motion.div 
          className="brand"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: 'inherit' }}>
            <span className="pulse"></span>
            Mia Murphy · <span className="brand-glow">Finance × Data</span>
          </Link>
        </motion.div>
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={getHref(item.href)}>{item.label}</Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
