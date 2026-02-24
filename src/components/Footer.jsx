import React from "react";

const NAV_LINKS = [
  { key: "home",    label: "Home" },
  { key: "events",  label: "Events" },
  { key: "gallery", label: "Gallery" },
  { key: "signup",  label: "Sign Up" },
  { key: "contact", label: "Contact" },
];

const PARTNERS = [
  "COBA Community",
  "Uncommon.org",
  "Impact Hub Harare",
  "CABS Foundation",
];

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Top grid */}
        <div className="footer__top">
          {/* Brand */}
          <div>
            <div className="footer__brand">Harare Community</div>
            <p className="footer__desc">
              Connecting Harare's people through meaningful events, workshops,
              and community-led initiatives.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="footer__col-title">Navigate</div>
            <div className="footer__links">
              {NAV_LINKS.map(({ key, label }) => (
                <button
                  key={key}
                  className="footer__link"
                  onClick={() => setPage(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <div className="footer__col-title">Partners</div>
            <div className="footer__links">
              {PARTNERS.map((p) => (
                <span key={p} className="footer__link footer__link--static">{p}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-title">Contact</div>
            <div className="footer__links">
              <span className="footer__link footer__link--static">📍 Harare, Zimbabwe</span>
              <span className="footer__link footer__link--static">📞 +263 78 991 7878</span>
              <span className="footer__link footer__link--static">✉️ hello@hararecommunity.org</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__copy">
            © 2025 Harare Community Board. Built with ❤️ by{" "}
            <strong>Keisher Katerere</strong>
          </div>
          <div className="footer__badge">⚡ Frontend Developer · Harare, ZW</div>
        </div>
      </div>
    </footer>
  );
}