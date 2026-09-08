import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import images from "../assets/images";
import {
  introParagraphs,
  groupCompanies,
  qualityCompliance,
  vision,
  mission,
  commitment,
  company,
} from "../data/content";
import "./About.css";

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Expert Work Scrap Trading LLC SPC"
        description="Learn about Expert Work Scrap Trading LLC SPC — part of Expert Group since 1998, our vision, mission, values and commitment to quality and sustainability."
      />

      <PageHero
        eyebrow="About Us"
        title="A trading company rooted in Expert Group's industrial legacy"
        description="Since 1998, Expert Group has built a reputation for quality, reliability, and excellence across the Middle East. Expert Work Scrap Trading LLC SPC carries that legacy forward in the scrap and metal trading sector."
      />

      {/* ---------------- OVERVIEW ---------------- */}
      <section className="section">
        <div className="shell about-overview">
          <div className="about-overview__copy">
            <p className="eyebrow">Company Overview</p>
            <h2 className="heading-md">Who We Are</h2>
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about-overview__media">
            <img
              src={images.aboutIntro}
              alt="Industrial materials organized at a scrap processing facility"
              width="560"
              height="640"
            />
          </div>
        </div>
      </section>

      {/* ---------------- GROUP RELATIONSHIP ---------------- */}
      <section className="section section--paper">
        <div className="shell">
          <div className="section-head section-head--center">
            <p className="eyebrow">Part of {company.group}</p>
            <h2 className="heading-md">Our Group Companies</h2>
            <p className="lede lede--center">
              Expert Work Scrap Trading LLC SPC is part of Expert Group, a diversified
              organization with multiple specialized companies operating across key sectors.
              Leveraging the broader capabilities of Expert Group, the company benefits from
              strong operational support and industry knowledge in construction, maintenance,
              and interior solutions.
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

      {/* ---------------- QUALITY & COMPLIANCE ---------------- */}
      <section className="section">
        <div className="shell quality-grid">
          <div className="quality-grid__media">
            <img
              src={images.aboutTeam}
              alt="Team reviewing operations at Expert Work Scrap Trading"
              width="560"
              height="420"
            />
          </div>
          <div className="quality-grid__copy">
            <p className="eyebrow">Quality &amp; Compliance</p>
            <h2 className="heading-md">Safety, compliance and ethical practice</h2>
            <p className="lede">{qualityCompliance}</p>
          </div>
        </div>
      </section>

      {/* ---------------- VISION / MISSION / VALUES ---------------- */}
      <section className="section section--navy">
        <div className="shell">
          <div className="grid grid-3 vmv-grid">
            <div className="vmv-card">
              <span className="vmv-card__mark">Vision</span>
              <p>{vision}</p>
            </div>
            <div className="vmv-card">
              <span className="vmv-card__mark">Mission</span>
              <p>{mission}</p>
            </div>
            <div className="vmv-card">
              <span className="vmv-card__mark">Our Commitment</span>
              <p>{commitment}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SUSTAINABILITY ---------------- */}
      <section className="section sustainability">
        <div className="shell sustainability__grid">
          <div className="sustainability__media">
            <img
              src={images.aboutYard}
              alt="Scrap metal prepared for recycling and processing"
              width="620"
              height="480"
            />
          </div>
          <div className="sustainability__copy">
            <p className="eyebrow">Sustainability Commitment</p>
            <h2 className="heading-md">Environmental responsibility in everything we trade</h2>
            <p className="lede">
              With a focused approach to the trading of metals and scrap materials, Expert Work
              Scrap Trading LLC SPC plays an essential role in supporting industrial supply chains
              and sustainability initiatives — helping ferrous and non-ferrous materials move
              efficiently back into productive industrial use.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="shell about-cta__inner">
          <h2 className="heading-md">Want to know more about working with us?</h2>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
