import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import images from "../assets/images";
import { services } from "../data/content";
import "./Services.css";

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services | Expert Work Scrap Trading LLC SPC"
        description="Scrap metal trading, material sourcing and procurement, scrap collection and logistics coordination, industrial waste management support, and bulk supply solutions."
      />

      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description="Expert Work Scrap Trading LLC SPC supports industrial supply chains with focused, dependable scrap and material trading services."
      />

      <section className="section">
        <div className="shell">
          <div className="services-list">
            {services.map((s, i) => (
              <article
                className={`service-row ${i % 2 === 1 ? "service-row--reverse" : ""}`}
                key={s.slug}
              >
                <div className="service-row__media">
                  <img src={images[s.image]} alt="" width="640" height="440" />
                </div>
                <div className="service-row__copy">
                  <span className="service-row__tag">Service</span>
                  <h2>{s.name}</h2>
                  <p>{s.description}</p>
                  <Link to="/contact" className="btn btn-outline-navy">
                    Enquire About This Service
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta__inner">
          <h2 className="heading-md">Looking for a tailored material solution?</h2>
          <p>Share your requirements and our team will get back to you promptly.</p>
          <Link to="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
