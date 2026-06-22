import "./PageHero.scss";

export default function PageHero({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="page-hero">

      <div className="container">

        <span>
          {eyebrow}
        </span>

        <h1>
          {title}
        </h1>

        <p>
          {description}
        </p>

      </div>

    </section>
  );
}