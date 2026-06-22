import "./ServiceHero.scss";

export default function ServiceHero({
  title,
  description,
}) {
  return (
    <section className="service-hero">

      <div className="container">

        <div className="service-hero__content">

          <span>
            Healthcare Services
          </span>

          <h1>
            {title}
          </h1>

          <p>
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}