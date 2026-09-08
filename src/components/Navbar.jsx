import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { company } from "../data/content";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/strengths", label: "Our Strengths" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [lastPath, setLastPath] = useState(location.pathname);

  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__bar shell">
        <Link to="/" className="navbar__brand" aria-label={`${company.legalName} — Home`}>
          <img src={logo} alt="" className="navbar__logo" width="40" height="33" />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Expert Work</span>
            <span className="navbar__brand-sub">Scrap Trading LLC SPC</span>
          </span>
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => "navbar__link" + (isActive ? " navbar__link--active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <Link to="/contact" className="btn btn-primary navbar__cta">
            Request a Quote
          </Link>
          <button
            className={`navbar__burger ${open ? "navbar__burger--open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => "navbar__mobile-link" + (isActive ? " navbar__mobile-link--active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary btn-block navbar__mobile-cta">
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
