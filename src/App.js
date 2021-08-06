import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars, Html } from "@react-three/drei";
import Model from "./Model";
import Overlay from "./Overlay";

export default function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  return (
    <>
      <Canvas
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}
        raycaster={{
          computeOffsets: ({ clientX, clientY }) => ({
            offsetX: clientX,
            offsetY: clientY,
          }),
        }}
      >
        <ambientLight intensity={0.75} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <Suspense fallback={null}>
          <Html center={true} position={[-10, 1, 0]}>
            <h1>Québec</h1>
            <h1>20</h1>
          </Html>
          <Model scroll={scroll} />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  );
}
