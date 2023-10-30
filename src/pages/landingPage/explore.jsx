import React from "react";
import ArrowBlack from "../../assets/arrowblack.svg";
import Caricature from "../../assets/caricature.svg";
import Certweb from "../../assets/certweb.svg";
import Coffee from "../../assets/coffee.svg";
import Reveal from "../../components/Reveal";

const ExploreItems = [
  {
    image: Certweb,
    title: "Cerification website - UI Design",
    by: "James Derick",
  },
  {
    image: Coffee,
    title: "Speak your mind",
    by: "mymind",
  },
  {
    image: Caricature,
    title: "Cops with doughnut - ART",
    by: "Jinsoo Choi",
  },
];

const Explore = ({ className }) => {
  return (
    <div
      className={`lg:px-[72px] px-[27px] bg-[#F5F5F5] lg:py-[116px] py-[42px] ${className}`}
    >
      <Reveal>
        <span className="font-medium text-[12px]">Explore</span>
      </Reveal>
      <Reveal>
        <h5 className="text-[24px] lg:text-[44px] font-bold w-[276px] lg:w-[474px]">
          Inspiring Artistry and Design Brilliance
        </h5>
      </Reveal>
      <div className="md:py-[64px] pt-[25px] px-[2px] flex flex-col lg:flex-row w-full items-center gap-[24px]">
        {ExploreItems?.map((item, i) => (
          <Reveal>
            <div key={i} className="h-[465px] bg-white flex-1">
              <img
                src={item.image}
                alt=""
                className="w-full h-[254px] object-cover"
              />
              <div className="relative">
                <div className="border-b-[0.7px] flex flex-col border-b-[#000] px-[25px]">
                  <p
                    className={`text-[18px] lg:text-[24px] ${
                      i === 0 && "lg:w-[360px] w-auto"
                    } ${i === 1 && "lg:w-[297px] w-auto"} ${
                      i === 2 && "lg:w-[297px] w-auto"
                    } font-bold pt-[24px]`}
                  >
                    {item.title}
                  </p>
                  <p className="pb-[74px] text-[10px] lg:text-[14px] font-medium">
                    by <span className="font-bold">{item.by}</span>
                  </p>
                </div>
                <button className="w-full pointer-cursor hover:scale-x-90 transition flex items-center justify-between py-[15px] px-[25px]">
                  <span className="text-[10px] lg:text-[14px] font-medium leading-[18.83px]">
                    View Product
                  </span>
                  <img src={ArrowBlack} alt="" />
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <button className="px-[25px] py-[9px] md:px-[35px] hover:bg-[#ff49701a] mx-auto text-[12px] md:text-[16px] font-bold md:py-[13px] mt-[32px] md:mt-[24px] border-[1px] border-[#FF4970] text-[#FF4970] rounded-[30px] flex items-center justify-center gap-[8px]">
          Browse More
        </button>
      </Reveal>
    </div>
  );
};

export default Explore;
