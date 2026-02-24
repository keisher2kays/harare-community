

import { useState, useEffect } from "react";

// All styles live here — one single file
import "./App.css";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage    from "./pages/home";
import EventsPage  from "./pages/events";
import GalleryPage from "./pages/gallery";
import SignupPage  from "./pages/SignupPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [page, setPage]           = useState("home");
  const [rsvpEvent, setRsvpEvent] = useState("");

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // Clear the pre-fill whenever the user navigates away from signup
  function handleSetPage(p) {
    if (p !== "signup") setRsvpEvent("");
    setPage(p);
  }

  return (
    <div>
      <Navbar page={page} setPage={handleSetPage} />

      {page === "home"    && <HomePage    setPage={handleSetPage} setRsvpEvent={setRsvpEvent} />}
      {page === "events"  && <EventsPage  setPage={handleSetPage} setRsvpEvent={setRsvpEvent} />}
      {page === "gallery" && <GalleryPage />}
      {page === "signup"  && <SignupPage  rsvpEvent={rsvpEvent} />}
      {page === "contact" && <ContactPage setPage={handleSetPage} />}

      <Footer setPage={handleSetPage} />
    </div>
  );
}