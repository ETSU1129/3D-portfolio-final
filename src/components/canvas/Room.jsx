import { useGLTF,useTexture,Float } from "@react-three/drei"
import {motion}from "framer-motion-3d"
import { useControls } from 'leva'
export function Model() {
  const { nodes } = useGLTF("/roommodel002.glb")
  
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
  console.log(nodes);
  return <>
            <motion.group rotation-y={[rotationY]}position-z={[positionZ]}position-y={[positionY]}>
            <mesh geometry={ nodes.bakedmodel1.geometry }
            scale={isModele ? 0.2 : 0.3}
            rotation-y={-1}
            position-x={0}
            position-y={-0.5}>
                <meshBasicMaterial map={ bakedTexture } />
            </mesh>

            
            <mesh geometry={ nodes.bakedmodel2.geometry }
            scale={isModele ? 0.2 : 0.3}
            rotation-y={-1}
            position-x={0}
            position-y={-0.5}>
                <meshBasicMaterial map={ bakedTexture2 } />
            </mesh>
            </motion.group>
</>
}

useGLTF.preload("/roommodel002.glb")
