import star from '../../assets/svg/star.svg'

export const HeroBanner = () => {
  return <section>
    <div className="flex gap-1">
      <img src={star as string} alt="full star"/>
      <img src={star as string} alt="full star"/>
      <img src={star as string} alt="full star"/>
      <img src={star as string} alt="full star"/>
      <img src={star as string} alt="full star"/>
      <span className="text-gray-brand-grey">Based on 10,000+ reviews</span>
    </div>
  </section>
}