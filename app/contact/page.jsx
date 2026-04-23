"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const contactCards = [
  {
    href: "tel:+919999999999",
    icon: "📞",
    label: "Phone",
    value: "+91 99999 99999",
    sub: "Mon–Sat, 9am – 7pm",
  },
  {
    href: "mailto:hello@royalfinity.com",
    icon: "✉️",
    label: "Email",
    value: "hello@royalfinity.com",
    sub: "We reply within 3–4 hours",
  },
  {
    href: "https://wa.me/919999999999",
    icon: "💬",
    label: "WhatsApp",
    value: "Chat with an Advisor",
    sub: "Instant responses during working hours",
  },
  {
    href: null,
    icon: "📍",
    label: "Address",
    value: "Royalfinity Academy, Ahmedabad",
    sub: "Gujarat, India — Campus details on inquiry",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday",        time: "9:00 AM – 5:00 PM" },
  { day: "Sunday",          time: "Closed"             },
];

const quickCourses = [
  { href: "/courses/php-stack",              icon: "🛠️", name: "PHP Full Stack",        detail: "View course details & syllabus" },
  { href: "/courses/mern-stack",             icon: "⚛️", name: "MERN Stack",             detail: "View course details & syllabus" },
  { href: "/courses/digital-marketing",      icon: "📢", name: "Digital Marketing",      detail: "View course details & syllabus" },
  { href: "/courses/performance-marketing",  icon: "📈", name: "Performance Marketing",  detail: "View course details & syllabus" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", course: "", message: "",
  });

  useEffect(() => {
    const els = document.querySelectorAll(".ct-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.firstName || !form.email || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section id="ct-hero">
        <div className="ct-hero-bg" />
        <div className="ct-hero-grid" />
        <div className="ct-hero-content">
          <div className="ct-badge">We&apos;d Love to Hear From You</div>
          <h1 className="ct-hero-title">
            Get in Touch with<br /><em>Royalfinity Academy</em>
          </h1>
          <p className="ct-hero-sub">
            Have questions about a course, fees, or the batch schedule? Reach out — our team
            responds within a few hours.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section id="ct-main">
        <div className="ct-main-inner">

          {/* LEFT — Info */}
          <div className="ct-left ct-reveal">
            <div className="ct-info-head">
              <div className="ct-eyebrow">Contact Details</div>
              <h2 className="ct-info-title">Let&apos;s Start a<br /><em>Conversation</em></h2>
              <p className="ct-info-desc">
                Walk in, call us, or drop a message — we&apos;re always available to guide you to
                the right course for your goals.
              </p>
            </div>

            {contactCards.map((c) =>
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="ct-card"
                  target={c.href.startsWith("https") ? "_blank" : undefined}
                  rel={c.href.startsWith("https") ? "noopener noreferrer" : undefined}
                >
                  <div className="ct-card-icon">{c.icon}</div>
                  <div className="ct-card-body">
                    <div className="ct-card-label">{c.label}</div>
                    <div className="ct-card-value">{c.value}</div>
                    <div className="ct-card-sub">{c.sub}</div>
                  </div>
                </a>
              ) : (
                <div key={c.label} className="ct-card" style={{ cursor: "default" }}>
                  <div className="ct-card-icon">{c.icon}</div>
                  <div className="ct-card-body">
                    <div className="ct-card-label">{c.label}</div>
                    <div className="ct-card-value">{c.value}</div>
                    <div className="ct-card-sub">{c.sub}</div>
                  </div>
                </div>
              )
            )}

            <div className="ct-hours">
              <div className="ct-hours-label">Working Hours</div>
              {hours.map((h) => (
                <div key={h.day} className="ct-hours-row">
                  <span>{h.day}</span>
                  <strong>{h.time}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="ct-form-wrap ct-reveal ct-d1">
            <div className="ct-form-title">Send Us a Message</div>
            <div className="ct-form-sub">Fill the form and we&apos;ll get back to you within a few hours.</div>

            {!submitted ? (
              <>
                <div className="ct-row">
                  <div className="ct-field">
                    <label className="ct-label">First Name *</label>
                    <input name="firstName" className="ct-input" placeholder="Rahul"
                      value={form.firstName} onChange={handleChange} />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Last Name *</label>
                    <input name="lastName" className="ct-input" placeholder="Sharma"
                      value={form.lastName} onChange={handleChange} />
                  </div>
                </div>

                <div className="ct-field">
                  <label className="ct-label">Email Address *</label>
                  <input name="email" type="email" className="ct-input"
                    placeholder="rahul@example.com" value={form.email} onChange={handleChange} />
                </div>

                <div className="ct-field">
                  <label className="ct-label">Phone Number *</label>
                  <input name="phone" type="tel" className="ct-input"
                    placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                </div>

                <div className="ct-field">
                  <label className="ct-label">Interested Course</label>
                  <select name="course" className="ct-select ct-input"
                    value={form.course} onChange={handleChange}>
                    <option value="" disabled>Select a course...</option>
                    <option value="php">PHP Full Stack Development</option>
                    <option value="mern">MERN Stack Development</option>
                    <option value="dm">Digital Marketing</option>
                    <option value="pm">Performance Marketing</option>
                    <option value="unsure">Not sure yet — need guidance</option>
                  </select>
                </div>

                <div className="ct-field">
                  <label className="ct-label">Your Message</label>
                  <textarea name="message" className="ct-textarea"
                    placeholder="Tell us about your background, goals, or any questions you have..."
                    value={form.message} onChange={handleChange} />
                </div>

                <button className="ct-submit" onClick={handleSubmit}>
                  Send Message →
                </button>
                <div className="ct-privacy">🔒 Your details are safe with us. No spam, ever.</div>
              </>
            ) : (
              <div className="ct-success" style={{ display: "block" }}>
                <div className="ct-success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. Our team will get back to you within a few hours. Check your email inbox.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="ct-location">
        <div className="ct-loc-inner">
          <div className="ct-loc-title-area ct-reveal">
            <div className="ct-eyebrow">Find Us</div>
            <h2 className="ct-loc-title">Visit Our <em>Campus</em></h2>
            <p className="ct-loc-desc">
              Come see the workspace, meet the team, and get a feel for the environment before
              you enroll. Walk-ins welcome.
            </p>
          </div>

          <div className="ct-map-frame ct-reveal ct-d1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.56823893063!2d72.41493394063555!3d23.020158048694207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royalfinity Academy Location"
            />
            <div className="ct-map-overlay">
              <div className="ct-map-overlay-name">Royalfinity Academy</div>
              <div className="ct-map-overlay-addr">Ahmedabad, Gujarat, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ACTIONS ── */}
      <section id="ct-quick">
        <div className="ct-quick-inner">
          <div className="ct-eyebrow">Quick Actions</div>
          <h2 className="ct-reveal">
            Not Sure Where<br /><em>to Start?</em>
          </h2>
          <p className="ct-reveal">
            Explore our courses directly or reach out to us on your preferred platform.
          </p>

          <div className="ct-quick-grid">
            {quickCourses.map((c, i) => (
              <Link
                key={c.name}
                href={c.href}
                className={`ct-quick-item ct-reveal ct-d${i + 1}`}
              >
                <span className="ct-quick-ico">{c.icon}</span>
                <div>
                  <div className="ct-quick-name">{c.name}</div>
                  <div className="ct-quick-detail">{c.detail}</div>
                </div>
              </Link>
            ))}
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="ct-quick-cta"
          >
            💬 WhatsApp Us Now
          </a>
        </div>
      </section>
    </>
  );
}