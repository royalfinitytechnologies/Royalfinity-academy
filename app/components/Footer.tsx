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
            <a href="#" className="social-link" aria-label="Instagram">IG</a>
            <a href="#" className="social-link" aria-label="LinkedIn">LI</a>
            <a href="#" className="social-link" aria-label="YouTube">YT</a>
            <a href="#" className="social-link" aria-label="Twitter">X</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Programs</h4>
          <ul>
            <li><Link href="/#courses">PHP Full Stack</Link></li>
            <li><Link href="/#courses">MERN Stack</Link></li>
            <li><Link href="/#courses">Digital Marketing</Link></li>
            <li><Link href="/#courses">Performance Marketing</Link></li>
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
          <p>Ahmedabad, Gujarat, India</p>
          <strong>Email</strong>
          <p>hello@royalfinity.com</p>
          <strong>Phone</strong>
          <p>+91 XXXXXXXXXX</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Royalfinity Academy. All rights reserved.</p>
        <span>Est. 2022 — Ahmedabad, India</span>
      </div>
    </footer>
  )
}
