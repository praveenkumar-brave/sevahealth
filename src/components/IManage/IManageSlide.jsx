import Lottie from "lottie-react";

export default function IManageSlide({
  slide,
}) {
  return (
    <>
      <div className="imanage__content">

        <span>
          <img src="/public/assets/images/pro-icon.svg" alt="check" />
           
        </span>

        <h2>
          {slide.title} <br/><span className="title-highlight">{slide.subtitletxt}</span>
        </h2>

        <p>
          {slide.description}
        </p>

      </div>

      <div className="imanage__visual">

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