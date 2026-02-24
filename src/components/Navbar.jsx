

import { useState, useEffect } from "react";

const PAGES = [
  { key: "home",    label: "Home",    icon: "🏠" },
  { key: "events",  label: "Events",  icon: "📅" },
  { key: "gallery", label: "Gallery", icon: "🖼️" },
  { key: "signup",  label: "Sign Up", icon: "✍️" },
  { key: "contact", label: "Contact", icon: "✉️" },
];

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [page]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function navigate(key) {
    setPage(key);
    setOpen(false);
  }

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__brand" onClick={() => navigate("home")}>
          Harare<span> Community</span>
        </div>

        {/* Desktop links */}
        <div className="nav__links nav__links--desktop">
          {PAGES.map(({ key, label }) => (
            <button
              key={key}
              className={`nav__btn ${page === key ? "nav__btn--active" : ""}`}
              onClick={() => navigate(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={`nav__hamburger ${open ? "nav__hamburger--open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="nav__bar nav__bar--top" />
          <span className="nav__bar nav__bar--mid" />
          <span className="nav__bar nav__bar--bot" />
        </button>
      </nav>

      {/* Full-screen mobile overlay */}
      <div className={`nav__overlay ${open ? "nav__overlay--open" : ""}`}>
        <div className="nav__orb nav__orb--1" />
        <div className="nav__orb nav__orb--2" />

        <ul className="nav__mobile-links">
          {PAGES.map(({ key, label, icon }, i) => (
            <li
              key={key}
              className={`nav__mobile-item ${open ? "nav__mobile-item--visible" : ""}`}
              style={{ transitionDelay: open ? `${0.1 + i * 0.07}s` : "0s" }}
            >
              <button
                className={`nav__mobile-btn ${page === key ? "nav__mobile-btn--active" : ""}`}
                onClick={() => navigate(key)}
              >
                <span className="nav__mobile-icon">{icon}</span>
                <span className="nav__mobile-label">{label}</span>
                {page === key && <span className="nav__mobile-dot" />}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav__mobile-footer">📍 Harare, Zimbabwe</div>
      </div>

      <style>{`
        /* ── HAMBURGER BUTTON ───────────────────────────────────── */
        .nav__hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 42px; height: 42px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          cursor: pointer;
          padding: 0;
          position: relative;
          z-index: 300;
          transition: background 0.2s, border-color 0.2s;
        }
        .nav__hamburger:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(212,146,42,0.5);
        }

        .nav__bar {
          display: block;
          width: 20px; height: 2px;
          background: #fff;
          border-radius: 2px;
          transform-origin: center;
          transition:
            transform 0.38s cubic-bezier(0.23, 1, 0.32, 1),
            opacity   0.25s ease,
            width     0.3s ease;
        }
        /* Animate to X */
        .nav__hamburger--open .nav__bar--top { transform: translateY(7px) rotate(45deg); }
        .nav__hamburger--open .nav__bar--mid { opacity: 0; transform: scaleX(0); }
        .nav__hamburger--open .nav__bar--bot { transform: translateY(-7px) rotate(-45deg); }

        /* ── FULL-SCREEN OVERLAY ────────────────────────────────── */
        .nav__overlay {
          position: fixed;
          inset: 0;
          z-index: 250;
          background: linear-gradient(135deg, #3E2410 0%, #6B3D1E 55%, #B85C38 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          pointer-events: none;
          /* Expanding circle from hamburger position */
          clip-path: circle(0% at calc(100% - 53px) 34px);
          transition: clip-path 0.58s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .nav__overlay--open {
          clip-path: circle(170% at calc(100% - 53px) 34px);
          pointer-events: all;
        }

        /* Ambient orbs */
        .nav__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(72px);
          opacity: 0.22;
          pointer-events: none;
        }
        .nav__orb--1 {
          width: 400px; height: 400px;
          background: var(--amber, #D4922A);
          top: -120px; right: -100px;
          animation: orbFloat 9s ease-in-out infinite;
        }
        .nav__orb--2 {
          width: 300px; height: 300px;
          background: var(--terracotta, #B85C38);
          bottom: -80px; left: -80px;
          animation: orbFloat 11s ease-in-out infinite reverse;
        }

        /* ── LINK LIST ──────────────────────────────────────────── */
        .nav__mobile-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          width: 100%;
          max-width: 360px;
          padding: 0 1.5rem;
        }

        /* Each item slides in from the right */
        .nav__mobile-item {
          opacity: 0;
          transform: translateX(48px);
          transition:
            opacity   0.42s ease,
            transform 0.42s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .nav__mobile-item--visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Link button */
        .nav__mobile-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 1rem 1.25rem;
          cursor: pointer;
          color: rgba(255,255,255,0.72);
          font-family: 'DM Sans', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-align: left;
          position: relative;
          transition:
            background   0.22s,
            border-color 0.22s,
            color        0.22s,
            transform    0.22s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .nav__mobile-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(212,146,42,0.45);
          color: #fff;
          transform: translateX(8px);
        }
        .nav__mobile-btn--active {
          background: rgba(212,146,42,0.18);
          border-color: rgba(212,146,42,0.55);
          color: #F0B84A;
        }

        .nav__mobile-icon {
          font-size: 1.25rem;
          width: 30px;
          text-align: center;
          flex-shrink: 0;
        }
        .nav__mobile-label { flex: 1; }

        /* Glowing dot for active page */
        .nav__mobile-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #F0B84A;
          box-shadow: 0 0 10px #F0B84A, 0 0 20px rgba(240,184,74,0.4);
          animation: pulse 2s infinite;
        }

        /* Footer text */
        .nav__mobile-footer {
          position: absolute;
          bottom: 2.5rem;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          font-family: 'DM Sans', sans-serif;
        }

        /* ── RESPONSIVE: show hamburger only on mobile ──────────── */
        @media (max-width: 640px) {
          .nav__links--desktop { display: none !important; }
          .nav__hamburger      { display: flex; }
        }
      `}</style>
    </>
  );
}