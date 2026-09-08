import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import images from "../assets/images";
import { industries } from "../data/content";
import "./Industries.css";

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve | Expert Work Scrap Trading LLC SPC"
        description="Serving construction & infrastructure, manufacturing & fabrication, oil & gas support services, facility management companies, and recycling & environmental services."
      />

      <PageHero
        eyebrow="Who We Serve"
        title="Industries We Serve"
        description="Our scrap and material trading supports a broad range of industrial sectors across the UAE and the wider Middle East."
      />

      <section className="section">
        <div className="shell">
          <div className="grid grid-3 industries-cards">
            {industries.map((ind) => (
              <article className="industry-card" key={ind.name}>
                <div className="industry-card__media">
                  <img src={images[ind.image]} alt="" width="480" height="360" />
                </div>
                <h2>{ind.name}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper industries-note">
        <div className="shell industries-note__inner">
          <p className="eyebrow">Client Base</p>
          <h2 className="heading-md">Supplying manufacturers, recyclers, contractors and facilities</h2>
          <p className="lede">
            Expert Work Scrap Trading LLC SPC specializes in sourcing, purchasing, processing
            coordination, and supplying both ferrous and non-ferrous scrap materials to a wide
            range of clients including manufacturers, recyclers, contractors, and industrial
            facilities.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Discuss Your Industry Needs
          </Link>
        </div>
      </section>
    </>
  );
}
