import {
    Canvas,
    useFrame,
  } from "@react-three/fiber";
  
  import {
    useRef,
    useMemo,
    useEffect,
  } from "react";
  
  import * as THREE from "three";
  
  import {
    vertexShader,
    fragmentShader,
  } from "./BlobMaterial";
  
  function Blob() {
    const meshRef =
      useRef();
  
    const mouse =
      useRef(
        new THREE.Vector2(
          0.5,
          0.5
        )
      );
  
    const material =
      useMemo(
        () =>
          new THREE.ShaderMaterial({
            uniforms: {
              uTime: {
                value: 0,
              },
  
              uMouse: {
                value:
                  new THREE.Vector2(
                    0.5,
                    0.5
                  ),
              },
            },
  
            vertexShader,
  
            fragmentShader,
  
            transparent: true,
          }),
        []
      );
  
    useEffect(() => {
      const move = (e) => {
        mouse.current.x =
          e.clientX /
          window.innerWidth;
  
        mouse.current.y =
          1 -
          e.clientY /
            window.innerHeight;
      };
  
      window.addEventListener(
        "mousemove",
        move
      );
  
      return () =>
        window.removeEventListener(
          "mousemove",
          move
        );
    }, []);
  
    useFrame((state) => {
      material.uniforms.uTime.value =
        state.clock.elapsedTime;
  
      material.uniforms.uMouse.value.lerp(
        mouse.current,
        0.08
      );
    });
  
    return (
      <mesh
        ref={meshRef}
        material={material}
        scale={3.5}
        position={[
          0,
          0,
          0,
        ]}
      >
        <planeGeometry 
          args={[
            1.6,
            64,
          ]}
        />
      </mesh>
    );
  }
  
  export default function ThreeHeroBlob() {
    return (
      <Canvas
        camera={{
          position: [
            0,
            0,
            6,
          ],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight
          intensity={1}
        />
  
        <directionalLight
          position={[
            2,
            2,
            5,
          ]}
          intensity={2}
        />
  
        <Blob />
      </Canvas>
    );
  }

 