import { useState } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { company } from "../data/content";
import "./Contact.css";

const initialForm = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (!form.message.trim()) next.message = "Please enter your message.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Frontend-only for now — see note below the form.
      // eslint-disable-next-line no-console
      console.log("Inquiry submitted:", form);
      setStatus("success");
      setForm(initialForm);
    }
  }

  return (
    <>
      <Seo
        title="Contact Us | Expert Work Scrap Trading LLC SPC"
        description="Get in touch with Expert Work Scrap Trading LLC SPC in Mussafah, Abu Dhabi, UAE. Call, email, or send an inquiry to request a quote."
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a scrap or material trading requirement? Send us your details and our team will respond promptly."
      />

      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-info">
            <h2 className="heading-md">Reach Us Directly</h2>

            <ul className="contact-info__list">
              <li>
                <span className="contact-info__label">Phone</span>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <span className="contact-info__label">Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <span className="contact-info__label">Address</span>
                <span>{company.address}</span>
              </li>
            </ul>

            <div className="contact-map">
              <iframe
                title="Expert Work Scrap Trading LLC SPC location — Mussafah, Abu Dhabi, UAE"
                src="https://www.google.com/maps?q=Mussafah%2C%20Abu%20Dhabi%2C%20UAE&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2 className="heading-md">Send an Inquiry</h2>

            {status === "success" && (
              <div className="contact-form__success" role="status">
                Thank you — your inquiry has been submitted. We'll be in touch shortly.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <span className="field__error" id="name-error">{errors.name}</span>}
                </div>

                <div className="field">
                  <label htmlFor="companyName">Company</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={form.companyName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <span className="field__error" id="email-error">{errors.email}</span>}
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && <span className="field__error" id="subject-error">{errors.subject}</span>}
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <span className="field__error" id="message-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit Inquiry
              </button>

              <p className="contact-form__note">
                This form currently validates and captures your details in the browser only. To
                have inquiries delivered to your inbox or CRM, connect the <code>handleSubmit</code>{" "}
                function in <code>src/pages/Contact.jsx</code> to an email/form service such as
                Formspree, EmailJS, or your own backend endpoint.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
