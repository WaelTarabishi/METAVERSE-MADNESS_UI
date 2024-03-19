'use client';
import { motion } from 'framer-motion'
import { TypingText, StartSteps, TitleText } from "../components"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion"
import styles from '../styles';
import { startingFeatures } from '../constants';
const GetStarted = () => (
  <section className={`${styles.paddings} relative  flex lg:flex-row flex-col z-0 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} gap-9 flex  flex-col lg:flex-row `}>
      <motion.div variants={planetVariants('left')} className={`flex-1 ${styles.flexCenter}`}>
        <img src="/planet-11.png" alt="getstarted" className='object-contain w-[90%] h-[90%]' />
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center    ">
        <TypingText title="| How Metaverus Works" textstyles="text-start" />
        <TitleText title={<>Get started with just a few clicks</>} textstyles="text-start" />
        <div className={`flex flex-col mt-12 max-w-[370px] gap-[24px]`}>
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature}
              number={index + 1}
              text={feature}

            />
          ))}
        </div>

      </motion.div>


    </motion.div>
  </section >
);

export default GetStarted;
