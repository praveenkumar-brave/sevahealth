import Lottie from "lottie-react";

export default function IManageSlide({
  slide,
}) {
  return (
    <>
      <div className="imanage__content">

        <span>
          iManage
        </span>

        <h2>
          {slide.title}
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