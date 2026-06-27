import "./FeatureBenefits.scss";


export default function FeatureBenefits({
  cards = [],
  
}) {
  return (
    <section className="feature-benefits">
      <div className="container">

        {cards.map((card, index) => (
          
          <div
          
            key={index}
            className={`benefit-card ${card.className}`}
          >
            <div className="content">
            {card.icon && (
              <div className="benefit-icon">
                <img
                  src={card.icon}
                  alt={card.title}
                />
              </div>
            )}
              <h3>{card.title}</h3>

              <p>{card.description}</p>

              {card.description2 && (
                <p>{card.description2}</p>
              )}

              <a href="#">
                {card.linkText || "Learn More"}
              </a>

            </div>

            
          </div>
        ))}

      </div>
    </section>
  );
}