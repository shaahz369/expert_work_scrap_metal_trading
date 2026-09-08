import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import images from "../assets/images";
import { strengths } from "../data/content";
import "./Strengths.css";

export default function Strengths() {
  return (
    <>
      <Seo
        title="Our Strengths | Expert Work Scrap Trading LLC SPC"
        description="Established heritage since 1998, regional expertise, a reliable network, operational efficiency, sustainability focus, and a client-centric approach."
      />

      <PageHero
        eyebrow="Why Choose Us"
        title="Our Strengths"
        description="What sets Expert Work Scrap Trading LLC SPC apart in the scrap and metal trading industry."
      />

      <section className="section">
        <div className="shell">
          <div className="grid grid-3 strengths-cards">
            {strengths.map((s) => (
              <article className="strength-tile" key={s.name}>
                <div className="strength-tile__media">
                  <img src={images[s.image]} alt="" width="420" height="300" />
                </div>
                <div className="strength-tile__body">
                  <h2>{s.name}</h2>
                  <p>{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta__inner">
          <h2 className="heading-md">Experience the Expert Work difference</h2>
          <p>Talk to our team about your scrap and material trading requirements.</p>
          <Link to="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
