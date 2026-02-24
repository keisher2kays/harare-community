
import { useState } from "react";
import { EVENTS, CATEGORIES, TAG_CLS } from "../data/data";

const INITIAL_VISIBLE = 6;

/**
 * Props:
 *   setPage      — switches the active page
 *   setRsvpEvent — lifts the selected event title up to App so SignupPage can pre-fill it
 */
export default function EventsPage({ setPage, setRsvpEvent }) {
  const [cat, setCat]         = useState("All");
  const [search, setSearch]   = useState("");
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const filtered = EVENTS.filter((e) => {
    const matchCat    = cat === "All" || e.cat === cat;
    const matchSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.loc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const isFiltering = cat !== "All" || search.trim() !== "";
  const shown       = isFiltering ? filtered : filtered.slice(0, visible);

  function resetFilters() {
    setCat("All");
    setSearch("");
    setVisible(INITIAL_VISIBLE);
  }

  function handleRsvp(eventTitle) {
    if (setRsvpEvent) setRsvpEvent(eventTitle);
    setPage("signup");
  }

  return (
    <div className="page-enter page-top">

      <div className="page-hero events-hero">
        <div className="section-label">Browse &amp; Filter</div>
        <h1 className="section-title">All Community Events</h1>
        <p className="section-sub">
          Find events by category or search for something specific.
        </p>
      </div>

      <section className="section">

        {/* CONTROLS */}
        <div className="events__controls">
          <div className="events__filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`events__filter-btn ${cat === c ? "events__filter-btn--active" : ""}`}
                onClick={() => { setCat(c); setVisible(INITIAL_VISIBLE); }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="events__search">
            <span>🔍</span>
            <input
              placeholder="Search events or venues…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisible(INITIAL_VISIBLE); }}
            />
            {search && (
              <button className="events__search-clear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>
        </div>

        {/* RESULTS */}
        {shown.length === 0 ? (
          <div className="empty-state">
            <div className="empty-emoji">🔍</div>
            <p>No events found.</p>
            <button className="btn-text" style={{ margin: "1rem auto 0" }} onClick={resetFilters}>
              Clear filters →
            </button>
          </div>
        ) : (
          <div className="events__grid">
            {shown.map((ev) => (
              <div key={ev.id} className="ev-card">

                {/* IMAGE */}
                <div className="ev-card__img" style={{ overflow: "hidden", padding: 0 }}>
                  {ev.img ? (
                    <img
                      src={ev.img}
                      alt={ev.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  ) : (
                    <div className="ev-card__img-placeholder">
                      <span>Add Image</span>
                    </div>
                  )}
                </div>

                {/* BODY */}
                <div className="ev-card__body">
                  <span className={`event-tag ${TAG_CLS[ev.cat]}`}>{ev.cat}</span>
                  <div className="ev-card__title">{ev.title}</div>
                  <div className="ev-card__meta">
                    <div className="ev-card__row">📅 {ev.date} · {ev.time}</div>
                    <div className="ev-card__row">📍 {ev.loc}</div>
                    {ev.desc && <div className="ev-card__desc">{ev.desc}</div>}
                  </div>
                  <div className="ev-card__footer">
                    <span className="ev-card__price">{ev.price}</span>
                    <button className="btn-rsvp" onClick={() => handleRsvp(ev.title)}>
                      RSVP →
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* LOAD MORE */}
        {!isFiltering && visible < EVENTS.length && (
          <div className="events__load-more">
            <button className="btn-load" onClick={() => setVisible((v) => v + 6)}>
              Load More Events ↓
            </button>
          </div>
        )}

      </section>
    </div>
  );
}