import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const refMain = useRef();
  const refBright = useRef();

  const [mainSphere] = useState(() =>
    random.inSphere(new Float32Array(7000 * 3), { radius: 1.2 })
  );
  const [brightSphere] = useState(() =>
    random.inSphere(new Float32Array(300 * 3), { radius: 1.1 })
  );

  useFrame((_, delta) => {
    refMain.current.rotation.x -= delta / 120;
    refMain.current.rotation.y -= delta / 180;
    refBright.current.rotation.x -= delta / 100;
    refBright.current.rotation.y -= delta / 150;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Étoiles principales — blanches */}
      <Points ref={refMain} positions={mainSphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#e8f4ff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
      {/* Étoiles brillantes — teal */}
      <Points ref={refBright} positions={brightSphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#64ffda"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ alpha: true }} style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
