'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const revealRefs = useRef([]);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', course: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('ct-visible');
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, phone } = formData;
    if (!firstName || !lastName || !email || !phone) {
      alert('Please fill all required fields.');
      return;
    }
    setSubmitted(true);
  };

  const contactCards = [
    { icon: '📞', label: 'Phone',     value: '+91 92118 16999',       sub: 'Mon–Sat, 9am – 7pm',                      href: 'tel:+919211816999' },
    { icon: '✉️', label: 'Email',     value: 'info@royalfinityacademy.com', sub: 'We reply within 3–4 hours',               href: 'mailto:info@royalfinityacademy.com' },
    { icon: '💬', label: 'WhatsApp',  value: 'Chat with an Advisor',  sub: 'Instant responses during working hours',   href: 'https://wa.me/919211816999' },
  ];

  const quickLinks = [
    { href: '/courses/php-stack',             icon: '🛠️', name: 'PHP Full Stack',         detail: 'View course details & syllabus' },
    { href: '/courses/mern-stack',            icon: '⚛️', name: 'MERN Stack',             detail: 'View course details & syllabus' },
    { href: '/courses/digital-marketing',     icon: '📢', name: 'Digital Marketing',       detail: 'View course details & syllabus' },
    { href: '/courses/performance-marketing', icon: '📈', name: 'Performance Marketing',   detail: 'View course details & syllabus' },
  ];

  return (
    <>
      {/* HERO */}
      <section id="ct-hero">
        <div className="ct-hero-bg" />
        <div className="ct-hero-grid" />
        <div className="ct-hero-content">
          <div className="ct-badge">We'd Love to Hear From You</div>
          <h1 className="ct-hero-title">
            Get in Touch with<br /><em>Royalfinity Academy</em>
          </h1>
          <p className="ct-hero-sub">
            Have questions about a course, fees, or the batch schedule? Reach out — our team responds within a few hours.
          </p>
        </div>
      </section>

      {/* MAIN — FORM + INFO */}
      <section id="ct-main">
        <div className="ct-main-inner">

          {/* LEFT: Contact Info */}
          <div className="ct-left ct-reveal" ref={addRef}>
            <div className="ct-eyebrow">Contact Details</div>
            <h2 className="ct-info-title">Let's Start a<br /><em>Conversation</em></h2>
            <p className="ct-info-desc">
              Walk in, call us, or drop a message — we're always available to guide you to the right course for your goals.
            </p>

            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="ct-card"
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <div className="ct-card-icon">{card.icon}</div>
                <div>
                  <div className="ct-card-label">{card.label}</div>
                  <div className="ct-card-value">{card.value}</div>
                  <div className="ct-card-sub">{card.sub}</div>
                </div>
              </a>
            ))}

            <div className="ct-card" style={{ cursor: 'default' }}>
              <div className="ct-card-icon">📍</div>
              <div>
                <div className="ct-card-label">Address</div>
                <div className="ct-card-value">Royalfinity Academy,   Faridabad</div>
                <div className="ct-card-sub">Haryana, India — Campus details on inquiry</div>
              </div>
            </div>

            <div className="ct-hours">
              <div className="ct-hours-label">Working Hours</div>
              <div className="ct-hours-row"><span>Monday – Friday</span><strong>10:00 AM – 7:00 PM</strong></div>
              <div className="ct-hours-row"><span>Saturday - Sunday</span><strong>Closed</strong></div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="ct-form-wrap ct-reveal ct-d1" ref={addRef}>
            <div className="ct-form-title">Send Us a Message</div>
            <div className="ct-form-sub">Fill the form and we'll get back to you within a few hours.</div>

            {!submitted ? (
              <>
                <div className="ct-row">
                  <div className="ct-field">
                    <label className="ct-label">First Name *</label>
                    <input type="text" className="ct-input" id="firstName" placeholder="Rahul" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label">Last Name *</label>
                    <input type="text" className="ct-input" id="lastName" placeholder="Sharma" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>

                <div className="ct-field">
                  <label className="ct-label">Email Address *</label>
                  <input type="email" className="ct-input" id="email" placeholder="rahul@example.com" value={formData.email} onChange={handleChange} />
                </div>

                <div className="ct-field">
                  <label className="ct-label">Phone Number *</label>
                  <input type="tel" className="ct-input" id="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="ct-field">
                  <label className="ct-label">Interested Course</label>
                  <select className="ct-select" id="course" value={formData.course} onChange={handleChange}>
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
                  <textarea className="ct-textarea" id="message" placeholder="Tell us about your background, goals, or any questions you have..." value={formData.message} onChange={handleChange} />
                </div>

                <button className="ct-submit" onClick={handleSubmit}>Send Message →</button>
                <div className="ct-privacy">🔒 Your details are safe with us. No spam, ever.</div>
              </>
            ) : (
              <div className="ct-success">
                <div className="ct-success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. Our team will get back to you within a few hours. Check your email inbox.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="ct-location">
        <div className="ct-loc-inner">
          <div className="ct-loc-title-area ct-reveal" ref={addRef}>
            <div className="ct-eyebrow">Find Us</div>
            <h2 className="ct-loc-title">Visit Our <em>Campus</em></h2>
            <p className="ct-loc-desc">
              Come see the workspace, meet the team, and get a feel for the environment before you enroll. Walk-ins welcome.
            </p>
          </div>
          <div className="ct-map-frame ct-reveal ct-d1" ref={addRef}>
            <iframe
              src="https://www.google.com/maps?q=28.40565,77.3022639&hl=es;z=14&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royalfinity Academy Location"
            />
            <div className="ct-map-overlay">
              <div className="ct-map-overlay-name">Royalfinity Academy</div>
              <div className="ct-map-overlay-addr">5A/81, 1st Floor, NIT-5, Faridabad, Haryana - 121001</div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section id="ct-quick">
        <div className="ct-quick-inner">
          <div className="ct-eyebrow">Quick Actions</div>
          <h2 className="ct-reveal" ref={addRef}>
            Not Sure Where<br /><em>to Start?</em>
          </h2>
          <p className="ct-reveal" ref={addRef}>
            Explore our courses directly or reach out to us on your preferred platform.
          </p>
          <div className="ct-quick-grid">
            {quickLinks.map((link, i) => (
              <Link key={i} href={link.href} className={`ct-quick-item ct-reveal ct-d${i + 1}`} ref={addRef}>
                <span className="ct-quick-ico">{link.icon}</span>
                <div>
                  <div className="ct-quick-name">{link.name}</div>
                  <div className="ct-quick-detail">{link.detail}</div>
                </div>
              </Link>
            ))}
          </div>
          <a href="https://wa.me/919211816999" target="_blank" rel="noreferrer" className="ct-quick-cta">
            💬 WhatsApp Us Now
          </a>
        </div>
      </section>
    </>
  );
}