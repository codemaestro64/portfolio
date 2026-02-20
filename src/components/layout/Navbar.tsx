'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { HOME_LINK_TEXT } from '@/data'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Open Source', href: '#contributions' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)

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
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 my-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-mono font-semibold text-lg gradient-text"
          >
            {HOME_LINK_TEXT}
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

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden mt-3 glass-card rounded-2xl p-4 animate-in slide-in-from-top-2 fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    px-4 py-3 rounded-lg text-sm font-medium transition
                    ${
                      active === link.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted/40'
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar