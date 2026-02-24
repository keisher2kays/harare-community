
import { GALLERY_ITEMS } from "../data/data";
import useReveal from "../hooks/useReveal";

export default function GalleryPage() {
  useReveal();

  return (
    <div className="page-enter page-top">
      {/* ── HERO ── */}
      <div className="page-hero gallery-hero">
        <div className="section-label">Past Events</div>
        <h1 className="section-title">Gallery &amp; Event Stories</h1>
        <p className="section-sub">
          A look back at the events that shaped our community.
          Hover over any card to read the aim behind the event.
        </p>
      </div>

      {/* ── GRID ── */}
      <div className="gallery-section">
        <div className="gallery-section__inner">
          <div className="gallery__grid">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={item.id}
                className={`gallery__card ${item.tall ? "gallery__card--tall" : ""} reveal reveal-delay-${(i % 4) + 1}`}
              >
                {/* Visual — uses real photo if available */}
                <div className="gallery__visual" style={{ overflow: "hidden", padding: 0, position: "relative" }}>
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%", height: "100%",
                        background: item.bg || "var(--border)",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        gap: "0.75rem", padding: "1.5rem",
                      }}
                    >
                      <span style={{ fontSize: "3rem" }}>{item.emoji}</span>
                      <span className="gallery__name">{item.title}</span>
                    </div>
                  )}
                </div>

                {/* Title shown below image when not hovering */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(to top, rgba(62,36,16,0.85) 0%, transparent 100%)",
                  padding: "2rem 1.25rem 1rem",
                  pointerEvents: "none",
                }}>
                  <div className="gallery__name">{item.title}</div>
                </div>

                {/* Hover overlay */}
                <div className="gallery__overlay">
                  <div className="gallery__aim-title">🎯 Aim</div>
                  <div className="gallery__aim-text">{item.aim}</div>
                  <div className="gallery__date">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}