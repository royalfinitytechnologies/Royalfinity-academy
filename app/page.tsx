'use client'
import Link from 'next/link'
import { useReveal } from './components/useReveal'

export default function HomePage() {
  useReveal()

  return (
    <main>
      {/* ===== HERO ===== */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">Now Enrolling — Batch 2026</div>
          <h1>
            Learn Skills.<br />
            <span className="gold">Use Premium Tools.</span><br />
            Build Your Future.
          </h1>
          <p className="hero-sub">
            Royalfinity Academy gives you real-world experience with free access to all paid tools —
            in an office-like environment where ambition is the dress code.
          </p>
          <div className="hero-actions">
            <Link href="#cta-final" className="btn-primary">Enroll Now</Link>
            <Link href="#courses" className="btn-ghost">View Courses</Link>
          </div>
          <div className="trust-pills">
            <div className="trust-pill"><span className="dot" /> Free Premium Tools</div>
            <div className="trust-pill"><span className="dot" /> Office Environment</div>
            <div className="trust-pill"><span className="dot" /> Practical Training</div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div id="stats">
        <div className="stats-inner">
          {[
            { num: '500+', label: 'Students Trained' },
            { num: '10+', label: 'Premium Tools Free' },
            { num: '4', label: 'Expert Courses' },
            { num: '100%', label: 'Placement Rate' },
            { num: '100%', label: 'Hands-On Projects' },
          ].map((s, i) => (
            <div key={s.label} style={{ display: 'contents' }}>
              {i > 0 && <div className="stat-div" />}
              <div className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== WHY US ===== */}
      <section id="why">
        <div className="section-label">Our Difference</div>
        <h2 className="section-title reveal">
          Why Royalfinity is<br /><em>Unlike Any Other Academy</em>
        </h2>
        <p className="section-desc reveal">
          We didn't build a classroom. We built the future of learning — where you work with the
          same tools as professionals, in an environment that respects your ambition.
        </p>
        <div className="usp-grid">
          {[
            {
              icon: '🛠️', title: 'Free Access to All Premium Tools',
              desc: 'Every student gets fully paid access to industry-leading software used by professionals worldwide. No extra cost, no limitations — just full access from day one.',
              tags: ['Canva Pro', 'Adobe Suite', 'ChatGPT Plus', '+ More'],
              delay: 'reveal-delay-1',
            },
            {
              icon: '🏢', title: 'Real Office-Like Environment',
              desc: 'Study in a professional workspace designed to mirror real corporate environments — ergonomic workstations, high-speed internet, and a culture that drives productivity.',
              tags: ['Dedicated Desks', 'High-Speed WiFi', 'Pro Setup'],
              delay: 'reveal-delay-2',
            },
            {
              icon: '☕', title: 'Complimentary Tea & Coffee',
              desc: 'We believe great work happens when you\'re comfortable. Enjoy unlimited tea and coffee throughout your sessions — because your focus matters more than anything else.',
              tags: ['Free Daily', 'Comfortable Vibe', 'Relaxed Culture'],
              delay: 'reveal-delay-3',
            },
            {
              icon: '🚀', title: '100% Practical, Real-Project Learning',
              desc: 'No passive lectures. Every module is built around real deliverables — live projects, client simulations, and portfolio-ready work that proves your skills to any employer.',
              tags: ['Live Projects', 'Portfolio Ready', 'Mentorship'],
              delay: 'reveal-delay-4',
            },
          ].map((card) => (
            <div key={card.title} className={`usp-card reveal ${card.delay}`}>
              <div className="usp-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="usp-tags">
                {card.tags.map((t) => <span key={t} className="usp-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COURSES ===== */}
      <section id="courses">
        <div className="section-label">Our Programs</div>
        <h2 className="section-title reveal">Courses Built for<br /><em>Real Careers</em></h2>
        <p className="section-desc reveal">
          Each program is crafted with industry experts to ensure you learn exactly what employers
          need — with every tool at your fingertips.
        </p>
        <div className="courses-grid">
          {[
            {
              num: '01', badge: 'Full Stack', title: 'PHP Full Stack Development',
              desc: 'Master server-side programming, database design, and front-end integration. Build complete web applications from scratch with PHP, MySQL, HTML, CSS, and JS.',
              tools: ['PHP', 'MySQL', 'Laravel', 'HTML/CSS', 'JavaScript', 'ChatGPT'],
              delay: 'reveal-delay-1',
            },
            {
              num: '02', badge: 'Full Stack', title: 'MERN Stack Development',
              desc: 'Become a modern full-stack JavaScript developer. Build scalable, real-time web apps using MongoDB, Express, React, and Node.js — the tech stack powering today\'s startups.',
              tools: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'GitHub'],
              delay: 'reveal-delay-2',
            },
            {
              num: '03', badge: 'Marketing', title: 'Digital Marketing',
              desc: 'Master SEO, social media, content strategy, and Google Ads. Run real campaigns with Canva Pro, Google Analytics, and Meta Business Suite from week one.',
              tools: ['Google Ads', 'Meta Ads', 'SEO', 'Canva Pro', 'Analytics', 'Content'],
              delay: 'reveal-delay-3',
            },
            {
              num: '04', badge: 'Marketing', title: 'Performance Marketing',
              desc: 'Specialise in data-driven advertising, conversion optimisation, and ROI-focused campaigns. Work with live ad budgets and real client scenarios.',
              tools: ['Google Ads', 'Meta Ads', 'GA4', 'Looker Studio', 'A/B Testing', 'CRO'],
              delay: 'reveal-delay-4',
            },
          ].map((course) => (
            <div key={course.num} className={`course-card reveal ${course.delay}`}>
              <div className="course-num">{course.num}</div>
              <div className="course-badge">{course.badge}</div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="course-tools">
                {course.tools.map((t) => <span key={t} className="tool-tag">{t}</span>)}
              </div>
              <Link href="/courses/php-stack" className="course-cta">Explore Program</Link>
            </div>
          ))}
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
              <div className="ws-caption">Royalfinity Academy — Ahmedabad Campus</div>
            </div>
            <div className="ws-badges">
              {[
                { icon: '🖥️', text: 'Dedicated Workstations' },
                { icon: '⚡', text: 'High-Speed Fibre Internet' },
                { icon: '☕', text: 'Free Tea & Coffee Daily' },
              ].map((b) => (
                <div key={b.text} className="ws-badge-item">
                  <span>{b.icon}</span>
                  <span className="ws-badge-text">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="workspace-text">
            <div className="section-label">The Environment</div>
            <h2 className="section-title reveal">Where Professionals<br /><em>Are Made</em></h2>
            <p className="section-desc reveal">
              We replicated a real tech company's work culture inside our academy. Because the best
              way to prepare for professional life is to live it — starting day one.
            </p>
            <div className="ws-features">
              {[
                { icon: '🏢', title: 'Professional Workstations', desc: 'Dedicated ergonomic desks with high-spec equipment — your own professional setup every session.', delay: 'reveal-delay-1' },
                { icon: '📶', title: 'Enterprise-Grade Internet', desc: '100 Mbps+ fibre connection ensures zero latency whether you\'re hosting, deploying, or downloading.', delay: 'reveal-delay-2' },
                { icon: '☕', title: 'Complimentary Refreshments', desc: 'Unlimited tea and coffee throughout your learning hours — comfort that fuels deep focus.', delay: 'reveal-delay-3' },
                { icon: '🤝', title: 'Collaborative Work Culture', desc: 'Peer-to-peer learning, group projects, and a community that pushes everyone to grow together.', delay: 'reveal-delay-4' },
              ].map((f) => (
                <div key={f.title} className={`ws-feat reveal ${f.delay}`}>
                  <div className="ws-feat-icon">{f.icon}</div>
                  <div className="ws-feat-text">
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="#cta-final" className="btn-primary">Experience It Yourself</Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="cta-final">
        <div className="cta-bg" />
        <div className="cta-ring" style={{ width: '500px', height: '500px', opacity: 0.08 }} />
        <div className="cta-ring" style={{ width: '700px', height: '700px', opacity: 0.05 }} />
        <div className="cta-ring" style={{ width: '900px', height: '900px', opacity: 0.03 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Your Future Starts Here</div>
          <h2 className="section-title reveal" style={{ maxWidth: '600px', margin: '0 auto 1rem', textAlign: 'center' }}>
            Start Your Career with<br /><em>Real Skills Today</em>
          </h2>
          <p className="section-desc reveal" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
            Join hundreds of students who chose the smarter path — with premium tools, real projects,
            and an environment designed for success.
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
            {['Free Tools Access', 'Office Environment', 'Practical Projects', 'Career Support'].map((g) => (
              <div key={g} className="guarantee-item">{g}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
