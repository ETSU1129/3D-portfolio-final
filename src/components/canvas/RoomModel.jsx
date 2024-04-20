import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useTexture, } from "@react-three/drei";
import CanvasLoader from "../Loader";
import{useControls} from 'leva' 
// 3Dコンピュータモデルを表示するコンポーネント
const Computers = ({ isMobile }) => {
  const nodes = useGLTF("./roommodel002.glb"); // GLTF形式の3Dモデルを読み込む
  const bakedTexture = useTexture('./bake_001.jpg')
  const bakedTexture2 = useTexture('./bake_003.jpg')
  bakedTexture.flipY = false
  bakedTexture2.flipY = false
  const { rotationY,positionZ,positionY } = useControls({
    rotationY: {
        value: 0.2, // 初期値
        min: -10, // 最小値
        max: 10, // 最大値
    },
    positionZ: {
        value: 0, // 初期値q
        min: -10, // 最小値
        max: 10, // 最大値
        },
    positionY: {
        value: -0.4, // 初期値
        min: -10, // 最小値
        max: 10, // 最大値
        },
  })
  return (
    <motion.group rotation-y={[rotationY]}position-z={[positionZ]}position-y={[positionY]}>
      <mesh geometry={ nodes.bakedmodel1.geometry }
        scale={isMobile ? 0.2 : 0.3}
        rotation-y={-1}
        position-x={0}
        position-y={-0.5}>
          <meshBasicMaterial map={ bakedTexture } />
      </mesh>
      <mesh geometry={ nodes.bakedmodel2.geometry }
        scale={isMobile ? 0.2 : 0.3}
        rotation-y={-1}
        position-x={0}
        position-y={-0.5}>
          <meshBasicMaterial map={ bakedTexture2 } />
      </mesh>
    </motion.group>
  );
};

// 3Dモデルを表示するキャンバス
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); // モバイルかどうかの状態

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)"); // メディアクエリ
    setIsMobile(mediaQuery.matches); // モバイルかどうかを状態にセット
    const handleMediaQueryChange = (event) => { // メディアクエリの変更をハンドル
      setIsMobile(event.matches); // モバイルかどうかを状態にセット
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange); // イベントリスナーを追加
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange); // イベントリスナーを削除
    };
  }, []);

  return (
    <Canvas // 3Dレンダリングのキャンバス
      frameloop='demand' // フレームループのタイプ
      shadows // 影を有効にする
      dpr={[1, 2]} // デバイスピクセル比
      camera={{ position: [20, 3, 5], fov: 25 }} // カメラの設定
      gl={{ preserveDrawingBuffer: true }} // 描画バッファを保持する
    >
      <Suspense fallback={<CanvasLoader />}
      // ローディング中はCanvasLoaderを表示
      > 
        <OrbitControls // カメラの操作を可能にするコントロール
          enableZoom={false} // ズームを無効にする
          maxPolarAngle={Math.PI / 2} // 最大極角
          minPolarAngle={Math.PI / 2} // 最小極角
        />
        <Computers isMobile={isMobile}        // 3Dコンピュータモデルを表示
         /> 
      </Suspense>
      <Preload all 
       // 全てのアセットを事前に読み込む
      />
    </Canvas>
  );
};

export default ComputersCanvas; // ComputersCanvasコンポーネントをエクスポート