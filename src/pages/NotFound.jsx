import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Expert Work Scrap Trading LLC SPC" />
      <section className="not-found">
        <div className="shell not-found__inner">
          <p className="eyebrow">404</p>
          <h1 className="heading-lg">This page couldn't be found</h1>
          <p className="lede">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
