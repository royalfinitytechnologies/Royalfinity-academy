'use client'
import Link from 'next/link'
import { useReveal } from '../components/useReveal'

export default function AboutPage() {
  useReveal()

  return (
    <main>
      {/* ===== ABOUT HERO ===== */}
      <section id="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-grid" />
        <div className="about-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            About Us
          </div>
          <div className="hero-badge" style={{ animation: 'fadeDown 0.7s ease both' }}>Est. 2022 — Ahmedabad, India</div>
          <h1>
            We&apos;re Not Just an<br />
            <span className="gold">Academy. We&apos;re a</span><br />
            Launchpad.
          </h1>
          <p>
            Royalfinity was built on one belief — that real-world skills, professional tools, and
            the right environment can change the trajectory of any career. That belief hasn&apos;t changed.
          </p>
          <div className="hero-actions">
            <Link href="#story" className="btn-primary">Our Story</Link>
            <Link href="#team" className="btn-ghost">Meet the Team</Link>
          </div>
        </div>
        <div className="about-hero-line" />
      </section>

      {/* ===== STATS BAR ===== */}
      <div id="stats">
        <div className="stats-inner">
          {[
            { num: '500+', label: 'Students Trained' },
            { num: '3+', label: 'Years Running' },
            { num: '96%', label: 'Placement Rate' },
            { num: '10+', label: 'Industry Mentors' },
            { num: '4', label: 'Flagship Courses' },
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

      {/* ===== STORY ===== */}
      <section id="story">
        <div className="story-inner">
          <div className="story-visual reveal">
            <div className="story-card">
              <span className="story-quote-mark">&ldquo;</span>
              <p className="story-quote-text">
                We didn&apos;t build a classroom. We built the future of learning — where ambition
                has a desk and a deadline.
              </p>
              <div className="story-author">
                <div className="story-author-avatar">RF</div>
                <div className="story-author-info">
                  <strong>Founder, Royalfinity Academy</strong>
                  <span>Ahmedabad, Gujarat</span>
                </div>
              </div>
            </div>
            <div className="story-floating-badge">
              <div className="sfb-num">2022</div>
              <div className="sfb-text">Year We Started</div>
            </div>
          </div>

          <div className="story-text">
            <div className="section-label">Our Story</div>
            <h2 className="section-title reveal">
              Born from a Gap.<br /><em>Built with Purpose.</em>
            </h2>
            <p className="section-desc reveal">
              Royalfinity was born when our founder noticed a painful truth: students were graduating
              from institutes without ever touching the tools professionals actually use. The gap
              between education and employability was massive. So we closed it.
            </p>
            <div className="story-milestones reveal">
              {[
                { year: '2022 — Founded', desc: 'Royalfinity Academy opens its first campus in Ahmedabad with a vision to bridge education and industry reality.' },
                { year: '2023 — Expanded', desc: 'Launched MERN Stack and Digital Marketing courses. Crossed 200+ trained students within the first year.' },
                { year: '2024 — Premium Tools Program', desc: 'Introduced free access to Canva Pro, ChatGPT Plus, Adobe Suite, and 7 more industry tools for all students.' },
                { year: '2025 — 500+ Alumni', desc: 'Our alumni network spans companies across Gujarat and beyond. 96% placement rate, and growing.' },
              ].map((m) => (
                <div key={m.year} className="milestone">
                  <div className="milestone-year">{m.year}</div>
                  <div className="milestone-desc">{m.desc}</div>
                </div>
              ))}
            </div>
            <Link href="#mission" className="btn-primary">Our Mission</Link>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section id="mission">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Direction</div>
          <h2 className="section-title reveal" style={{ maxWidth: '560px', margin: '0 auto 1rem' }}>
            Driven by Mission.<br /><em>Guided by Vision.</em>
          </h2>
          <p className="section-desc reveal" style={{ margin: '0 auto' }}>
            Two anchors that shape every course we build, every student we enroll, and every
            decision we make.
          </p>
        </div>
        <div className="mv-grid">
          <div className="mv-card reveal reveal-delay-1">
            <div className="mv-card-icon">🎯</div>
            <div className="mv-card-label">Mission</div>
            <h3>To Make<br /><em>Real Skills</em> Accessible</h3>
            <p>
              Our mission is to give every student — regardless of background — access to the tools,
              environment, and mentorship that professionals take years to discover. We compress the
              learning curve so you step into your first job ready, not raw.
            </p>
            <div className="mv-card-accent" />
          </div>
          <div className="mv-card reveal reveal-delay-2">
            <div className="mv-card-icon">🔭</div>
            <div className="mv-card-label">Vision</div>
            <h3>India&apos;s Most<br /><em>Practical Academy</em></h3>
            <p>
              We envision a future where no student has to learn on inferior tools or in uninspiring
              classrooms. By 2027, we aim to train 5,000+ students across multiple campuses — each
              one a professional environment, not just a room with chairs.
            </p>
            <div className="mv-card-accent" />
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team">
        <div className="section-label">The People</div>
        <h2 className="section-title reveal">
          The Team Behind<br /><em>Every Success Story</em>
        </h2>
        <p className="section-desc reveal">
          Practitioners first, teachers second. Every mentor at Royalfinity has real industry
          experience — so what you learn is what actually works.
        </p>
        <div className="team-grid">
          {[
            {
              initials: 'RM', name: 'Raj Mehta', role: 'Founder & Lead Mentor',
              desc: '8+ years in full-stack development. Former engineer at a top Ahmedabad product startup. Built Royalfinity to give students what he wished he had at the start.',
              skills: ['PHP', 'React', 'Product Strategy'],
              delay: 'reveal-delay-1',
            },
            {
              initials: 'SP', name: 'Sneha Patel', role: 'Digital Marketing Head',
              desc: '6 years managing campaigns for brands with ₹50L+ monthly ad spends. Brings live campaign experience directly into every classroom session.',
              skills: ['Meta Ads', 'Google Ads', 'SEO'],
              delay: 'reveal-delay-2',
            },
            {
              initials: 'VK', name: 'Vikas Kapoor', role: 'MERN Stack Instructor',
              desc: 'Former CTO of a SaaS startup with 5 years of production-level Node.js and React experience. Makes complex concepts feel obvious.',
              skills: ['MongoDB', 'Node.js', 'System Design'],
              delay: 'reveal-delay-3',
            },
            {
              initials: 'AA', name: 'Anika Arora', role: 'Performance Marketing Lead',
              desc: 'Specialist in data-driven advertising and conversion rate optimisation. Managed performance budgets for e-commerce brands across India.',
              skills: ['Google Analytics 4', 'A/B Testing', 'Looker Studio'],
              delay: 'reveal-delay-4',
            },
          ].map((member) => (
            <div key={member.name} className={`team-card reveal ${member.delay}`}>
              <div className="team-avatar">{member.initials}</div>
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <p>{member.desc}</p>
              <div className="team-skills">
                {member.skills.map((s) => <span key={s} className="team-skill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section id="values">
        <div className="section-label">What We Stand For</div>
        <h2 className="section-title reveal">Five Values That<br /><em>Define Us</em></h2>
        <p className="section-desc reveal">
          These aren&apos;t just words on a wall. They&apos;re how we teach, how we hire, and how we
          measure success.
        </p>
        <div className="values-flex reveal">
          {[
            { num: '01', icon: '🛠️', title: 'Practicality Over Theory', desc: 'Every lesson at Royalfinity has a real-world application. If you can\'t use it in a job tomorrow, we question why it\'s in the curriculum.' },
            { num: '02', icon: '🔓', title: 'Tools Without Barriers', desc: 'Professional tools should not be a privilege. Every student gets full access to premium software from day one — no compromises, no lite versions.' },
            { num: '03', icon: '🏢', title: 'Environment as Education', desc: 'Where you learn shapes how you think. Our office-like campus trains you to think professionally before you ever start professionally.' },
            { num: '04', icon: '🤝', title: 'Honest Mentorship', desc: "We don't tell you what you want to hear. Our mentors give honest, industry-calibrated feedback because that's what actually grows careers." },
            { num: '05', icon: '🚀', title: 'Outcomes Over Enrollment', desc: 'Our success metric is not how many students enroll. It\'s how many land great jobs, launch projects, and build careers they\'re proud of.' },
          ].map((v) => (
            <div key={v.num} className="value-row">
              <div className="value-num">{v.num}</div>
              <div className="value-body">
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
              <div className="value-icon">{v.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="cta-final">
        <div className="cta-bg" />
        <div className="cta-ring" style={{ width: '500px', height: '500px', opacity: 0.08 }} />
        <div className="cta-ring" style={{ width: '700px', height: '700px', opacity: 0.05 }} />
        <div className="cta-ring" style={{ width: '900px', height: '900px', opacity: 0.03 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Join the Academy</div>
          <h2 className="section-title reveal" style={{ maxWidth: '600px', margin: '0 auto 1rem', textAlign: 'center' }}>
            You&apos;ve Read Our Story.<br /><em>Now Start Yours.</em>
          </h2>
          <p className="section-desc reveal" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
            Join hundreds of students who walked into Royalfinity with a dream and walked out with
            a career. Batch 2025 is now enrolling.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }} className="reveal">
            <a href="tel:+91XXXXXXXXXX" className="btn-primary" style={{ fontSize: '0.9rem', padding: '1rem 2.8rem' }}>Enroll Now</a>
            <a href="mailto:hello@royalfinity.com" className="btn-ghost" style={{ fontSize: '0.9rem', padding: '1rem 2.2rem' }}>Talk to an Advisor</a>
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
