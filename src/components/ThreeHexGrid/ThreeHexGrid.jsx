import {
    Canvas,
    useFrame,
  } from "@react-three/fiber";
  
  import {
    useEffect,
    useMemo,
    useRef,
  } from "react";
  
  import * as THREE from "three";
  
  function HexCell({
    position,
    mouse,
  }) {
    const meshRef =
      useRef();
  
    const materialRef =
      useRef();
  
    const geometry =
      useMemo(() => {
        const geo =
          new THREE.CylinderGeometry(
            0.42,
            0.42,
            0.01,
            6
          );
  
        return new THREE.EdgesGeometry(
          geo
        );
      }, []);
  
    useFrame(() => {
      if (
        !meshRef.current ||
        !materialRef.current
      )
        return;
  
      const dx =
        position[0] -
        mouse.current.x;
  
      const dy =
        position[1] -
        mouse.current.y;
  
      const distance =
        Math.sqrt(
          dx * dx +
            dy * dy
        );
  
      const intensity =
        Math.exp(
          -(distance *
            distance) /
            6
        );
  
      meshRef.current.scale.setScalar(
        1 +
          intensity * 0.15
      );
  
      materialRef.current.opacity =
        0.08 +
        intensity * 0.9;
    });
  
    return (
        <lineSegments
        ref={meshRef}
        geometry={geometry}
        position={position}
      >
        <lineBasicMaterial
          ref={materialRef}
          color="#56CCF2"
          transparent
          opacity={0.08}
        />
      </lineSegments>
    );
  }
  
  function Grid() {
    const mouse =
      useRef({
        x: 999,
        y: 999,
      });
  
    useEffect(() => {
      const move = (e) => {
        const x =
          (e.clientX /
            window.innerWidth) *
            24 -
          12;
  
        const y =
          -(
            e.clientY /
            window.innerHeight
          ) *
            14 +
          7;
  
        mouse.current.x = x;
        mouse.current.y = y;
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
  
    const cells =
      useMemo(() => {
        const hexes = [];
  
        const cols = 28;
        const rows = 18;
  
        const size = 1;
  
        const hSpacing = size * 0.92;
        const vSpacing = size * 0.82;
  
        for (
          let row = 0;
          row < rows;
          row++
        ) {
          for (
            let col = 0;
            col < cols;
            col++
          ) {
            const x =
              (col -
                cols / 2) *
                hSpacing +
              (row % 2
                ? hSpacing / 2
                : 0);
  
            const y =
              (row -
                rows / 2) *
              vSpacing;
  
            hexes.push([
              x,
              y,
              0,
            ]);
          }
        }
  
        return hexes;
      }, []);
  
    return (
      <>
        {cells.map(
          (
            position,
            index
          ) => (
            <HexCell
              key={index}
              position={
                position
              }
              mouse={mouse}
            />
          )
        )}
      </>
    );
  }
  
  export default function ThreeHexGrid() {
    return (
      <Canvas
        camera={{
          position: [
            0,
            0,
            8,
          ],
          fov: 45,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Grid />
      </Canvas>
    );
  }