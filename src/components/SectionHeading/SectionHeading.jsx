import "./SectionHeading.scss";

export default function SectionHeading({
  badge,
  title,
  description,
  description1
}) {
  return (
    <div className="section-heading">

      {badge && (
        <span className="section-heading__badge">
          {badge}
        </span>
      )}

      <h2>
        {title}
      </h2>

      {description && (
        <p>
          {description}
        </p>
        
      )}
      {description1 && (
        <p>
          {description1}
        </p>
        
      )}

    </div>
  );
}