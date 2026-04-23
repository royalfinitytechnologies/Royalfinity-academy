'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>

        {/* ===== HERO ===== */}
        <section id="hero">
          <div className="hero-bg"></div>
          <div className="hero-grid"></div>
          <div className="hero-content">
            <div className="hero-badge">Now Enrolling — Batch 2025</div>
            <h1>
              Learn Skills.<br />
              <span className="gold">Use Premium Tools.</span><br />
              Build Your Future.
            </h1>
            <p className="hero-sub">
              Royalfinity Academy gives you real-world experience with free access to
              all paid tools — in an office-like environment where ambition is the dress code.
            </p>
            <div className="hero-actions">
              <a href="#cta-final" className="btn-primary">Enroll Now</a>
              <a href="#courses" className="btn-ghost">View Courses</a>
            </div>
            <div className="trust-pills">
              <div className="trust-pill"><span className="dot"></span> Free Premium Tools</div>
              <div className="trust-pill"><span className="dot"></span> Office Environment</div>
              <div className="trust-pill"><span className="dot"></span> Practical Training</div>
            </div>
          </div>
          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <div id="stats">
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-num">500+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">10+</div>
              <div className="stat-label">Premium Tools Free</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">4</div>
              <div className="stat-label">Expert Courses</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">96%</div>
              <div className="stat-label">Placement Rate</div>
            </div>
            <div className="stat-div"></div>
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Hands-On Projects</div>
            </div>
          </div>
        </div>

        {/* ===== WHY US ===== */}
        <section id="why">
          <div className="section-label">Our Difference</div>
          <h2 className="section-title reveal">
            Why Royalfinity is<br /><em>Unlike Any Other Academy</em>
          </h2>
          <p className="section-desc reveal">
            We didn&apos;t build a classroom. We built the future of learning — where you work
            with the same tools as professionals, in an environment that respects your ambition.
          </p>
          <div className="usp-grid">
            <div className="usp-card reveal reveal-delay-1">
              <div className="usp-icon">🛠️</div>
              <h3>Free Access to All Premium Tools</h3>
              <p>
                Every student gets fully paid access to industry-leading software used by
                professionals worldwide. No extra cost, no limitations — just full access from day one.
              </p>
              <div className="usp-tags">
                <span className="usp-tag">Canva Pro</span>
                <span className="usp-tag">Adobe Suite</span>
                <span className="usp-tag">ChatGPT Plus</span>
                <span className="usp-tag">+ More</span>
              </div>
            </div>
            <div className="usp-card reveal reveal-delay-2">
              <div className="usp-icon">🏢</div>
              <h3>Real Office-Like Environment</h3>
              <p>
                Study in a professional workspace designed to mirror real corporate environments
                — ergonomic workstations, high-speed internet, and a culture that drives productivity.
              </p>
              <div className="usp-tags">
                <span className="usp-tag">Dedicated Desks</span>
                <span className="usp-tag">High-Speed WiFi</span>
                <span className="usp-tag">Pro Setup</span>
              </div>
            </div>
            <div className="usp-card reveal reveal-delay-3">
              <div className="usp-icon">☕</div>
              <h3>Complimentary Tea &amp; Coffee</h3>
              <p>
                We believe great work happens when you&apos;re comfortable. Enjoy unlimited tea
                and coffee throughout your sessions — because your focus matters most.
              </p>
              <div className="usp-tags">
                <span className="usp-tag">Free Daily</span>
                <span className="usp-tag">Comfortable Vibe</span>
                <span className="usp-tag">Relaxed Culture</span>
              </div>
            </div>
            <div className="usp-card reveal reveal-delay-4">
              <div className="usp-icon">🚀</div>
              <h3>100% Practical, Real-Project Learning</h3>
              <p>
                No passive lectures. Every module is built around real deliverables — live projects,
                client simulations, and portfolio-ready work that proves your skills.
              </p>
              <div className="usp-tags">
                <span className="usp-tag">Live Projects</span>
                <span className="usp-tag">Portfolio Ready</span>
                <span className="usp-tag">Mentorship</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== COURSES ===== */}
        <section id="courses">
          <div className="section-label">Our Programs</div>
          <h2 className="section-title reveal">
            Courses Built for<br /><em>Real Careers</em>
          </h2>
          <p className="section-desc reveal">
            Each program is crafted with industry experts to ensure you learn exactly what
            employers need — with every tool at your fingertips.
          </p>
          <div className="courses-grid">
            <div className="course-card reveal reveal-delay-1">
              <div className="course-num">01</div>
              <div className="course-badge">Full Stack</div>
              <h3>PHP Full Stack Development</h3>
              <p>
                Master server-side programming, database design, and front-end integration.
                Build complete web applications from scratch with PHP, MySQL, HTML, CSS, and JS.
              </p>
              <div className="course-tools">
                <span className="tool-tag">PHP</span>
                <span className="tool-tag">MySQL</span>
                <span className="tool-tag">Laravel</span>
                <span className="tool-tag">HTML/CSS</span>
                <span className="tool-tag">JavaScript</span>
                <span className="tool-tag">ChatGPT</span>
              </div>
              <Link href="/courses/php-stack" className="course-cta">Explore Program</Link>
            </div>
            <div className="course-card reveal reveal-delay-2">
              <div className="course-num">02</div>
              <div className="course-badge">Full Stack</div>
              <h3>MERN Stack Development</h3>
              <p>
                Become a modern full-stack JavaScript developer. Build scalable, real-time web
                apps using MongoDB, Express, React, and Node.js — the tech stack powering today&apos;s startups.
              </p>
              <div className="course-tools">
                <span className="tool-tag">MongoDB</span>
                <span className="tool-tag">Express.js</span>
                <span className="tool-tag">React</span>
                <span className="tool-tag">Node.js</span>
                <span className="tool-tag">REST APIs</span>
                <span className="tool-tag">GitHub</span>
              </div>
              <Link href="/courses/mern-stack" className="course-cta">Explore Program</Link>
            </div>
            <div className="course-card reveal reveal-delay-3">
              <div className="course-num">03</div>
              <div className="course-badge">Marketing</div>
              <h3>Digital Marketing</h3>
              <p>
                From SEO and social media to content strategy and analytics — learn how to build
                powerful digital presence and run campaigns that generate measurable business results.
              </p>
              <div className="course-tools">
                <span className="tool-tag">Canva Pro</span>
                <span className="tool-tag">Google Ads</span>
                <span className="tool-tag">Meta Ads</span>
                <span className="tool-tag">SEMrush</span>
                <span className="tool-tag">ChatGPT</span>
                <span className="tool-tag">Adobe</span>
              </div>
              <Link href="/courses/digital-marketing" className="course-cta">Explore Program</Link>
            </div>
            <div className="course-card reveal reveal-delay-4">
              <div className="course-num">04</div>
              <div className="course-badge">Advanced</div>
              <h3>Performance Marketing</h3>
              <p>
                Specialise in data-driven advertising. Master paid media, conversion optimisation,
                A/B testing, and ROI analysis to run campaigns that directly impact business revenue.
              </p>
              <div className="course-tools">
                <span className="tool-tag">Google Ads</span>
                <span className="tool-tag">Meta Business</span>
                <span className="tool-tag">Analytics 4</span>
                <span className="tool-tag">Hotjar</span>
                <span className="tool-tag">ChatGPT</span>
                <span className="tool-tag">Looker</span>
              </div>
              <Link href="/courses/performance-marketing" className="course-cta">Explore Program</Link>
            </div>
          </div>
        </section>

        {/* ===== WORKSPACE ===== */}
        <section id="workspace">
          <div className="workspace-inner">
            <div className="workspace-visual reveal">
              <div className="ws-main-card">
                <div className="ws-desk-scene">
                  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="170" width="340" height="12" rx="2" fill="#2A2050"/>
                    <rect x="50" y="182" width="8" height="60" rx="2" fill="#1A1535"/>
                    <rect x="342" y="182" width="8" height="60" rx="2" fill="#1A1535"/>
                    <rect x="130" y="70" width="140" height="100" rx="4" fill="#141030" stroke="#C9A84C" strokeWidth="1"/>
                    <rect x="134" y="74" width="132" height="88" rx="2" fill="#0D0A1A"/>
                    <rect x="134" y="74" width="132" height="88" rx="2" fill="url(#screenGlow)"/>
                    <rect x="142" y="82" width="60" height="3" rx="1" fill="#7C5CFC" opacity="0.8"/>
                    <rect x="142" y="89" width="90" height="3" rx="1" fill="#C9A84C" opacity="0.6"/>
                    <rect x="142" y="96" width="45" height="3" rx="1" fill="#5DCAA5" opacity="0.7"/>
                    <rect x="142" y="103" width="75" height="3" rx="1" fill="#7C5CFC" opacity="0.5"/>
                    <rect x="142" y="110" width="55" height="3" rx="1" fill="#C9A84C" opacity="0.4"/>
                    <rect x="142" y="117" width="80" height="3" rx="1" fill="#5DCAA5" opacity="0.6"/>
                    <rect x="142" y="124" width="40" height="3" rx="1" fill="#F5F3EE" opacity="0.3"/>
                    <rect x="142" y="131" width="65" height="3" rx="1" fill="#7C5CFC" opacity="0.5"/>
                    <rect x="142" y="138" width="50" height="3" rx="1" fill="#C9A84C" opacity="0.3"/>
                    <rect x="142" y="148" width="25" height="3" rx="1" fill="#5DCAA5" opacity="0.7"/>
                    <rect x="150" y="148" width="8" height="3" rx="1" fill="#F5F3EE" opacity="0.8"/>
                    <rect x="193" y="170" width="14" height="10" rx="1" fill="#2A2050"/>
                    <rect x="182" y="178" width="36" height="4" rx="2" fill="#2A2050"/>
                    <rect x="160" y="185" width="80" height="22" rx="2" fill="#1A1535" stroke="#C9A84C" strokeWidth="0.5" opacity="0.7"/>
                    <rect x="164" y="189" width="72" height="3" rx="1" fill="#2A2050"/>
                    <rect x="164" y="195" width="72" height="3" rx="1" fill="#2A2050"/>
                    <rect x="164" y="201" width="50" height="3" rx="1" fill="#2A2050"/>
                    <rect x="250" y="185" width="22" height="28" rx="8" fill="#1A1535" stroke="#C9A84C" strokeWidth="0.5" opacity="0.7"/>
                    <line x1="261" y1="185" x2="261" y2="200" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5"/>
                    <rect x="80" y="150" width="24" height="26" rx="3" fill="#1A1535" stroke="#C9A84C" strokeWidth="1"/>
                    <path d="M104 158 Q115 158 115 165 Q115 172 104 172" stroke="#C9A84C" strokeWidth="1" fill="none"/>
                    <rect x="83" y="153" width="18" height="8" rx="1" fill="#2A2050" opacity="0.7"/>
                    <path d="M88 148 Q90 143 88 138" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4"/>
                    <path d="M93 147 Q95 142 93 137" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4"/>
                    <path d="M98 148 Q100 143 98 138" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4"/>
                    <rect x="306" y="148" width="45" height="32" rx="2" fill="#1A1535" stroke="#C9A84C" strokeWidth="0.5" opacity="0.7"/>
                    <rect x="310" y="153" width="37" height="2" rx="1" fill="#2A2050"/>
                    <rect x="310" y="158" width="30" height="2" rx="1" fill="#2A2050"/>
                    <rect x="310" y="163" width="35" height="2" rx="1" fill="#2A2050"/>
                    <rect x="310" y="168" width="22" height="2" rx="1" fill="#2A2050"/>
                    <rect x="355" y="148" width="16" height="22" rx="2" fill="#1A1535"/>
                    <circle cx="358" cy="143" r="7" fill="#0F6E56" opacity="0.7"/>
                    <circle cx="365" cy="141" r="5" fill="#1D9E75" opacity="0.7"/>
                    <circle cx="363" cy="148" r="4" fill="#0F6E56" opacity="0.5"/>
                    <rect x="30" y="170" width="340" height="2" rx="1" fill="#C9A84C" opacity="0.3"/>
                    <ellipse cx="200" cy="200" rx="120" ry="20" fill="#7C5CFC" opacity="0.05"/>
                    <defs>
                      <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.15"/>
                        <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className="ws-caption">Royalfinity Academy — Faridabad Campus</div>
              </div>
              <div className="ws-badges">
                <div className="ws-badge-item">
                  <span>🖥️</span>
                  <span className="ws-badge-text">Dedicated Workstations</span>
                </div>
                <div className="ws-badge-item">
                  <span>⚡</span>
                  <span className="ws-badge-text">High-Speed Fibre Internet</span>
                </div>
                <div className="ws-badge-item">
                  <span>☕</span>
                  <span className="ws-badge-text">Free Tea &amp; Coffee Daily</span>
                </div>
              </div>
            </div>
            <div className="workspace-text">
              <div className="section-label">The Environment</div>
              <h2 className="section-title reveal">
                Where Professionals<br /><em>Are Made</em>
              </h2>
              <p className="section-desc reveal">
                We replicated a real tech company&apos;s work culture inside our academy.
                Because the best way to prepare for professional life is to live it — starting day one.
              </p>
              <div className="ws-features">
                <div className="ws-feat reveal reveal-delay-1">
                  <div className="ws-feat-icon">🏢</div>
                  <div className="ws-feat-text">
                    <strong>Professional Workstations</strong>
                    <span>Dedicated ergonomic desks with high-spec equipment — your own professional setup every session.</span>
                  </div>
                </div>
                <div className="ws-feat reveal reveal-delay-2">
                  <div className="ws-feat-icon">📶</div>
                  <div className="ws-feat-text">
                    <strong>Enterprise-Grade Internet</strong>
                    <span>100 Mbps+ fibre connection ensures zero latency whether you&apos;re hosting, deploying, or downloading.</span>
                  </div>
                </div>
                <div className="ws-feat reveal reveal-delay-3">
                  <div className="ws-feat-icon">☕</div>
                  <div className="ws-feat-text">
                    <strong>Complimentary Refreshments</strong>
                    <span>Unlimited tea and coffee throughout your learning hours — comfort that fuels deep focus.</span>
                  </div>
                </div>
                <div className="ws-feat reveal reveal-delay-4">
                  <div className="ws-feat-icon">🤝</div>
                  <div className="ws-feat-text">
                    <strong>Collaborative Work Culture</strong>
                    <span>Peer-to-peer learning, group projects, and a community that pushes everyone to grow together.</span>
                  </div>
                </div>
              </div>
              <a href="#cta-final" className="btn-primary">Experience It Yourself</a>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        {/* <section id="testimonials">
          <div className="section-label">Student Stories</div>
          <h2 className="section-title reveal">
            Real Results from<br /><em>Real Students</em>
          </h2>
          <p className="section-desc reveal">
            Hear from the students who took the leap — and built the career they always wanted.
          </p>
          <div className="testi-grid">
            <div className="testi-card reveal reveal-delay-1">
              <div className="video-thumb">
                <div className="play-btn"></div>
              </div>
              <div className="testi-student">
                <div className="student-avatar">RK</div>
                <div className="student-info">
                  <strong>Rahul Kumar</strong>
                  <span>MERN Stack Graduate</span>
                </div>
              </div>
              <p className="testi-quote">
                &quot;The office environment and premium tools access completely changed how I approach
                work. I landed a job at a startup within 2 months of completing the course.&quot;
              </p>
              <div className="testi-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
            <div className="testi-card reveal reveal-delay-2">
              <div className="video-thumb">
                <div className="play-btn"></div>
              </div>
              <div className="testi-student">
                <div className="student-avatar">PS</div>
                <div className="student-info">
                  <strong>Priya Sharma</strong>
                  <span>Digital Marketing Graduate</span>
                </div>
              </div>
              <p className="testi-quote">
                &quot;I never thought I&apos;d run actual Google Ads campaigns during training. Royalfinity
                gave me real experience — not just theory. My clients are already seeing results.&quot;
              </p>
              <div className="testi-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
            <div className="testi-card reveal reveal-delay-3">
              <div className="video-thumb">
                <div className="play-btn"></div>
              </div>
              <div className="testi-student">
                <div className="student-avatar">AV</div>
                <div className="student-info">
                  <strong>Arjun Verma</strong>
                  <span>PHP Full Stack Graduate</span>
                </div>
              </div>
              <p className="testi-quote">
                &quot;The combination of free Adobe Suite, ChatGPT Plus, and hands-on projects means
                you graduate with a portfolio that actually impresses employers. Best decision ever.&quot;
              </p>
              <div className="testi-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
        </section> */}

        {/* ===== FINAL CTA ===== */}
        <section id="cta-final">
          <div className="cta-bg"></div>
          <div className="cta-ring" style={{ width: 500, height: 500, opacity: 0.08 }}></div>
          <div className="cta-ring" style={{ width: 700, height: 700, opacity: 0.05 }}></div>
          <div className="cta-ring" style={{ width: 900, height: 900, opacity: 0.03 }}></div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="section-label">Your Future Starts Here</div>
            <h2 className="section-title reveal" style={{ maxWidth: 600 }}>
              Start Your Career with<br /><em>Real Skills Today</em>
            </h2>
            <p className="section-desc reveal" style={{ margin: '0 auto 3rem' }}>
              Join hundreds of students who chose the smarter path — with premium tools,
              real projects, and an environment designed for success.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }} className="reveal">
              <a href="tel:+919211816999" className="btn-primary" style={{ fontSize: '0.9rem', padding: '1rem 2.8rem' }}>
                Join Royalfinity Academy
              </a>
              <a href="mailto:info@royalfinityacademy.com" className="btn-ghost" style={{ fontSize: '0.9rem', padding: '1rem 2.2rem' }}>
                Talk to an Advisor
              </a>
            </div>
            <div className="cta-guarantee reveal">
              <div className="guarantee-item">Free Tools Access</div>
              <div className="guarantee-item">Office Environment</div>
              <div className="guarantee-item">Practical Projects</div>
              <div className="guarantee-item">Career Support</div>
            </div>
          </div>
        </section>

      </main>

    </>
  )
}
