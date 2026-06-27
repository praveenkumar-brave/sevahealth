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

}) {

    return (

        <article className={`masonry-card ${className}`}>

            {badge && (
                <span className="badge">
                    {badge}
                </span>
            )}

            <div className="content">

                <h2>{title}</h2>

                {subtitle && (
                    <h3>{subtitle}</h3>
                )}

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

                <button>

                    {button}

                </button>

            )}

            {image && (

                <img
                    src={image}
                    alt=""
                />

            )}

            {graphic && (

                <div className="graphic">

                    {graphic}

                </div>

            )}

        </article>

    );

}