import * as THREE from "three";

export const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;

varying vec2 vUv;
varying float vDistortion;

//
// Simple noise
//

float random(vec2 st){
    return fract(
      sin(
        dot(st.xy,
        vec2(
          12.9898,
          78.233
        )
      )
    ) * 43758.5453123
  );
}

void main(){

    vUv = uv;

    vec3 pos = position;

    float wave =
      sin(
        pos.x * 2.0 +
        uTime
      ) * 0.15;

    wave +=
      sin(
        pos.y * 3.0 +
        uTime * 1.3
      ) * 0.12;

    float mouseInfluence =
      distance(
        uv,
        uMouse
      );

    wave +=
      (1.0 - mouseInfluence)
      * 0.3;

    pos += normal * wave;

    vDistortion = wave;

    gl_Position =
      projectionMatrix *
      modelViewMatrix *
      vec4(pos,1.0);
}
`;

export const fragmentShader = `
varying vec2 vUv;
varying float vDistortion;

void main(){

  vec3 colorA =
    vec3(
      0.35,
      0.82,
      1.0
    );

  vec3 colorB =
    vec3(
      0.05,
      0.55,
      0.95
    );

  vec3 color =
    mix(
      colorA,
      colorB,
      vUv.y
    );

  float glow =
    smoothstep(
      0.0,
      0.5,
      vDistortion
    );

  color += glow * 0.35;

  gl_FragColor =
    vec4(
      color,
      0.85
    );
}
`;