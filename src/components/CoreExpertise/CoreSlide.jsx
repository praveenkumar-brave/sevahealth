import Lottie from "lottie-react";

export default function CoreSlide({
  slide,
}) {
  return (
    <>
      <div className="core__content">

        <span>
          {/* {slide.category} */}
          <img src="/public/assets/images/pro-icon1.svg" alt="check" />
        </span>

        <h2>
          {slide.title}<br/><span className="title-highlight">{slide.subtitletxt}</span>
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