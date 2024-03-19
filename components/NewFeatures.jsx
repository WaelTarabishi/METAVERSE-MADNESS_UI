import styles from "../styles";
const NewFeatures = ({ title, imgUrl, subtitle }) => (
  <div className="flex-start flex-col flex-1 min-w-[210px]  sm:max-w-[250px]">
    <div className={`bg-[#323f5d] w-[70px] h-[70px] rounded-[24px] ${styles.flexCenter}`} >
      <img src={imgUrl} alt="imgs" className=" object-contain w-1/2 h-1/2" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] text-white leading-8">{title}</h1>
    <p className="mt-[16px] font-normal text-[18px] leading-7 text-[#b0b0b0] flex-1 ">{subtitle}</p>
  </div>
);

export default NewFeatures;
