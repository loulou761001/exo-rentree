import gear from '../../assets/svg/gear.svg'
import graph from '../../assets/svg/graph.svg'
import reel from '../../assets/svg/reel.svg'
import halfCircle from '../../assets/svg/half-circle.svg'
import colors from '../../assets/svg/colors.svg'
import {BigToggle} from "./ui/BigToggle.tsx";
import {Ratings} from "./ui/Ratings.tsx";

export const HeroBanner = () => {
  return (
    <section className="flex justify-between mt-16 mb-16">
      <div className="w-6/12 flex flex-col gap-6 mt-16">
        <Ratings/>
        <h1 className="text-[72px] leading-[72px] font-bold">Seamless solution with our magic!</h1>
        <p>
          UIFry is the project management platform that aims for teams to achieve
          an efficient dream management
        </p>

        <div className="flex gap-10">
          <p className="border-l-2 pl-4 ml-4 text-dark-green border-dark-green">Start work efficiently with<br/>UIFry SaaS product</p>
          <button className="px-4 py-2 bg-dark-green hover:bg-darker-green transition rounded-lg">Get a Free Demo</button>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-8 mr-[100px]">
          <BigToggle/>
          <div className="flex gap-6">
            <img src={graph as string} alt="Graph"/>
            <div className="rounded-l-full rounded-tr-full bg-brand-black h-full aspect-square p-4">
              <img src={gear as string} alt="Gear"/>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-6">
              <div className="rounded-sm bg-brand-black w-[44px] h-[44px] relative">
                <img className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1/2" src={reel as string}
                     alt="Reel"/>
              </div>
              <div className="rounded-sm bg-brand-black p-2 relative w-[200px] h-[130px]">
                <img className="bottom-full translate-y-5 top-0 absolute left-1/2 -translate-x-1/2"
                     src={colors as string} alt="Reel"/>
                <p className="text-center mt-12 font-semibold">$5476</p>
                <p className="text-center text-brand-grey text-[6px]">Spending this week</p>
              </div>

            </div>
            <img src={halfCircle as string} alt="Semi circle"/>
          </div>
        </div>
      </div>
    </section>
  )
}
