import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <Link href="/" className="footer-brand-logo">
            Royal<span>finity</span> Academy
          </Link>
          <p>
            India&apos;s most premium skill-based learning academy — where real tools,
            a real environment, and real projects create real careers.
          </p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/royalfinitytechnologies"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              IN
            </a>
            <a href="#" className="social-link">IG</a>
            <a href="#" className="social-link">YT</a>
            <a href="#" className="social-link">FB</a>
          </div>
        </div>

        {/* Courses */}
        <div className="footer-col">
          <h4>Courses</h4>
          <ul>
            <li><Link href="/courses/php-stack">PHP Full Stack</Link></li>
            <li><Link href="/courses/mern-stack">MERN Stack</Link></li>
            <li><Link href="/courses/digital-marketing">Digital Marketing</Link></li>
            <li><Link href="/courses/performance-marketing">Performance Marketing</Link></li>
          </ul>
        </div>

        {/* Academy */}
        <div className="footer-col">
          <h4>Academy</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/why-us">Why Us</Link></li>
            <li><Link href="/contact">Enroll Now</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col footer-contact">
          <h4>Contact</h4>
          <strong>Address</strong>
          <p>5A/81, 1st Floor, NIT-5, Faridabad, Haryana - 121001</p>
          <strong>Email</strong>
          <p>info@royalfinityacademy.com</p>
          <strong>Phone</strong>
          <p>+91 92118 16999</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Royalfinity Academy. All rights reserved.</p>
        <span>LEARN · BUILD · LAUNCH</span>
      </div>
    </footer>
  )
}
