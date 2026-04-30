'use client';

import { useEffect } from 'react';
import Link from 'next/link';

// export const metadata = {
//   title: 'Digital Marketing Course | Royalfinity',
//   description:
//     'Master SEO, Google Ads, Meta Ads, Social Media & Content Marketing. 6-month program with live campaigns, real office environment & placement assistance. Enroll at ₹15,999.',
// };

export default function DigitalMarketingPage() {
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
          <span>Digital Marketing</span>
        </nav>
      </div>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-badge">New Batch — 2025</div>
          <div className="hero-stack-badges">
            <span className="stack-pill stack-php">SEO</span>
            <span className="stack-pill stack-laravel">Google Ads</span>
            <span className="stack-pill stack-mysql">Meta Ads</span>
            <span className="stack-pill stack-html">Social Media</span>
            <span className="stack-pill stack-js">Content Marketing</span>
          </div>
          <h1 className="hero-title">
            Become a <em>Digital Marketing</em><br />Expert
          </h1>
          <p className="hero-sub">
            Master the most in-demand marketing skills — from SEO to paid ads, social media to analytics. Run real
            campaigns, work in a real office, and land your dream marketing job with Royalfinity&apos;s premium mentorship.
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
            <div className="stat-num">15+</div>
            <div className="stat-label">Live Campaigns</div>
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
              Everything you need to<br /><em>grow &amp; scale</em>
            </h2>
            <p className="section-desc">
              Digital Marketing is the backbone of every modern business — from startups to Fortune 500 companies.
              This course takes you from zero to running high-ROI campaigns across Google, Meta, and beyond, giving
              you the skills that thousands of companies are actively hiring for right now.
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
                  <span>Basic computer &amp; internet knowledge — no prior marketing experience needed</span>
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
                  <li>15+ live campaign projects to run</li>
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
            6 Months,<br /><em>Complete Digital Marketing Program</em>
          </h2>
          <p className="section-desc">
            A structured roadmap covering 4 months of strong theoretical foundation followed by 2 months of
            hands-on practical implementation, live campaigns, and real-world experience.
          </p>
        </div>

        <div className="curriculum-grid">
          <div className="module-card reveal">
            <div className="module-num">01</div>
            <span className="module-phase">Month 1 · Theoretical</span>
            <h3>Marketing Foundations + SEO</h3>
            <ul className="module-topics">
              <li>Digital marketing overview &amp; career paths</li>
              <li>Website basics &amp; WordPress setup</li>
              <li>On-page &amp; off-page SEO techniques</li>
              <li>Keyword research &amp; tools</li>
              <li>Technical SEO &amp; audits</li>
              <li>Google Search Console &amp; Analytics basics</li>
            </ul>
          </div>

          <div className="module-card reveal reveal-delay-1">
            <div className="module-num">02</div>
            <span className="module-phase">Month 2 · Theoretical</span>
            <h3>Social Media Marketing</h3>
            <ul className="module-topics">
              <li>Instagram, Facebook &amp; LinkedIn strategy</li>
              <li>Content planning &amp; calendar creation</li>
              <li>Reels, Shorts &amp; viral content formats</li>
              <li>Audience growth &amp; engagement</li>
              <li>Influencer marketing basics</li>
              <li>Social media analytics</li>
            </ul>
          </div>

          <div className="module-card reveal reveal-delay-2">
            <div className="module-num">03</div>
            <span className="module-phase">Month 3 · Theoretical</span>
            <h3>Google Ads &amp; Paid Marketing</h3>
            <ul className="module-topics">
              <li>Google Ads account setup &amp; structure</li>
              <li>Search, Display &amp; Shopping campaigns</li>
              <li>Bidding strategies &amp; budget control</li>
              <li>Ad copywriting &amp; A/B testing</li>
              <li>Remarketing &amp; audience targeting</li>
              <li>Campaign optimization techniques</li>
            </ul>
          </div>

          <div className="module-card reveal">
            <div className="module-num">04</div>
            <span className="module-phase">Month 4 · Theoretical</span>
            <h3>Meta Ads + Funnels &amp; Content</h3>
            <ul className="module-topics">
              <li>Facebook &amp; Instagram Ads Manager</li>
              <li>Campaign objectives &amp; funnel strategy</li>
              <li>Audience targeting &amp; lookalikes</li>
              <li>Meta Pixel &amp; tracking setup</li>
              <li>Email marketing &amp; lead funnels</li>
              <li>Copywriting (AIDA, PAS) &amp; landing pages</li>
            </ul>
          </div>

          <div className="module-card reveal reveal-delay-1" style={{ border: '2px solid #C9A84C', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '24px', background: '#C9A84C', color: '#0D0A1A', fontSize: '11px', fontWeight: 700, padding: '3px 14px', borderRadius: '20px', letterSpacing: '1px' }}>
              PRACTICAL PHASE
            </div>
            <div className="module-num">05</div>
            <span className="module-phase">Months 5-6 · Practical</span>
            <h3>Live Projects + Campaign Execution + Career Prep</h3>
            <ul className="module-topics">
              <li>Run real campaigns (Google + Meta)</li>
              <li>Campaign scaling &amp; budget management</li>
              <li>Google Analytics 4 &amp; reporting dashboards</li>
              <li>Client handling &amp; agency workflow</li>
              <li>Portfolio &amp; personal brand building</li>
              <li>Mock interviews &amp; placement assistance</li>
            </ul>
          </div>
        </div>

        <div className="curriculum-cta-row reveal">
          <Link href="#contact" className="btn-primary">Download Full Syllabus</Link>
          <p className="curriculum-note">4 Months Theory + 2 Months Practical — designed for real-world job readiness</p>
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
            When you join Royalfinity, you get access to the same tools professional digital marketers use every
            day — all included in your course fee. No hidden costs, no compromises.
          </p>
        </div>

        <div className="tools-grid">
          <div className="tool-card reveal">
            <div className="tool-emoji">📊</div>
            <div className="tool-info">
              <strong>SEMrush / Ahrefs</strong>
              <span>The #1 SEO &amp; competitor research tool used by pros</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-1">
            <div className="tool-emoji">🎨</div>
            <div className="tool-info">
              <strong>Canva Pro</strong>
              <span>Design stunning creatives, ads &amp; social posts</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-2">
            <div className="tool-emoji">🐙</div>
            <div className="tool-info">
              <strong>GitHub Pro</strong>
              <span>Store &amp; showcase your marketing portfolio</span>
            </div>
          </div>
          <div className="tool-card reveal">
            <div className="tool-emoji">📧</div>
            <div className="tool-info">
              <strong>Mailchimp / Brevo</strong>
              <span>Professional email campaign management</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-1">
            <div className="tool-emoji">📅</div>
            <div className="tool-info">
              <strong>Buffer / Hootsuite</strong>
              <span>Schedule &amp; manage all social media from one place</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-2">
            <div className="tool-emoji">☁️</div>
            <div className="tool-info">
              <strong>Google Workspace</strong>
              <span>Docs, Sheets &amp; Slides for professional reporting</span>
            </div>
          </div>
          <div className="tool-card reveal">
            <div className="tool-emoji">📝</div>
            <div className="tool-info">
              <strong>Notion Teams</strong>
              <span>Campaign planning &amp; content documentation</span>
            </div>
          </div>
          <div className="tool-card reveal reveal-delay-1">
            <div className="tool-emoji">📈</div>
            <div className="tool-info">
              <strong>Google Looker Studio</strong>
              <span>Build live dashboards &amp; client-ready reports</span>
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
            Your career as a Digital Marketer<br />starts <em>right now</em>
          </h2>
          <p className="section-desc reveal">
            Join 400+ students who transformed their lives with Royalfinity&apos;s Digital Marketing program. New
            batch starting soon — seats fill fast.
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