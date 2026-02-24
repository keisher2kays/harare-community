

import { useState, useEffect } from "react";
import { EVENTS } from "../data/data";
import useReveal from "../hooks/useReveal";

const ROLES   = ["Attendee", "Volunteer", "Sponsor", "Media"];
const INITIAL = { name:"", email:"", phone:"", org:"", event:"", role:"Attendee", date:"", capacity:"", desc:"", agree:false };

/**
 * Props:
 *   rsvpEvent — event title pre-filled when arriving from an RSVP button
 */
export default function SignupPage({ rsvpEvent }) {
  const [mode, setMode]           = useState("attend");
  const [form, setForm]           = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  useReveal();

  // Pre-fill the event dropdown whenever we arrive via RSVP
  useEffect(() => {
    if (rsvpEvent) {
      setMode("attend");
      setForm((prev) => ({ ...prev, event: rsvpEvent }));
    }
  }, [rsvpEvent]);

  const f = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  }

  function handleReset() {
    setSubmitted(false);
    setForm(INITIAL);
  }

  if (submitted) {
    return (
      <div className="signup-page page-enter page-top">
        <div className="signup__content">
          <div className="success-card">
            <div className="success-icon">🎉</div>
            <h3>You're all set!</h3>
            <p>
              {mode === "attend"
                ? "Thanks for signing up! We'll send event details to your email shortly."
                : "Your event hosting request has been submitted. Our team will reach out within 48 hours."}
            </p>
            <button className="btn-primary" onClick={handleReset}>
              {mode === "attend" ? "Sign Up for Another Event" : "Submit Another Event"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-page page-enter page-top">
      {/* ── HERO ── */}
      <div className="page-hero signup-hero">
        <div className="section-label">Join Us</div>
        <h1 className="section-title">Sign Up or Host an Event</h1>
        <p className="section-sub">
          Whether you want to attend or bring your own event — we'd love to have you.
        </p>
      </div>

      <div className="signup__content">
        {/* ── TOGGLE ── */}
        <div className="signup__toggle reveal">
          <button
            className={`signup__toggle-btn ${mode === "attend" ? "signup__toggle-btn--active" : ""}`}
            onClick={() => setMode("attend")}
          >
            🎟️ Attend an Event
          </button>
          <button
            className={`signup__toggle-btn ${mode === "host" ? "signup__toggle-btn--active" : ""}`}
            onClick={() => setMode("host")}
          >
            🎤 Host an Event
          </button>
        </div>

        {/* ── FORM CARD ── */}
        <div className="form-card reveal reveal-delay-1 page-enter" key={mode}>
          {mode === "attend" ? (
            <>
              <div className="form-section-title">Register to Attend</div>
              <div className="form-section-sub">
                Fill in your details and choose the event you'd like to join.
                We'll confirm your spot via email.
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input required className="form-input" placeholder="Your full name"
                      value={form.name} onChange={(e) => f("name", e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input required type="email" className="form-input" placeholder="you@email.com"
                      value={form.email} onChange={(e) => f("email", e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" placeholder="+263 77 000 0000"
                      value={form.phone} onChange={(e) => f("phone", e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Organisation (optional)</label>
                    <input className="form-input" placeholder="Your org or company"
                      value={form.org} onChange={(e) => f("org", e.target.value)} />
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Select Event *</label>
                    <select required className="form-select"
                      value={form.event} onChange={(e) => f("event", e.target.value)}>
                      <option value="">— Choose an event —</option>
                      {EVENTS.map((ev) => (
                        <option key={ev.id} value={ev.title}>
                          {ev.title} · {ev.date}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Your Role</label>
                    <select className="form-select"
                      value={form.role} onChange={(e) => f("role", e.target.value)}>
                      {ROLES.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div className="form-divider" />
                  <div className="form-group full">
                    <div className="checkbox-group">
                      <input type="checkbox" id="agree" required
                        checked={form.agree} onChange={(e) => f("agree", e.target.checked)} />
                      <label htmlFor="agree" className="checkbox-label">
                        I agree to receive event updates and community newsletters
                        from Harare Community Board.
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? "Registering…" : "Register Now →"}
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="form-section-title">Host Your Event</div>
              <div className="form-section-sub">
                Tell us about your event and we'll help you list it, promote it,
                and make it a success with our community network.
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input required className="form-input" placeholder="Organiser name"
                      value={form.name} onChange={(e) => f("name", e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input required type="email" className="form-input" placeholder="you@email.com"
                      value={form.email} onChange={(e) => f("email", e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Organisation *</label>
                    <input required className="form-input" placeholder="Your org or business"
                      value={form.org} onChange={(e) => f("org", e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input required className="form-input" placeholder="+263 77 000 0000"
                      value={form.phone} onChange={(e) => f("phone", e.target.value)} />
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Event Name *</label>
                    <input required className="form-input" placeholder="What's your event called?"
                      value={form.event} onChange={(e) => f("event", e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Proposed Date *</label>
                    <input required type="date" className="form-input"
                      value={form.date} onChange={(e) => f("date", e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Expected Attendees</label>
                    <input type="number" className="form-input" placeholder="e.g. 50"
                      value={form.capacity} onChange={(e) => f("capacity", e.target.value)} />
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Event Description *</label>
                    <textarea required className="form-textarea"
                      placeholder="Tell us about your event — its purpose, target audience, and what attendees will take away."
                      value={form.desc} onChange={(e) => f("desc", e.target.value)} />
                  </div>
                  <div className="form-divider" />
                  <div className="form-group full">
                    <div className="checkbox-group">
                      <input type="checkbox" id="agree2" required
                        checked={form.agree} onChange={(e) => f("agree", e.target.checked)} />
                      <label htmlFor="agree2" className="checkbox-label">
                        I understand that event submissions are reviewed and approved
                        by the Harare Community Board team within 48 hours.
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? "Submitting…" : "Submit Event →"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}