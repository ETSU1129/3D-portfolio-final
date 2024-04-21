import React from 'react'
import{motion} from 'framer-motion'
import{ styles} from '../styles'


import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    // <section className="relative w-full h-screen mx-auto">
    //     <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}>
    //     <div className='flex flex-col justify-center items-center mt-5'>
    //       <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
    //       <div className='w-1 sm:h-80 h-40 violet-gradient' />
    //     </div>

    //         <div className={`${styles.heroHeadText} text-white`}>
    //             <motion.h1 
    //             initial={{y:100,opacity:0}}
    //             animate={{y:0,opacity:1}}
    //             transition={{duration:1}}
    //             className={`${styles.heroSubText} mt-2 text-white-100`}>Hi,I'm Kubota</motion.h1>
    //             <motion.p 
    //             initial={{y:100,opacity:0}}
    //             animate={{y:0,opacity:1}}
    //             transition={{duration:1.5}}
    //             className='text-white text-[18px] font-medium'>yakiniku ra-menn potetotipputsu <br />ranebn</motion.p>
    //         </div>
    //     </div>
    // </section>




        <section className={`relative w-full h-screen mx-auto`}>
        {/* div要素開始。絶対位置指定、全域、上から120px、最大幅7xl、自動マージン、スタイルのpaddingX適用、フレックスボックス、アイテムは開始位置から配置、ギャップ5 */}
        <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-30 pointer-events-none`}>
          {/* div要素。フレックスボックス、縦方向、アイテムは中央に配置、上マージン5 */}
          <div className='flex flex-col justify-center items-center mt-5'>
            {/* div要素。幅5、高さ5、丸みを帯びた全体、背景色#915EFF */}
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            {/* div要素。幅1、sm以上で高さ80、それ以外は高さ40、violet-gradientクラス適用 */}
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          {/* div要素 */}
          <div>
            {/* h1要素。スタイルのheroHeadTextとtext-whiteクラス適用 */}
            <h1 className={`${styles.heroHeadText} text-white `}>
              {/* 文字列 "Hi, I'm" と、span要素。背景色#915EFFクラス適用 */}
              Hi, I'm <span className='text-[#915EFF] '>Kubota</span>
            </h1>
            {/* p要素。スタイルのheroSubTextとmt-2とtext-white-100クラス適用 */}
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {/* 文字列 "I develop 3D visuals, user" と、br要素。sm以上でブロック、それ以外は非表示 */}
              I develop 3D visuals, user <br className='sm:block hidden' />
              {/* 文字列 "interfaces and web applications" */}
              interfaces and web applications
            </p>
          </div>
        </div>

      <ComputersCanvas />

      {/* div要素開始。絶対位置指定、xs以上で下から10、それ以外は下から32、全幅、フレックスボックス、アイテムは中央に配置 */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* a要素。aboutへのリンク */}
        <a href='#about'>
          {/* div要素。幅35px、高さ64px、丸みを帯びた3xl、ボーダー4、ボーダー色secondary、フレックスボックス、アイテムは開始位置から配置、padding2 */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* motion.div要素。アニメーション適用、y軸で[0, 24, 0]を1.5秒で無限に繰り返す、クラス名適用 */}
            <motion.div
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero