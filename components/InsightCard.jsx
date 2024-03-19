'use client';
import { motion } from 'framer-motion'
import { TypingText, TitleText } from "../components"
import { fadeIn, staggerContainer } from "../utils/motion"
import styles from '../styles';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (

  <motion.div
    className={`flex lg:flex-row flex-col gap-4 ${styles.flexCenter} ${styles.innerWidth}`}
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <motion.div variants={fadeIn('right', 'tween', index * 0.5, 1)}>
      <img src={imgUrl} alt="imgs" className='object-cover w-[270px] h-[250px] rounded-[32px]' />
    </motion.div>

    <motion.div className="w-full flex justify-between items-center" variants={fadeIn('up', 'tween', 0.3, 1)}>
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <motion.h4 className="font-normal lg:text-[42px] text-[26px] text-white" >
          {title}
        </motion.h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </motion.div>



  </motion.div >
);

export default InsightCard;
