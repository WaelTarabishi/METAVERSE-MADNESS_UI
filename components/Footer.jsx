'use client';
import { motion } from 'framer-motion'
import styles from "../styles"
import { footerVariants } from "../utils/motion"
import { socials } from '../constants';
const Footer = () => (
  <footer className={`${styles.paddings}`}>
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col  relative z-10`}
    >
      <div className="footer-gradient z-0"></div>
      <div className="footer-gradient-0 z-0"></div>
      <div className="footer-gradient-1 z-0"></div>
      <div className={`flex lg:flex-row flex-col justify-between  ${styles.flexCenter} relative z-10`}>
        <h1 className="font-bold sm:text-[48px] text-[32px]  text-center md:mb-0 mb-4  text-white sm:text-start ">Enter the Metaverse </h1>
        <button className={`flex flex-row bg-[#25618B] ${styles.flexCenter} rounded-[32px] h-fit py-4 px-6`}>
          <img src="headset.svg" alt="haedset" className="object-contain w-[24px] h-[24px]" />
          <p className="ml-[12px] text-white font-normal">ENTER METAVERSE</p>
        </button>
      </div>
      <div className="h-[2px] bg-white opacity-10 mt-[80px]"></div>
      <div className="flex lg:flex-row lg:gap-0 gap-4 flex-col items-center justify-between mt-[50px] ">
        <h4 className="font-extrabold text-white  sm:text-[24px] text-[16px] ">METAVERUS</h4>
        <p className="font-normal sm:text-[14px] text-[8px]  text-[#95a9b4]">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>

        <div className="flex flex-row ">
          {socials.map((social, index) => (
            <div key={social.name} >
              <img src={social.url} alt="soical_media " className={` w-[24px] h-[24px] object-contain ${index === socials.length - 1 ? "mr-0" : "mr-8"} cursor-pointer 	 `} />
            </div>

          ))}
        </div>
      </div>
    </motion.div >

  </footer >
);

export default Footer;
