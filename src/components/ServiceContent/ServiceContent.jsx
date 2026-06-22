import "./ServiceContent.scss";

export default function ServiceContent({
  overview,
  features,
}) {
  return (
    <section className="service-content">

      <div className="container">

        <div className="service-content__overview">

          <h2>
            Service Overview
          </h2>

          <p>
            {overview}
          </p>

        </div>

        <div className="service-content__grid">

          {features.map(
            (item, index) => (

              <article
                key={index}
                className="feature-card"
              >

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>

            )
          )}

        </div>

      </div>

    </section>
  );
}