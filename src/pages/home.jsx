
import { EVENTS } from "../data/data";
import EventCard from "../components/EventCard";
import MarqueeBanner from "../components/MarqueeBanner";

const STATS = [
  ["24+", "Events Monthly"],
  ["8",   "Partner Orgs"],
  ["500+","Members"],
  ["12",  "Venues"],
];

const ABOUT_TILES = [
  { cls: "at1", icon: "🤝", num: "500+", lbl: "Active Members" },
  { cls: "at2", icon: "📅", num: "24+",  lbl: "Monthly Events" },
  { cls: "at3", icon: "🏢", num: "8",    lbl: "Partner Orgs" },
  { cls: "at4", icon: "🌍", num: "5",    lbl: "Neighbourhoods" },
];

const ABOUT_FEATURES = [
  { icon: "📣", title: "Community First",  desc: "Every event is designed to strengthen local bonds and empower residents." },
  { icon: "🎓", title: "Skills & Growth",  desc: "Workshops and bootcamps that equip people with real, marketable skills." },
  { icon: "🤲", title: "Inclusive Access", desc: "Many of our events are free or subsidised so no one is left out." },
];

export default function HomePage({ setPage, setRsvpEvent }) {
  return (
    <div className="page-enter">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grad" />
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
        </div>

       

        <h1 className="hero__title">
          Where <em>Community</em><br />Comes Together
        </h1>

        <p className="hero__sub">
          Discover local events, workshops, and initiatives shaping a stronger,
          more connected Harare.
        </p>

        <div className="hero__actions">
          <button className="btn-primary" onClick={() => setPage("events")}>
            Explore Events →
          </button>
          <button className="btn-outline" onClick={() => setPage("signup")}>
            Host an Event
          </button>
        </div>

        <div className="hero__stats">
          {STATS.map(([num, lbl]) => (
            <div key={lbl} className="hero__stat">
              <span className="hero__stat-num">{num}</span>
              <div className="hero__stat-lbl">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeBanner />

      {/* ── FEATURED EVENTS ── */}
      <section className="section">
        <div className="home__feat-header">
          <div>
            <div className="section-label">What's On</div>
            <div className="section-title">Featured Events</div>
          </div>
          <button className="btn-text" onClick={() => setPage("events")}>
            View All Events →
          </button>
        </div>

        <div className="home__feat-grid">
          <EventCard ev={EVENTS[0]} size="large" setPage={setPage} setRsvpEvent={setRsvpEvent} />
          <EventCard ev={EVENTS[1]}               setPage={setPage} setRsvpEvent={setRsvpEvent} />
          <EventCard ev={EVENTS[2]}               setPage={setPage} setRsvpEvent={setRsvpEvent} />
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <div className="about">
        <div className="about__inner">
          <div className="about__visual">
            {ABOUT_TILES.map((t) => (
              <div key={t.lbl} className={`about__tile ${t.cls}`}>
                <div className="about__tile-icon">{t.icon}</div>
                <div className="about__tile-num">{t.num}</div>
                <div className="about__tile-lbl">{t.lbl}</div>
              </div>
            ))}
          </div>

          <div className="about__text">
            <div className="section-label" style={{ color: "var(--amber-lt)" }}>About Us</div>
            <h2 className="section-title" style={{ color: "#fff" }}>
              Building Harare,<br />One Event at a Time
            </h2>
            <p className="section-sub" style={{ color: "rgba(255,255,255,0.65)" }}>
              We connect Harare's communities through meaningful events, workshops,
              and collaborative initiatives — partnered with COBA and Uncommon.org.
            </p>

            <div className="about__features">
              {ABOUT_FEATURES.map((f) => (
                <div key={f.title} className="about__feat">
                  <div className="about__feat-icon">{f.icon}</div>
                  <div>
                    <div className="about__feat-title">{f.title}</div>
                    <div className="about__feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-label">Get Involved</div>
        <h2 className="section-title" style={{ maxWidth: 480, margin: "0 auto 0.75rem" }}>
          Ready to be part of something bigger?
        </h2>
        <p className="section-sub" style={{ margin: "0 auto 2.5rem" }}>
          Sign up to attend, volunteer, or host your own event in Harare.
        </p>
        <div className="home__cta-actions">
          <button className="btn-primary" onClick={() => setPage("signup")}>
            Sign Up Today →
          </button>
          <button className="btn-outline-dark" onClick={() => setPage("contact")}>
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
}