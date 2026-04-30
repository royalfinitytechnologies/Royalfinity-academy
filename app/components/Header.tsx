'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const courses = [
  {
    href: '/courses/php-stack',
    icon: '🛠️',
    iconClass: 'rf-course-icon php',
    name: 'PHP Full Stack Development',
    desc: 'Build complete web apps with PHP, MySQL & Laravel from scratch.',
    tags: ['PHP', 'MySQL', 'Laravel', 'JavaScript'],
  },
  {
    href: '/courses/mern-stack',
    icon: '⚛️',
    iconClass: 'rf-course-icon mern',
    name: 'MERN Stack Development',
    desc: 'Modern JavaScript full-stack with MongoDB, React & Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    href: '/courses/digital-marketing',
    icon: '📢',
    iconClass: 'rf-course-icon dm',
    name: 'Digital Marketing',
    desc: 'SEO, social media, Google Ads & content strategy that converts.',
    tags: ['SEO', 'Google Ads', 'Canva Pro', 'Analytics'],
  },
  {
    href: '/courses/performance-marketing',
    icon: '📈',
    iconClass: 'rf-course-icon pm',
    name: 'Performance Marketing',
    desc: 'Data-driven paid media, ROI analysis & conversion optimization.',
    tags: ['Meta Ads', 'A/B Testing', 'CRO', 'Analytics'],
  },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About'},
  { href: '/why-us', label: 'Why Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const megaRef = useRef<HTMLLIElement>(null)

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mega menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMegaOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Close mega menu on outside click
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [pathname])

  return (
    <>
      <header id="rf-header" className={scrolled ? 'scrolled' : ''}>
        {/* Logo */}
        <Link href="/" className="rf-logo">
          <Image
            src="/images/logo.png"
            alt="Royalfinity Logo"
            width={38}
            height={38}
            className="rf-logo-img"
          />
          <div className="rf-logo-text">
            <span className="rf-logo-name">Royalfinity</span>
            <span className="rf-logo-sub">Academy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav>
          <ul className="rf-nav">
            <li>
              <Link
                href="/"
                className={pathname === '/' ? 'active-link' : ''}
              >
                Home
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li ref={megaRef}>
              <button
                className={`rf-courses-btn${megaOpen ? ' open' : ''}`}
                aria-expanded={megaOpen}
                onClick={() => setMegaOpen((prev) => !prev)}
              >
                Courses
                <svg className="rf-chevron" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Mega Menu */}
              <div
                className={`rf-mega${megaOpen ? ' visible' : ''}`}
                role="menu"
              >
                <div className="rf-mega-header">
                  <span className="rf-mega-title">Our Programs</span>
                  <span className="rf-mega-badge">Batch 2025 Open</span>
                </div>

                <div className="rf-mega-grid">
                  {courses.map((course) => (
                    <Link
                      key={course.href}
                      href={course.href}
                      className="rf-course-card"
                      role="menuitem"
                      onClick={() => setMegaOpen(false)}
                    >
                      <div className={course.iconClass}>{course.icon}</div>
                      <div className="rf-course-info">
                        <div className="rf-course-name">{course.name}</div>
                        <div className="rf-course-desc">{course.desc}</div>
                        <div className="rf-course-tags">
                          {course.tags.map((tag) => (
                            <span key={tag} className="rf-course-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="rf-mega-footer">
                  <span className="rf-mega-footer-text">
                    Free premium tools included in all courses
                  </span>
                  <Link
                    href="/#courses"
                    className="rf-mega-footer-link"
                    onClick={() => setMegaOpen(false)}
                  >
                    View All Programs
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </li>

            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active-link' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="rf-header-cta">
          <Link href="/contact" className="rf-btn-enroll">
            Enroll Now
          </Link>
          <button
            className="rf-hamburger"
            id="rfHamburger"
            aria-label="Menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span
              style={{
                transform: mobileOpen
                  ? 'rotate(45deg) translate(5px, 5px)'
                  : '',
              }}
            />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span
              style={{
                transform: mobileOpen
                  ? 'rotate(-45deg) translate(5px, -5px)'
                  : '',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`rf-mobile-menu${mobileOpen ? ' open' : ''}`}>
        <Link href="/" className="rf-mobile-link" onClick={() => setMobileOpen(false)}>
          Home
        </Link>
        <Link href="/about" className="rf-mobile-link" onClick={() => setMobileOpen(false)}>
          About
        </Link>
        <Link href="/why-us" className="rf-mobile-link" onClick={() => setMobileOpen(false)}>
          Why Us
        </Link>
        <Link href="/contact" className="rf-mobile-link" onClick={() => setMobileOpen(false)}>
          Contact
        </Link>

        <div className="rf-mobile-courses-label">Our Courses</div>

        {courses.map((course) => (
          <Link
            key={course.href}
            href={course.href}
            className="rf-mobile-course-item"
            onClick={() => setMobileOpen(false)}
          >
            <div
              className={course.iconClass}
              style={{ width: 36, height: 36, fontSize: '1rem' }}
            >
              {course.icon}
            </div>
            <span>{course.name}</span>
          </Link>
        ))}

        <Link
          href="/contact"
          className="rf-btn-enroll"
          style={{ marginTop: '1.5rem', textAlign: 'center', display: 'block' }}
          onClick={() => setMobileOpen(false)}
        >
          Enroll Now
        </Link>
      </div>
    </>
  )
}