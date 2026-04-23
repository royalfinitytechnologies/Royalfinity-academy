"use client";

import { useEffect, Fragment } from "react";
import Link from "next/link";

const perks = [
  { icon: "🏢", label: "Office Workspace Access" },
  { icon: "📜", label: "Dual Certificate (Course + Projects)" },
  { icon: "💬", label: "WhatsApp Support Group" },
  { icon: "🤝", label: "Alumni Network Access" },
  { icon: "🎤", label: "Soft Skills & Communication Training" },
  { icon: "📅", label: "Flexible Batch Timings" },
];

const guarantees = [
  "Premium Tools Free",
  "Real Office Environment",
  "Placement Assistance",
  "Lifetime Access",
  "Industry Mentors",
];

export default function CourseClient({ course }) {

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">{course.heroBadge}</div>

          <div className="hero-stack-badges">
            {course.stackBadges.map((b) => (
              <span key={b.label} className={`stack-pill ${b.cls}`}>
                {b.label}
              </span>
            ))}
          </div>

          <h1 className="hero-title">
            {course.heroTitle} <em className="gold">{course.heroTitleBold}</em>
            <br />
            {course.heroTitleEnd}
          </h1>

          <p className="hero-sub">{course.heroSub}</p>

          <div className="hero-actions">
            <Link href="#contact" className="btn-primary">Enroll Now</Link>
            <Link href="#overview" className="btn-ghost">View Curriculum</Link>
          </div>

          <div className="hero-meta">
            {["6 Months Duration", "Live + Recorded", "Hindi + English", "Certificate Provided"].map((m) => (
              <div key={m} className="hero-meta-item">
                <span className="dot" />
                {m}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── STATS ── */}
      <div id="course-stats">
        <div className="stats-inner">
          {course.stats.map((s, i) => (
            <Fragment key={s.label}>
              <div className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
              {i < course.stats.length - 1 && <div className="stat-div" />}
            </Fragment>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <section id="overview">
        <div className="overview-inner">
          <div className="overview-left reveal">
            <div className="section-label">Course Overview</div>
            <h2 className="section-title">
              {course.overviewTitle}
              <br />
              <em>{course.overviewTitleEm}</em>
            </h2>
            <p className="section-desc">{course.overviewDesc}</p>

            <div className="overview-highlights">
              {course.highlights.map((h) => (
                <div key={h.title} className="highlight-row">
                  <div className="highlight-icon">{h.icon}</div>
                  <div className="highlight-text">
                    <strong>{h.title}</strong>
                    <span>{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overview-right reveal reveal-delay-2">
            <div className="course-card-widget">
              <div className="course-card-top">
                <div className="course-price-tag">Course Fee</div>
                <div className="course-price">{course.price}</div>
                <div className="course-price-sub">{course.originalPrice} Regular Price</div>
                <Link href="#contact" className="card-enroll-btn">
                  Enroll Now — Limited Seats
                </Link>
                <Link href="#contact" className="card-demo-btn">
                  Book a Free Demo Class
                </Link>
              </div>
              <div className="course-card-body">
                <ul className="card-feature-list">
                  {course.cardFeatures.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum">
        <div className="reveal">
          <div className="section-label">Curriculum</div>
          <h2 className="section-title">
            {course.curriculumTitle}
            <br />
            <em>{course.curriculumTitleEm}</em>
          </h2>
          <p className="section-desc">{course.curriculumDesc}</p>
        </div>

        <div className="curriculum-grid">
          {course.modules.map((m, i) => (
            <div
              key={m.num}
              className={`module-card reveal${
                i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""
              }`}
              style={m.practical ? { border: "2px solid #c9a84c", position: "relative" } : {}}
            >
              {m.practical && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "24px",
                    background: "#c9a84c",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "3px 14px",
                    borderRadius: "20px",
                    letterSpacing: "1px",
                  }}
                >
                  PRACTICAL PHASE
                </div>
              )}
              <div className="module-num">{m.num}</div>
              <span className="module-phase">{m.phase}</span>
              <h3>{m.title}</h3>
              <ul className="module-topics">
                {m.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="curriculum-cta-row reveal">
          <Link href="#contact" className="btn-primary">
            Download Full Syllabus
          </Link>
          <p className="curriculum-note">
            Curriculum updated for <strong>2025</strong> — reflects current industry standards
          </p>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section id="tools">
        <div className="tools-header">
          <div>
            <div className="section-label reveal">Premium Tools</div>
            <h2 className="section-title reveal">
              ₹12,000+ worth of tools
              <br />
              <em>given to you free</em>
            </h2>
          </div>
          <p className="section-desc reveal">
            When you join Royalfinity, you get access to the same tools professionals use every
            day — all included in your course fee. No hidden costs, no compromises.
          </p>
        </div>

        <div className="tools-grid">
          {course.tools.map((t, i) => (
            <div
              key={t.name}
              className={`tool-card reveal${
                i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""
              }`}
            >
              <div className="tool-emoji">{t.emoji}</div>
              <div className="tool-info">
                <strong>{t.name}</strong>
                <span>{t.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="perks-strip">
          {perks.map((p, i) => (
            <div
              key={p.label}
              className={`perk-item reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ""}`}
            >
              <span>{p.icon}</span>
              <p>{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="cta-final">
        <div className="cta-bg" />
        <div className="cta-ring" style={{ width: "300px", height: "300px" }} />
        <div className="cta-ring" style={{ width: "500px", height: "500px", opacity: 0.6 }} />
        <div className="cta-ring" style={{ width: "700px", height: "700px", opacity: 0.3 }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-label reveal">Start Today</div>
          <h2 className="section-title reveal">
            {course.ctaTitle}
            <br />
            <em>{course.ctaTitleEm}</em>
          </h2>
          <p className="section-desc reveal">{course.ctaDesc}</p>
          <div className="cta-actions reveal">
            <Link href="#contact" className="btn-primary">
              Enroll Now — {course.price}
            </Link>
            <Link href="#contact" className="btn-ghost">
              Book Free Demo Class
            </Link>
          </div>
          <div className="cta-guarantee reveal">
            {guarantees.map((g) => (
              <span key={g} className="guarantee-item">
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}