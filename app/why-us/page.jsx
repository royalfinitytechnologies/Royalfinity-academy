'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function WhyUs() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('wu-visible');
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const differentiators = [
    {
      num: '01', icon: '🛠️',
      title: 'Free Access to All Premium Tools',
      desc: 'Every student gets fully paid access to industry-leading software used by top professionals. No hidden costs, no trial accounts — just full, unlimited access from day one.',
      tags: ['Canva Pro', 'Adobe Suite', 'ChatGPT Plus', 'SEMrush', '+ More'],
    },
    {
      num: '02', icon: '🏢',
      title: 'Real Office-Like Environment',
      desc: 'Learn in a professional workspace built to mirror real corporate culture — ergonomic workstations, high-speed internet, and an atmosphere built for deep focus and productivity.',
      tags: ['Dedicated Desks', '100 Mbps WiFi', 'Pro Setup'],
    },
    {
      num: '03', icon: '🚀',
      title: '100% Practical, Project-Based Learning',
      desc: 'No passive lectures. Every module is built around real deliverables — live projects, client simulations, and portfolio-ready work that proves your skills to any employer on day one.',
      tags: ['Live Projects', 'Portfolio Ready', '1-on-1 Mentorship'],
    },
    {
      num: '04', icon: '🤝',
      title: 'Career Support & Placement Assistance',
      desc: "Our 96% placement rate speaks for itself. Resume building, mock interviews, LinkedIn optimization, and direct referrals to hiring partners — we don't stop until you're placed.",
      tags: ['96% Placement', 'Resume Building', 'Mock Interviews'],
    },
  ];

  const compareRows = [
    { feature: 'Free Premium Tool Access',          others: false,     us: true },
    { feature: 'Office-Like Environment',            others: false,     us: true },
    { feature: '100% Hands-On Projects',             others: false,     us: true },
    { feature: 'AI Tools Integration in Curriculum', others: false,     us: true },
    { feature: 'Placement Assistance',               others: 'Partial', us: '✓ 96% Rate' },
    { feature: 'Complimentary Refreshments',         others: false,     us: true },
    { feature: 'Dedicated Mentorship',               others: false,     us: true },
  ];

  return (
    <>
      {/* HERO */}
      <section id="wu-hero">
        <div className="wu-hero-bg" />
        <div className="wu-hero-grid" />
        <div className="wu-hero-content">
          <div className="wu-hero-badge">Our Difference</div>
          <h1 className="wu-hero-title">
            Why <em>Royalfinity</em><br />Is Unlike Any Other Academy
          </h1>
          <p className="wu-hero-sub">
            We didn't just build a course — we built the environment, the tools, and the culture that actually turns students into professionals.
          </p>
          <a href="#wu-diff" className="wu-btn-primary">See What Sets Us Apart</a>
        </div>
      </section>

      {/* SECTION 1 — DIFFERENTIATORS */}
      <section id="wu-diff">
        <div className="wu-diff-inner">
          <div className="section-eyebrow">What Makes Us Different</div>
          <h2 className="wu-section-title wu-reveal" ref={addRef}>
            The Four Pillars of<br /><em>Royalfinity Training</em>
          </h2>
          <p className="wu-section-desc wu-reveal" ref={addRef}>
            Every detail of our academy is designed around one goal — making you job-ready from day one.
          </p>
          <div className="wu-diff-grid">
            {differentiators.map((item, i) => (
              <div key={i} className={`wu-diff-card wu-reveal wu-d${i + 1}`} ref={addRef}>
                <span className="wu-diff-num">{item.num}</span>
                <span className="wu-diff-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="wu-diff-tags">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="wu-diff-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — COMPARISON TABLE */}
      <section id="wu-compare">
        <div className="wu-compare-inner">
          <div className="section-eyebrow">Side by Side</div>
          <h2 className="wu-section-title wu-reveal" ref={addRef}>
            Royalfinity vs<br /><em>Other Institutes</em>
          </h2>
          <p className="wu-section-desc wu-reveal" ref={addRef}>
            The difference isn't just a few features — it's an entirely different approach to learning.
          </p>
          <table className="wu-compare-table wu-reveal" ref={addRef}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Feature</th>
                <th>Other Institutes</th>
                <th>Royalfinity Academy</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td>
                    {row.others === false
                      ? <span className="icon-no">✕</span>
                      : <span style={{ color: 'rgba(245,243,238,0.5)' }}>{row.others}</span>}
                  </td>
                  <td>
                    {row.us === true
                      ? <span className="icon-yes">✓</span>
                      : <span className="icon-yes">{row.us}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section id="wu-cta">
        <div className="wu-cta-glow" />
        <div className="wu-cta-inner">
          <h2 className="wu-reveal" ref={addRef}>
            Ready to Experience the<br /><em>Royalfinity Difference?</em>
          </h2>
          <p className="wu-reveal" ref={addRef}>
            Join hundreds of students who made the smarter choice. Batch 2025 is now enrolling — seats are limited.
          </p>
          <div className="wu-cta-btns wu-reveal" ref={addRef}>
            <Link href="/contact" className="wu-btn-primary">Enroll Now</Link>
            <Link href="/#courses" className="wu-btn-ghost">View Courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}