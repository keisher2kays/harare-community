import { useState } from "react";
import useReveal from "../hooks/useReveal";

const SUBJECTS  = ["General Enquiry", "Partnership", "Event Listing", "Sponsorship", "Volunteer", "Press & Media"];
const INFO_ROWS = [
  { icon: "📍", label: "Address",      value: "COBA Centre, CBD, Harare, Zimbabwe" },
  { icon: "📞", label: "Phone",        value: "+263 78 991 7878" },
  { icon: "✉️", label: "Email",        value: "hello@hararecommunity.org" },
  { icon: "🕐", label: "Office Hours", value: "Mon – Fri, 8:00 AM – 5:00 PM" },
];
const SOCIALS = ["𝕏", "in", "f", "📸"];
const INITIAL  = { name: "", email: "", subject: "General Enquiry", msg: "" };

export default function ContactPage() {
  const [form, setForm]         = useState(INITIAL);
  const [sent, setSent]         = useState(false);
  const [loading, setLoading]   = useState(false);
  useReveal();

  const f = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  }

  return (
    <div className="contact-page page-enter page-top">
      {/* ── HERO ── */}
      <div className="page-hero contact-hero">
        <div className="section-label">Reach Out</div>
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-sub">
          Questions, partnerships, or just want to say hello — we'd love to hear from you.
        </p>
      </div>

      {/* ── BODY ── */}
      <div className="contact__body">
        <div className="contact__grid">
          {/* LEFT: info */}
          <div className="reveal">
            <h2 className="contact__left-title">Let's Connect</h2>
            <p className="contact__left-desc">
              Whether you're looking to partner with us, list an event, or just find
              out more about what we do — reach out and a team member will respond
              within 24 hours.
            </p>

            <div className="contact__info">
              {INFO_ROWS.map((row) => (
                <div key={row.label} className="contact__info-item">
                  <div className="contact__info-icon">{row.icon}</div>
                  <div>
                    <div className="contact__info-label">{row.label}</div>
                    <div className="contact__info-value">{row.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              {SOCIALS.map((s, i) => (
                <div key={i} className="contact__social-btn">{s}</div>
              ))}
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="reveal reveal-delay-2">
            {!sent ? (
              <div className="form-card">
                <div className="form-section-title">Send a Message</div>
                <div className="form-section-sub" style={{ marginBottom: "1.75rem" }}>
                  We typically reply within 24 hours.
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Name *</label>
                      <input required className="form-input" placeholder="Your name"
                        value={form.name} onChange={(e) => f("name", e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input required type="email" className="form-input" placeholder="you@email.com"
                        value={form.email} onChange={(e) => f("email", e.target.value)} />
                    </div>
                    <div className="form-group full">
                      <label className="form-label">Subject</label>
                      <select className="form-select"
                        value={form.subject} onChange={(e) => f("subject", e.target.value)}>
                        {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-group full">
                      <label className="form-label">Message *</label>
                      <textarea required className="form-textarea" placeholder="What's on your mind?"
                        value={form.msg} onChange={(e) => f("msg", e.target.value)} />
                    </div>
                  </div>
                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              </div>
            ) : (
              <div className="success-card">
                <div className="success-icon">✅</div>
                <h3>Message Received!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn-primary"
                  onClick={() => { setSent(false); setForm(INITIAL); }}>
                  Send Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}