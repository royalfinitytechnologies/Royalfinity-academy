import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="nav-logo">
            Royal<span style={{ color: '#C9A84C', fontStyle: 'italic' }}>finity</span>
          </Link>
          <p>
            Built on one belief — that real-world skills, professional tools, and the right
            environment can change the trajectory of any career.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/royalfinityacademy" className="social-link" aria-label="Instagram">IG</a>
            <a href="https://www.linkedin.com/company/royalfinity-academy/" className="social-link" aria-label="LinkedIn">LI</a>
            <a href="https://www.facebook.com/profile.php?id=61578399720655" className="social-link" aria-label="Facebook">FB</a>
            <a href="https://wa.me/+919211816999" className="social-link" aria-label="WhatsApp">WA</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Programs</h4>
          <ul>
            <li><Link href="/courses/php-stack">PHP Full Stack</Link></li>
            <li><Link href="/courses/mern-stack">MERN Stack</Link></li>
            <li><Link href="/courses/digital-marketing">Digital Marketing</Link></li>
            <li><Link href="/courses/performance-marketing">Performance Marketing</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Academy</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/about#team">Our Team</Link></li>
            <li><Link href="/about#story">Our Story</Link></li>
            <li><Link href="/#workspace">Campus</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contact</h4>
          <strong>Location</strong>
          <p>Faridabad, Haryana, India</p>
          <strong>Email</strong>
          <p>info@royalfinityacademy.com</p>
          <strong>Phone</strong>
          <p>+91 92118 16999</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Royalfinity Academy. All rights reserved.</p>
        <span>Est. 2026 — Faridabad, Haryana, India</span>
      </div>
    </footer>
  )
}
