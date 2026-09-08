import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { company } from "../data/content";
import "./Legal.css";

export default function TermsAndConditions() {
  return (
    <>
      <Seo title="Terms & Conditions | Expert Work Scrap Trading LLC SPC" />
      <PageHero eyebrow="Legal" title="Terms & Conditions" />

      <section className="section">
        <div className="shell legal-content">
          <p className="legal-content__placeholder-note">
            Placeholder content — this page was not detailed in the supplied company profile.
            Replace this section with {company.legalName}'s actual terms and conditions before
            publishing.
          </p>

          <h2>Use of This Website</h2>
          <p>
            This website is provided by {company.legalName} for informational purposes about our
            scrap metal trading and industrial material solutions services.
          </p>

          <h2>Inquiries &amp; Quotes</h2>
          <p>
            Submitting an inquiry or quote request through this website does not constitute a
            binding agreement. All trading terms are confirmed directly with our team.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
