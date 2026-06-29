import Lottie from "lottie-react";
import "./BenefitsList.scss";

export default function BenefitsList({
  title,
  highlight,
  titleend,
  description,
  cards = [],
}) {
  return (
    <section className="benefitslist">

      <div className="container">

        <div className="benefitslist__header1">

          <div className="benefitslist__title">

            <h2>
              {title}{" "}
              {highlight && (
                <span>{highlight}</span>
              )} {" "} {titleend}
            </h2>

          </div>

          <div className="benefitslist__description">

            <p>{description}</p>

          </div>

        </div>

        <div className="benefitslist__list">

          {cards.map((card, index) => (

            <article
              key={index}
              className={`benefitslist-card ${card.className || ""}`}
            >

              <div className="benefitslist-card__number">

                {(index + 1)
                  .toString()
                  .padStart(2, "0")}

              </div>

              <div className="benefitslist-card__content">

                <h3>{card.title}</h3>

                <p>{card.description}</p>

              </div>

              <div className="benefitslist-card__animation">

                {card.lottie && (

                  <Lottie
                    animationData={card.lottie}
                    loop
                    autoplay
                  />

                )}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}