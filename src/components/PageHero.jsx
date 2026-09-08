import "./PageHero.css";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
    </section>
  );
}
