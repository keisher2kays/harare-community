import React from "react";

const ITEMS = [
  "Community Events",
  "Workshops & Bootcamps",
  "Farmers Markets",
  "Arts & Culture",
  "Health & Wellness",
  "Youth Programs",
  "COBA Partner Events",
  "Networking Mixers",
];

export default function MarqueeBanner() {
  // Duplicate array so the animation loops seamlessly
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}