import Lottie from "lottie-react";

export default function CoreSlide({
  slide,
}) {
  return (
    <>
      <div className="core__content">

        <span>
          {slide.category}
        </span>

        <h2>
          <span className="title-highlight">{slide.title}</span>
        </h2>

        <p>
          {slide.description}
        </p>

      </div>

      <div className="core__visual">

        <Lottie
          animationData={
            slide.animation
          }
          loop
        />

      </div>
    </>
  );
}