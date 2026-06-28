import "./MasonryCard.scss";

export default function MasonryCard({

    title,
    subtitle,
    description,
    badge,
    badges,
    image,
    graphic,
    button,
    className = "",

    imagePosition = "bottom",
    imageClass = "",

}) {

    const Image = image && (
        <img
            src={image}
            alt={title}
            className={`card-image ${imageClass}`}
        />
    );

    return (

        <article className={`masonry-card ${className}`}>

            {badge && (
                <span className="badge">
                    {badge}
                </span>
            )}

            {imagePosition === "top" && Image}

            <div className="content">

                <h2>{title}</h2>

                {subtitle && <h3>{subtitle}</h3>}

                <p>{description}</p>

            </div>

            {badges && (

                <div className="badge-list">

                    {badges.map((item, index) => (

                        <span
                            key={index}
                            className="pill"
                        >
                            {item}
                        </span>

                    ))}

                </div>

            )}

            {button && (
                <button>{button}</button>
            )}

            {imagePosition === "bottom" && Image}

            {graphic && (
                <div className="graphic">

                    {graphic}

                    {imagePosition === "custom" && Image}

                </div>
            )}

        </article>

    );

}