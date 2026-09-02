"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Works" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="header" className={`header ${sticky ? "header-sticky" : ""}`}>
      <div className="container container-lg">
        <div className="header-nav">
          <a href="#home" className="logo">DTV.</a>
          <nav id="nav" className={`nav ${open ? "open" : ""}`}>
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.href} className="nav-item">
                  <a href={link.href} className="nav-link" onClick={() => setOpen(false)}>{link.label}</a>
                </li>
              ))}
            </ul>
            <button
              id="nav-btn"
              className="nav-btn"
              onClick={() => setOpen(!open)}
            >
              <img
                id="nav-btn-img"
                src={open ? "/icons/close.svg" : "/icons/open.svg"}
                alt="Navigation button"
              />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
