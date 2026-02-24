

import { TAG_CLS } from "../data/data";

export default function EventCard({ ev, size = "normal", setPage, setRsvpEvent }) {
  if (!ev) return null;
  const isLarge = size === "large";

  function handleRsvp() {
    if (setRsvpEvent) setRsvpEvent(ev.title);
    if (setPage) setPage("signup");
  }

  return (
    <div className={`event-card ${isLarge ? "event-card--large" : ""}`}>

      {/* IMAGE */}
      <div className="event-card__img" style={{ overflow: "hidden", padding: 0 }}>
        {ev.img ? (
          <img
            src={ev.img}
            alt={ev.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%", background: "var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
              Add Image
            </span>
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="event-card__body">
        <span className={`event-tag ${TAG_CLS[ev.cat]}`}>{ev.cat}</span>
        <h3 className="event-card__title">{ev.title}</h3>

        <div className="event-card__meta">
          <div className="event-card__meta-row">📅 {ev.date} · {ev.time}</div>
          <div className="event-card__meta-row">📍 {ev.loc}</div>
          {ev.desc && <div className="event-card__desc">{ev.desc}</div>}
        </div>

        <div className="event-card__footer">
          <span className="event-card__price">{ev.price}</span>
          <button className="btn-rsvp" onClick={handleRsvp}>RSVP →</button>
        </div>
      </div>

    </div>
  );
}