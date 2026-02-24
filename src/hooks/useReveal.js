import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to every .reveal element in the DOM.
 * When an element scrolls into view it receives the .visible class,
 * which triggers the CSS fade-up transition defined in main.css.
 *
 * Call this hook once at the top of any page component.
 */
export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}