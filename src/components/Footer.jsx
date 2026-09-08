import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { company, services } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__brand">
            <img src={logo} alt="" width="36" height="30" />
            <span>
              Expert Work
              <br />
              Scrap Trading LLC SPC
            </span>
          </Link>
          <p className="footer__desc">
            A dynamic and growing scrap metal trading and industrial material solutions company,
            operating under {company.group} since {company.foundedContext}.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/industries">Industries We Serve</Link></li>
            <li><Link to="/strengths">Our Strengths</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__contact">
            <li>
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom shell">
        <p>© {year} {company.legalName}. All rights reserved.</p>
        <div className="footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">/</span>
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
