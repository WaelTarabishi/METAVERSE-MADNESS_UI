'use client';
import { motion } from 'framer-motion'
import { TypingText, TitleText, NewFeatures } from "../components"
import { fadeIn, staggerContainer, textVariant } from "../utils/motion"
import styles from '../styles';


const World = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div className='gradient-02 z-0'></motion.div>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex-col mx-auto flex`}>
      <TypingText title="| People on the World" textstyles="text-center" />
      <TitleText textstyles="text-center" title={<>Track friends around you and</>} />
      <TitleText textstyles="text-center" title={<>invite them to play together in</>} />
      <TitleText textstyles="text-center" title={<>the same world</>} />
    </motion.div>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative w-full  max-h-[526px] max-w-[1170px] mt-16 flex mx-auto ">
      <motion.img variants={fadeIn('up', 'tween', 0.3, 1)} src="/map.png" alt="map" className='object-cover w-full h-full' />

      <motion.div variants={textVariant(0.6)} className='lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] absolute bg-[#67687b] p-[6px] rounded-full  top-2/3 left-1/2 z-[5] '>
        <img src="people-01.png" alt="people-2" className='w-full h-full ' />
      </motion.div>
      <motion.div variants={textVariant(0.6)} className='lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] absolute bg-[#67687b] p-[6px] rounded-full  top-3.5 left-1/2      '>
        <img src="people-02.png" alt="people-2" className='w-full h-full' />
      </motion.div>
      <motion.div variants={textVariant(0.6)} className='lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]   absolute bg-[#67687b] p-[6px] rounded-full  top-1/3 right-1/2    '>
        <img src="people-03.png" alt="people-2" className='w-full h-full' />
      </motion.div>
    </motion.div>
  </section >
);

export default World;
