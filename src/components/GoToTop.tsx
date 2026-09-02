"use client";

import { useEffect, useState } from "react";

export default function GoToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = window.scrollY;
      const el = document.getElementById("goToTop");
      if (h > 400) {
        setShow(true);
        el?.classList.add("reveal");
      } else {
        setShow(false);
        el?.classList.remove("reveal");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="goToTop" className={`goToTop ${show ? "reveal" : ""}`}>
      <a href="#home">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </a>
    </div>
  );
}
