'use client';
import { motion } from 'framer-motion'
import { TitleText, TypingText } from "../components"
import { fadeIn, staggerContainer } from "../utils/motion"
import styles from '../styles';

const About = () => (
  <section className={`${styles.paddings} relative z-10  `}>
    <motion.div className='gradient-02 z-0'></motion.div>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col `}>
      <TypingText title="| About Metaverse" textstyles="text-center" />
      <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-2 font-normal sm:text-[32px] text-20px text-center text-secondary-white mx-w-[1095px]">
        <span className='font-extrabold text-white'>Metaverse</span> is a new thing in the future,
        where you can enjoy the virtual world by feeling like it's really real,
        you can feel what you feel in this metaverse world,
        because this is really the <span className='font-extrabold text-white'>madness of the metaverse </span>of today,
        using only <span className='font-extrabold text-white'>VR</span> devices you can easily <span className='font-extrabold text-white'>explore</span> the metaverse world you want,
        turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img
        src='/arrow-down.svg' alt="arrow"
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-6 mx-auto w-[18px] h-[28px] object-contain" >
      </motion.img>
    </motion.div>
  </section >
);

export default About;
