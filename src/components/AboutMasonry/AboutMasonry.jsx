import MasonryCard from "./MasonryCard";
import "./AboutMasonry.scss";

export default function AboutMasonry({
    leftCards,
    rightCards,
}) {
    return (
        <section className="about-masonry">

            <div className="container">

                <div className="about-masonry__left">

                    {leftCards.map((card, index) => (
                        <MasonryCard
                            key={index}
                            {...card}
                        />
                    ))}

                </div>

                <div className="about-masonry__right">

                    {rightCards.map((card, index) => (
                        <MasonryCard
                            key={index}
                            {...card}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}