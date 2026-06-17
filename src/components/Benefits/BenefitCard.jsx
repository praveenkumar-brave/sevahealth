export default function BenefitCard({
    title,
    description,
  }) {
    return (
      <article className="benefit-card">
  
        <div className="benefit-card__number">
          0
        </div>
  
        <h3>
          {title}
        </h3>
  
        <p>
          {description}
        </p>
  
      </article>
    );
  }