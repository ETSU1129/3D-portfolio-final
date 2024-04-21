import React, { Suspense, useEffect, useState } from "react";
import { useGLTF, useTexture,Preload,OrbitControls,PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
// 他のインポート文
const Model = ({ isMobile }) => {
  const { nodes } = useGLTF("/roommodel002.glb");
  const bakedTexture = useTexture('./bake_001.jpg');
  const bakedTexture2 = useTexture('./bake_003.jpg');
  bakedTexture.flipY = false;
  bakedTexture2.flipY = false;

  return (
    <>
      <mesh
        geometry={nodes.bakedmodel1.geometry}
        scale={isMobile ? 0.1 : 0.3}
        rotation-y={-6.5}
        position-x={0}
        position-y={-2.8}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        geometry={nodes.bakedmodel2.geometry}
        scale={isMobile ? 0.1 : 0.3}
        rotation-y={-6.5}
        position-x={0}
        position-y={-2.8}
      >
        <meshBasicMaterial map={bakedTexture2} />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 500px)");
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
      mediaQuery.addEventListener("change", handleMediaQueryChange);
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
  

  return (
    
            <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            >
                
            <Suspense fallback={<CanvasLoader />}>
            <fog attach="fog" args={["#d0d0d0",1,80]}/>
                <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI * 20 / 180} // 左に45度
                maxAzimuthAngle={Math.PI * 85 / 180} // 右に25度
                enableDamping={true}
                />
                <Model isMobile={isMobile} style={{ pointerEvents: 'auto' }}/>
            </Suspense>
            <Preload all />
            </Canvas>
    
  );
};

export default ComputersCanvas;