import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import images from "../assets/images";
import {
  introParagraphs,
  services,
  industries,
  strengths,
  groupCompanies,
  clients,
  vision,
  mission,
  company,
} from "../data/content";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Seo
        title="Expert Work Scrap Trading LLC SPC | Scrap Metal Trading, Abu Dhabi UAE"
        description="Sourcing, purchasing and supplying ferrous and non-ferrous scrap metals across the UAE. Part of Expert Group since 1998. Request a quote today."
      />

      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Expert Group · Since 1998</p>
            <h1 className="hero__title">
              Reliable scrap metal trading for the industries that keep the UAE running
            </h1>
            <p className="hero__sub">
              Expert Work Scrap Trading LLC SPC sources, purchases and supplies ferrous and
              non-ferrous scrap materials to manufacturers, recyclers, contractors and industrial
              facilities — backed by the operational strength of Expert Group.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="hero__media">
            <img
              src={images.hero}
              alt="Industrial scrap metal yard with processing machinery"
              className="hero__image"
              width="640"
              height="760"
            />
            <div className="hero__media-tag">
              <span className="hero__media-tag-num">Est. 1998</span>
              <span className="hero__media-tag-label">Expert Group Legacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section className="section">
        <div className="shell intro__grid">
          <div className="intro__col-heading">
            <p className="eyebrow">Who We Are</p>
            <h2 className="heading-md">
              A trading company built on Expert Group's industrial foundation
            </h2>
          </div>
          <div className="intro__col-copy">
            <p>{introParagraphs[0]}</p>
            <p>{introParagraphs[1]}</p>
            <Link to="/about" className="text-link">
              More about our company →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES OVERVIEW ---------------- */}
      <section className="section section--paper">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">What We Do</p>
              <h2 className="heading-md">Our Services</h2>
            </div>
            <Link to="/services" className="btn btn-outline-navy">
              View All Services
            </Link>
          </div>

          <div className="grid grid-3 services-grid">
            {services.slice(0, 5).map((s) => (
              <article className="service-card" key={s.slug}>
                <div className="service-card__media">
                  <img src={images[s.image]} alt="" width="400" height="260" />
                </div>
                <h3 className="card-title">{s.name}</h3>
                <p>{s.description}</p>
              </article>
            ))}
            <div className="service-card service-card--cta">
              <h3 className="card-title">Need a custom material solution?</h3>
              <p>Tell us what you're working with and we'll coordinate the right approach.</p>
              <Link to="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Who We Serve</p>
              <h2 className="heading-md">Industries We Serve</h2>
            </div>
            <Link to="/industries" className="btn btn-outline-navy">
              View All Industries
            </Link>
          </div>

          <div className="grid grid-5 industries-grid">
            {industries.map((ind) => (
              <div className="industry-chip" key={ind.name}>
                <img src={images[ind.image]} alt="" width="220" height="220" />
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STRENGTHS ---------------- */}
      <section className="section section--navy">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="heading-md">Our Strengths</h2>
            </div>
            <Link to="/strengths" className="btn btn-outline">
              See All Strengths
            </Link>
          </div>

          <div className="grid grid-3 strengths-grid">
            {strengths.slice(0, 6).map((s) => (
              <div className="strength-card" key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SUSTAINABILITY ---------------- */}
      <section className="section sustainability">
        <div className="shell sustainability__grid">
          <div className="sustainability__media">
            <img
              src={images.sustainability}
              alt="Sorted scrap metal materials prepared for recycling"
              width="620"
              height="480"
            />
          </div>
          <div className="sustainability__copy">
            <p className="eyebrow">Environmental Responsibility</p>
            <h2 className="heading-md">Supporting sustainability across the supply chain</h2>
            <p className="lede">
              As a scrap metal trading company, Expert Work Scrap Trading LLC SPC plays a direct
              role in supporting recycling and environmentally responsible material flows —
              helping ferrous and non-ferrous metals return to productive use rather than waste.
            </p>
            <p className="lede">{mission}</p>
          </div>
        </div>
      </section>

      {/* ---------------- EXPERT GROUP ---------------- */}
      <section className="section section--paper">
        <div className="shell">
          <div className="section-head section-head--center">
            <p className="eyebrow">Part Of {company.group}</p>
            <h2 className="heading-md">A diversified group across key sectors</h2>
            <p className="lede lede--center">
              Expert Work Scrap Trading LLC SPC is part of Expert Group, a diversified
              organization with multiple specialized companies operating across key sectors.
            </p>
          </div>

          <div className="grid grid-2 group-grid">
            {groupCompanies.map((g) => (
              <div className="group-card" key={g.name}>
                <img src={images[g.image]} alt="" width="500" height="320" />
                <div className="group-card__body">
                  <h3>{g.name}</h3>
                  <p>{g.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- VISION & MISSION ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid grid-2 vm-grid">
            <div className="vm-card">
              <span className="vm-card__mark">Vision</span>
              <p>{vision}</p>
            </div>
            <div className="vm-card">
              <span className="vm-card__mark">Mission</span>
              <p>{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CLIENTS ---------------- */}
      <section className="section section--tight section--paper">
        <div className="shell">
          <p className="clients__label">Trusted by organizations including</p>
          <ul className="clients__list">
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="final-cta">
        <div className="shell final-cta__inner">
          <h2 className="heading-md">Ready to source or supply scrap material?</h2>
          <p>Get in touch with our team for a straightforward, no-obligation quote.</p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <a href={`mailto:${company.email}`} className="btn btn-outline">
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
