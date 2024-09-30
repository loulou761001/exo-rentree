import star from "../../../assets/svg/star.svg";

export const Ratings = () => {
  return <div className="flex gap-1">
    <img src={star as string} alt="full star"/>
    <img src={star as string} alt="full star"/>
    <img src={star as string} alt="full star"/>
    <img src={star as string} alt="full star"/>
    <img src={star as string} alt="full star"/>
    <span className="text-brand-grey text-[12px]">
      Based on <span className="text-brand-white">10,000+</span> reviews
    </span>
  </div>
}