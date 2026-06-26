import "./PageHero.scss";

export default function PageHero({
  title,
  subtitle,
  description,
  buttonText,
}) {
  return (
    <section className="page-hero">

      <div className="container">

        <div className="page-hero__content">

          <h1>{title}</h1>

          {subtitle && (
            <h3>{subtitle}</h3>
          )}

          {description && (
            <p>{description}</p>
          )}

          {buttonText && (
            <button>
              {buttonText}
            </button>
          )}

        </div>

      </div>

    </section>
  );
}