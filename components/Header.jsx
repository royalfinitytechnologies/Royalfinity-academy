'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const courses = [
  {
    href: '/courses/php-stack',
    icon: '🛠️',
    iconCls: 'php',
    name: 'PHP Full Stack Development',
    desc: 'Build complete web apps with PHP, MySQL & Laravel from scratch.',
    tags: ['PHP', 'MySQL', 'Laravel', 'JavaScript'],
  },
  {
    href: '/courses/mern-stack',
    icon: '⚛️',
    iconCls: 'mern',
    name: 'MERN Stack Development',
    desc: 'Modern JavaScript full-stack with MongoDB, React & Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    href: '/courses/digital-marketing',
    icon: '📢',
    iconCls: 'dm',
    name: 'Digital Marketing',
    desc: 'SEO, social media, Google Ads & content strategy that converts.',
    tags: ['SEO', 'Google Ads', 'Canva Pro', 'Analytics'],
  },
  {
    href: '/courses/performance-marketing',
    icon: '📈',
    iconCls: 'pm',
    name: 'Performance Marketing',
    desc: 'Data-driven paid media, ROI analysis & conversion optimization.',
    tags: ['Meta Ads', 'A/B Testing', 'CRO', 'Analytics'],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header id="rf-header" className={scrolled ? 'scrolled' : ''}>

        {/* ── LOGO ── */}
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

        {/* ── DESKTOP NAV ── */}
        <nav>
          <ul className="rf-nav">
            <li>
              <Link href="/" className={pathname === '/' ? 'active-link' : ''}>
                Home
              </Link>
            </li>

            <li>
              <button
                className={`rf-courses-btn ${megaOpen ? 'open' : ''}`}
                onClick={() => setMegaOpen(!megaOpen)}
              >
                Courses
                <svg className="rf-chevron" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* ── MEGA MENU ── */}
              <div className={`rf-mega ${megaOpen ? 'visible' : ''}`}>

                <div className="rf-mega-header">
                  <span className="rf-mega-title">Our Programs</span>
                  <span className="rf-mega-badge">Batch 2025 Open</span>
                </div>

                <div className="rf-mega-grid">
                  {courses.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="rf-course-card"
                      role="menuitem"
                      onClick={() => setMegaOpen(false)}
                    >
                      <div className={`rf-course-icon ${c.iconCls}`}>{c.icon}</div>
                      <div className="rf-course-info">
                        <div className="rf-course-name">{c.name}</div>
                        <div className="rf-course-desc">{c.desc}</div>
                        <div className="rf-course-tags">
                          {c.tags.map((t) => (
                            <span key={t} className="rf-course-tag">{t}</span>
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>

              </div>
            </li>

            <li>
              <Link href="/why-us" className={pathname === '/why-us' ? 'active-link' : ''}>
                Why Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? 'active-link' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* ── CTA + HAMBURGER ── */}
        <div className="rf-header-cta">
          <Link href="/contact" className="rf-btn-enroll">Enroll Now</Link>
          <button
            className="rf-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ── OVERLAY (closes mega on outside click) ── */}
      {megaOpen && (
        <div className="rf-overlay active" onClick={() => setMegaOpen(false)} />
      )}

      {/* ── MOBILE MENU ── */}
      <div className={`rf-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <Link href="/" className="rf-mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
        <div className="rf-mobile-courses">
          <p className="rf-mobile-section-label">Courses</p>
          {courses.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rf-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {c.icon} {c.name}
            </Link>
          ))}
        </div>
        <Link href="/why-us"  className="rf-mobile-link" onClick={() => setMobileOpen(false)}>Why Us</Link>
        <Link href="/contact" className="rf-mobile-link" onClick={() => setMobileOpen(false)}>Contact</Link>
      </div>
    </>
  )
}