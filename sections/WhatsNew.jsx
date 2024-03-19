'use client';
import { motion } from 'framer-motion'
import { TypingText, TitleText, NewFeatures } from "../components"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import styles from '../styles';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative  flex lg:flex-row flex-col z-0 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} gap-9 flex  flex-col lg:flex-row `}>
      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75 ] flex flex-col justify-center pl-[135px]">
        <TypingText title="| Whats New?" textstyles="text-start" />
        <TitleText title={<>What's new about </>} textstyles="text-start" />
        <TitleText title={<>Metaversus?</>} textstyles="text-start" />
        <div className={`flex flex-row mt-[48px]   gap-[24px] justify-between `}>
          {newFeatures.map(feature => (
            <NewFeatures key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants('right')} className={`flex-1 ${styles.flexCenter}`}>
        <img src="/whats-new.png" alt="getstarted" className='object-contain w-[90%] h-[90%]' />
      </motion.div>

    </motion.div>
  </section >
);

export default WhatsNew;
