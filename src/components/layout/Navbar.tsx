'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Open Source', href: '#open-source' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sections = navLinks
      .map(link => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 my-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-mono font-semibold text-lg gradient-text">
            dev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex glass-card gap-8 rounded-full h-14 px-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  active === link.href ? 'nav-link-active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* theme toggle later */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
