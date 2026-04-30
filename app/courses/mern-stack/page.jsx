'use client';

import { useEffect } from 'react';
import Link from 'next/link';
// import { useReveal } from '././././components/useReveal'

// export const metadata = {
//   title: 'MERN Stack Developer Course | Royalfinity',
//   description:
//     'Master MongoDB, Express, React & Node.js. 6-month full-stack program with real office environment, live projects & placement assistance. Enroll at ₹15,999.',
// };

export default function MernStackPage() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <Link href="/courses">Courses</Link>
          <span className="sep">›</span>
          <span>MERN Stack</span>
        </nav>
      </div>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-badge">New Batch — 2025</div>
          <div className="hero-stack-badges">
            <span className="stack-pill stack-php">MongoDB</span>
            <span className="stack-pill stack-laravel">Express.js</span>
            <span className="stack-pill stack-mysql">React.js</span>
            <span className="stack-pill stack-html">Node.js</span>
            <span className="stack-pill stack-js">REST APIs</span>
          </div>
          <h1 className="hero-title">
            Become a <em>MERN Stack</em><br />Developer
          </h1>
          <p className="hero-sub">
            Master the most powerful JavaScript full-stack combination — MongoDB, Express, React and Node. Build
            real-world production apps, work in a real office environment, and land your developer job with
            Royalfinity&apos;s premium mentorship.
          </p>
          <div className="hero-actions">
            <Link href="#contact" className="btn-primary">Enroll Now</Link>
            <Link href="#overview" className="btn-ghost">View Curriculum</Link>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item"><span className="dot"></span>6 Months Duration</div>
            <div className="hero-meta-item"><span className="dot"></span>Live + Recorded</div>
            <div className="hero-meta-item"><span className="dot"></span>Hindi + English</div>
            <div className="hero-meta-item"><span className="dot"></span>Certificate Provided</div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* STATS BAR */}
      <div id="course-stats">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">400+</div>
            <div className="stat-label">Students Placed</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <div className="stat-num">6</div>
            <div className="stat-label">Months Program</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <div className="stat-num">10+</div>
            <div className="stat-label">Live Projects</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <div className="stat-num">4.8★</div>
            <div className="stat-label">Avg. Rating</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <div className="stat-num">₹0</div>
            <div className="stat-label">Premium Tools Cost</div>
          </div>
        </div>
      </div>

      {/* COURSE OVERVIEW */}
      <section id="overview">
        <div className="overview-inner">
          <div className="overview-left reveal">
            <div className="section-label">Course Overview</div>
            <h2 className="section-title">
              Everything you need to<br /><em>build &amp; deploy</em>
            </h2>
            <p className="section-desc">
              MERN Stack is the most in-demand full-stack skill set in the modern web industry. This course takes
              you from JavaScript fundamentals to deploying full-stack React + Node applications — with 4 months of
              deep structured learning followed by 2 months of intense real-world project work, giving you a
              portfolio that actually gets you hired.
            </p>
            <div className="overview-highlights">
              <div className="highlight-row">
                <div className="highlight-icon">🗓️</div>
                <div className="highlight-text">
                  <strong>Duration &amp; Schedule</strong>
                  <span>6 months | 5 days/week | Weekday batches available</span>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-icon">🏢</div>
                <div className="highlight-text">
                  <strong>Office Environment</strong>
                  <span>Learn in a real office setup — desks, dual monitors, team collaboration</span>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-icon">🧑‍💻</div>
                <div className="highlight-text">
                  <strong>Mode of Learning</strong>
                  <span>Hybrid — Live classes + recorded sessions available 24/7</span>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-icon">🏆</div>
                <div className="highlight-text">
                  <strong>Certification</strong>
                  <span>Industry-recognized certificate upon completion + LinkedIn endorsement</span>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-icon">💼</div>
                <div className="highlight-text">
                  <strong>Placement Assistance</strong>
                  <span>Resume building, mock interviews &amp; direct referrals to hiring partners</span>
                </div>
              </div>
              <div className="highlight-row">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-text">
                  <strong>Prerequisites</strong>
                  <span>Basic computer knowledge — no prior coding experience needed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-right reveal reveal-delay-2">
            <div className="course-card-widget">
              <div className="course-card-top">
                <div className="course-price-tag">Course Fee</div>
                <div className="course-price">₹15,999</div>
                <div className="course-price-sub">₹30,000 Regular Price</div>
                <Link href="#contact" className="card-enroll-btn">Enroll Now — Limited Seats</Link>
                <Link href="#contact" className="card-demo-btn">Book a Free Demo Class</Link>
              </div>
              <div className="course-card-body">
                <ul className="card-feature-list">
                  <li>Full 6-month structured curriculum</li>
                  <li>Premium tools provided for free (worth ₹12k+)</li>
                  <li>Real office environment access</li>
                  <li>1-on-1 doubt sessions with mentors</li>
                  <li>10+ real-world projects to build</li>
                  <li>2 months dedicated hands-on project work</li>
                  <li>Placement support &amp; mock interviews</li>
                  <li>Lifetime access to recorded classes</li>
                  <li>Industry-recognized certificate</li>
                  <li>Dedicated WhatsApp support group</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum">
        <div className="reveal">
          <div className="section-label">Curriculum</div>
          <h2 className="section-title">
            6 Months,<br /><em>Zero Gaps</em>
          </h2>
          <p className="section-desc">
            4 months of structured syllabus covering every core MERN concept — followed by 2 months of pure
            hands-on project work where you build, ship and present real applications just like a professional dev team.
          </p>
        </div>

        <div className="curriculum-grid">
          <div className="module-card reveal">
            <div className="module-num">01</div>
            <span className="module-phase">Phase 1 · Month 1</span>
            <h3>Web Foundations + JavaScript</h3>
            <ul className="module-topics">
              <li>HTML5 semantics &amp; CSS3 layouts</li>
              <li>Flexbox, Grid &amp; Responsive Design</li>
              <li>JavaScript fundamentals — ES6+ syntax</li>
              <li>DOM manipulation &amp; event handling</li>
              <li>Async JS — Promises, async/await, Fetch API</li>
              <li>Git &amp; GitHub version control</li>
            </ul>
          </div>

          <div className="module-card reveal reveal-delay-1">
            <div className="module-num">02</div>
            <span className="module-phase">Phase 2 · Month 2</span>
            <h3>React.js — Front-End Mastery</h3>
            <ul className="module-topics">
              <li>React setup, JSX &amp; component architecture</li>
              <li>Props, State &amp; lifecycle methods</li>
              <li>React Hooks — useState, useEffect, useContext</li>
              <li>React Router for SPA navigation</li>
              <li>Redux Toolkit for state management</li>
              <li>Tailwind CSS with React components</li>
            </ul>
          </div>

          <div className="module-card reveal reveal-delay-2">
            <div className="module-num">03</div>
            <span className="module-phase">Phase 3 · Month 3</span>
            <h3>Node.js + Express.js Backend</h3>
            <ul className="module-topics">
              <li>Node.js runtime &amp; npm ecosystem</li>
              <li>Express.js server setup &amp; routing</li>
              <li>REST API design &amp; best practices</li>
              <li>Middleware — auth, error handling, CORS</li>
              <li>JWT authentication &amp; bcrypt security</li>
              <li>File uploads with Multer &amp; Cloudinary</li>
            </ul>
          </div>

          <div className="module-card reveal">
            <div className="module-num">04</div>
            <span className="module-phase">Phase 4 · Month 4</span>
            <h3>MongoDB + Full Stack Integration</h3>
            <ul className="module-topics">
              <li>MongoDB Atlas setup &amp; NoSQL concepts</li>
              <li>Mongoose ODM — schemas, models &amp; queries</li>
              <li>CRUD operations with React + Node + MongoDB</li>
              <li>Full-stack app architecture &amp; deployment</li>
              <li>Socket.io for real-time features</li>
              <li>Deployment on Render / Railway / Vercel</li>
            </ul>
          </div>

          <div className="module-card reveal reveal-delay-1" style={{ border: '2px solid #C9A84C', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '24px', background: '#C9A84C', color: '#0D0A1A', fontSize: '11px', fontWeight: 700, padding: '3px 14px', borderRadius: '20px', letterSpacing: '1px' }}>
              PRACTICAL PHASE
            </div>
            <div className="module-num">05</div>
            <span className="module-phase">Phase 5 · Month 5 &amp; 6 — Hands-On Project Work</span>
            <h3>Real-World Projects + Career Prep</h3>
            <ul className="module-topics">
              <li>Build a full-stack e-commerce app (React + Node + MongoDB)</li>
              <li>Real-time chat application using Socket.io</li>
              <li>Job board portal with admin dashboard</li>
              <li>Team-based agile workflow — sprints &amp; code reviews</li>
              <li>GitHub portfolio optimization &amp; project documentation</li>
              <li>Mock interviews, resume building &amp; placement drive</li>
            </ul>
          </div>
        </div>

        <div className="curriculum-cta-row reveal">
          <Link href="#contact" className="btn-primary">Download Full Syllabus</Link>
          <p className="curriculum-note">Curriculum updated for <strong>2025</strong> — reflects current industry standards &amp; latest MERN ecosystem</p>
        </div>
      </section>

      {/* TOOLS & PERKS */}
      <section id="tools">
        <div className="tools-header">
          <div>
            <div className="section-label reveal">Premium Tools</div>
            <h2 className="section-title reveal">
              ₹12,000+ worth of tools<br /><em>given to you free</em>
            </h2>
          </div>
          <p className="section-desc reveal">
            When you join Royalfinity, you get access to the same tools professional MERN Stack developers use
            every day — all included in your course fee. No hidden costs, no compromises.
          </p>
        </div>

        <div className="tools-grid">
          <div className="tool-card reveal">
            <div className="tool-emoji">💡</div>
            <div className="tool-info">
              <strong>VS Code + Extensions Pack</strong>
              <span>The #1 code editor with premium dev extensions</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-1">
            <div className="tool-emoji">🗄️</div>
            <div className="tool-info">
              <strong>MongoDB Compass</strong>
              <span>Visual GUI client for MongoDB databases</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-2">
            <div className="tool-emoji">🐙</div>
            <div className="tool-info">
              <strong>GitHub Pro</strong>
              <span>Unlimited private repos + Copilot access</span>
            </div>
          </div>
          <div className="tool-card reveal">
            <div className="tool-emoji">📮</div>
            <div className="tool-info">
              <strong>Postman API</strong>
              <span>Professional API testing &amp; documentation</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-1">
            <div className="tool-emoji">🎨</div>
            <div className="tool-info">
              <strong>Figma Professional</strong>
              <span>Design your app UI before you code it</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-2">
            <div className="tool-emoji">☁️</div>
            <div className="tool-info">
              <strong>Cloudinary</strong>
              <span>Media storage &amp; image management for MERN apps</span>
            </div>
          </div>
          <div className="tool-card reveal">
            <div className="tool-emoji">📝</div>
            <div className="tool-info">
              <strong>Notion Teams</strong>
              <span>Project planning &amp; sprint documentation</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-1">
            <div className="tool-emoji">🚀</div>
            <div className="tool-info">
              <strong>Render / Vercel Pro</strong>
              <span>Deploy full-stack MERN apps on cloud for free</span>
            </div>
          </div>
        </div>

        <div className="perks-strip">
          <div className="perk-item reveal"><span>🏢</span><p>Office Workspace Access</p></div>
          <div className="perk-item reveal reveal-delay-1"><span>📜</span><p>Dual Certificate (Course + Projects)</p></div>
          <div className="perk-item reveal reveal-delay-2"><span>💬</span><p>WhatsApp Support Group</p></div>
          <div className="perk-item reveal reveal-delay-3"><span>🤝</span><p>Alumni Network Access</p></div>
          <div className="perk-item reveal"><span>🎤</span><p>Soft Skills &amp; Communication Training</p></div>
          <div className="perk-item reveal reveal-delay-1"><span>📅</span><p>Flexible Batch Timings</p></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta-final">
        <div className="cta-bg"></div>
        <div className="cta-ring" style={{ width: '300px', height: '300px' }}></div>
        <div className="cta-ring" style={{ width: '500px', height: '500px', opacity: 0.6 }}></div>
        <div className="cta-ring" style={{ width: '700px', height: '700px', opacity: 0.3 }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label reveal">Start Today</div>
          <h2 className="section-title reveal">
            Your career as a MERN Stack Developer<br />starts <em>right now</em>
          </h2>
          <p className="section-desc reveal">
            Join 400+ students who transformed their lives with Royalfinity&apos;s MERN Stack program. New batch
            starting soon — seats fill fast.
          </p>
          <div className="cta-actions reveal">
            <Link href="#contact" className="btn-primary">Enroll Now — ₹15,999</Link>
            <Link href="#contact" className="btn-ghost">Book Free Demo Class</Link>
          </div>
          <div className="cta-guarantee reveal">
            <span className="guarantee-item">Premium Tools Free</span>
            <span className="guarantee-item">Real Office Environment</span>
            <span className="guarantee-item">Placement Assistance</span>
            <span className="guarantee-item">Lifetime Access</span>
            <span className="guarantee-item">Industry Mentors</span>
          </div>
        </div>
      </section>
    </>
  );
}