'use client';
import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textstyles }) => (
  <motion.p variants={textContainer} className={`font-normal text-secondary-white  text-[14] ${textstyles} }`} >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>{letter === " " ? '\u00A0' : letter}</motion.span>
    ))}
  </motion.p>
);
export const TypingTexts = ({ title, textstyles }) => (
  <motion.p variants={textContainer} className={`font-normal lg:text-[42px] text-[26px] text-white`} >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>{letter === " " ? '\u00A0' : letter}</motion.span>
    ))}
  </motion.p>
);
export const TitleText = ({ title, textstyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textstyles} `}>
    {title}
  </motion.h2>
);
