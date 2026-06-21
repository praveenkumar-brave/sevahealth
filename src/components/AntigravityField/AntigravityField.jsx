import {
    useEffect,
    useRef,
  } from "react";
  
  import particleConfig from "./particleConfig";
  
  import ParticleEngine from "./ParticleEngine";
  
  export default function AntigravityField() {
    const canvasRef =
      useRef(null);
  
    const engineRef =
      useRef(null);
  
    const mouseRef =
      useRef({
        x: -9999,
        y: -9999,
        active: false,
      });
  
    useEffect(() => {
      const canvas =
        canvasRef.current;
  
      const ctx =
        canvas.getContext("2d");
  
      const resize = () => {
        const dpr =
          Math.min(
            window.devicePixelRatio,
            1.5
          );
  
        canvas.width =
          window.innerWidth *
          dpr;
  
        canvas.height =
          window.innerHeight *
          dpr;
  
        canvas.style.width =
          `${window.innerWidth}px`;
  
        canvas.style.height =
          `${window.innerHeight}px`;
  
        ctx.setTransform(
          dpr,
          0,
          0,
          dpr,
          0,
          0
        );
  
        if (
          engineRef.current
        ) {
          engineRef.current.resize(
            window.innerWidth,
            window.innerHeight
          );
        }
      };
  
      resize();
  
      const engine =
        new ParticleEngine({
          ctx,
          width:
            window.innerWidth,
          height:
            window.innerHeight,
          mouse:
            mouseRef.current,
          config:
            particleConfig,
        });
  
      engineRef.current =
        engine;
  
      engine.start();
  
      window.addEventListener(
        "resize",
        resize
      );
  
      const handleMove = (
        e
      ) => {
        mouseRef.current.x =
          e.clientX;
  
        mouseRef.current.y =
          e.clientY;
  
        mouseRef.current.active =
          true;
      };
  
      const handleLeave =
        () => {
          mouseRef.current.active =
            false;
        };
  
      window.addEventListener(
        "mousemove",
        handleMove
      );
  
      window.addEventListener(
        "mouseleave",
        handleLeave
      );
  
      return () => {
        engine.destroy();
  
        window.removeEventListener(
          "resize",
          resize
        );
  
        window.removeEventListener(
          "mousemove",
          handleMove
        );
  
        window.removeEventListener(
          "mouseleave",
          handleLeave
        );
      };
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        className="antigravity-field"
      />
    );
  }