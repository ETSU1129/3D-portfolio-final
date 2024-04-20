import { Html, useProgress } from "@react-three/drei"; // HtmlとuseProgressをインポート

const CanvasLoader = () => {
  const { progress } = useProgress(); // useProgressフックから進行状況を取得

  return (
    <Html
      as='div' // div要素としてレンダリング
      center // 中央に配置
      style={{
        display: "flex", // フレックスボックスを使用
        justifyContent: "center", // 中央揃え
        alignItems: "center", // 中央揃え
        flexDirection: "column", // 縦方向に要素を配置
      }}
    >
      <span className='canvas-loader'></span> 
      <p
        style={{
          fontSize: 14, // フォントサイズ
          color: "#F1F1F1", // フォントカラー
          fontWeight: 800, // フォントウェイト
          marginTop: 40, // 上マージン
        }}
      >
        {progress.toFixed(2)}% 
      </p>
    </Html>
  );
};

export default CanvasLoader; // CanvasLoaderコンポーネントをエクスポート