import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { company } from "../data/content";
import "./Legal.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Seo title="Privacy Policy | Expert Work Scrap Trading LLC SPC" />
      <PageHero eyebrow="Legal" title="Privacy Policy" />

      <section className="section">
        <div className="shell legal-content">
          <p className="legal-content__placeholder-note">
            Placeholder content — this page was not detailed in the supplied company profile.
            Replace this section with {company.legalName}'s actual privacy policy before publishing.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you submit an inquiry through our contact form, we collect the details you
            provide, such as your name, company, email address, phone number, and message.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            Information submitted is used solely to respond to your inquiry and provide the
            services you request from {company.legalName}.
          </p>

          <h2>Contact</h2>
          <p>
            For any privacy-related questions, contact us at{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
