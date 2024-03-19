import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`flex flex-row ${styles.flexCenter}  `}>
    <div className={`w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]  ${styles.flexCenter} text-white font-bold`}>0{number}</div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px] ">{text}</p >
  </div>
);

export default StartSteps;
