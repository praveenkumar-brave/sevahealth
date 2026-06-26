import "./FeatureGrid.scss";

export default function FeatureGrid({
  cards = [],
}) {
  return (
    <section className="feature-grid">
      <div className="container">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`feature-card ${card.className}`}
          >
            <div className="content">

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              {card.description2 && (
                <p>{card.description2}</p>
              )}

              <a href="#">
                {card.linkText || "Learn More"}
              </a>

            </div>

            {card.icon && (
              <div className="icon">
                <img
                  src={card.icon}
                  alt={card.title}
                />
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}