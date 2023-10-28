import React from "react";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import Caricature from "../../assets/caricature.svg";
import Certweb from "../../assets/certweb.svg";
import Coffee from "../../assets/coffee.svg";

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
    <div className={`px-[72px] bg-[#F5F5F5] pb-[116px] h-screen ${className}`}>
      <span className="font-medium text-[12px]">Explore</span>
      <h5 className="text-[44px] font-bold w-[474px]">
        Inspiring Artistry and Design Brilliance
      </h5>
      <div className="py-[64px] flex w-full items-center justify-between gap-[24px]">
        {ExploreItems?.map((item, i) => (
          <div key={i} className="h-[465px] bg-white">
            <img
              src={item.image}
              alt=""
              className="w-[416px] h-[254px] object-cover"
            />
            <div className="">
              <div className="border-b-[0.7px] flex flex-col border-b-[#000] px-[25px]">
                <p
                  className={`text-[24px] ${i === 0 && "w-[360px]"} ${
                    i === 1 && "w-[297px]"
                  } ${i === 2 && "w-[297px]"} font-bold pt-[24px]`}
                >
                  {item.title}
                </p>
                <p className="pb-[74px] text-[14px] font-medium">
                  by <span className="font-bold">{item.by}</span>
                </p>
              </div>
              <div className="flex items-center justify-between py-[15px] px-[25px]">
                <button>View Product</button>
                <img src={ArrowLeft} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="px-[35px] mx-auto text-[16px] font-bold py-[13px] mt-[24px] border-[1px] border-[#FF4970] text-[#FF4970] rounded-[30px] flex items-center justify-center gap-[8px]">
        Browse More
      </button>
    </div>
  );
};

export default Explore;
