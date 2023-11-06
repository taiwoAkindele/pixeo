import React from "react";
import Image1 from "../../assets/box1.svg";
import Image2 from "../../assets/box2.svg";
import Image3 from "../../assets/box3.svg";
import Image4 from "../../assets/box4.svg";
import Bulb from "../../assets/bulb.svg";
import Star from "../../assets/star.svg";
import Community from "../../assets/community.svg";
import Reveal from "../../components/Reveal";

const FeaturedImages = [Image1, Image2];
const nextImages = [Image3, Image4];

const FeaturedPosts = [
  {
    image: Bulb,
    title: "Endless Inspiration",
    desc: "Explore a diverse range of artistic disciplines, styles, and techniques for inspiration. ",
  },
  {
    image: Community,
    title: "Collaborative Community",
    desc: "Engage in discussions, receiving feedback, and collaborating on projects with fellow members.",
  },
  {
    image: Star,
    title: "Intuitive Design Tools",
    desc: "Canvas editor, brush library, color palette, and other unique functionalities.",
  },
];

const Features = () => {
  return (
    <div className="lg:px-[72px] px-[24px] flex flex-col lg:flex-row items-start gap-[82.24px] pt-[110px] pb-[62px]">
      <div className="flex items-center gap-[16px]">
        <div className="h-max-[694px] flex flex-col items-center gap-[16px]">
          {FeaturedImages?.map((image, i) => (
            <Reveal key={i}>
              <div>
                <img
                  src={image}
                  alt=""
                  className={`${i === 0 && "h-max-[352px]"}  ${
                    i === 1 && "h-[277px]"
                  } w-[306px] object-cover`}
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="h-max-[694px] flex flex-col items-center gap-[16px]">
          {nextImages?.map((image, i) => (
            <Reveal key={i}>
              <div>
                <img
                  src={image}
                  alt=""
                  className={` ${i === 1 && "h-max-[400px]"} ${
                    i === 0 && "h-[277px]"
                  }  w-[306px] object-cover`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="features" className="lg:w-[587px] w-auto px-[2px]">
        <Reveal>
          <h5 className="text-[22px] lg:text-[40px] font-bold pb-[48px] border-b-[1px] border-b-[text-black/0.20]">
            Features
          </h5>
        </Reveal>
        <div className="">
          {FeaturedPosts?.map((post, i) => (
            <Reveal key={i}>
              <div className="flex items-start gap-[24px] pt-[33px] lg:pt-[60px] pb-[26.5px] lg:pb-[48px] border-b-[1px] border-b-[text-black/0.20]">
                <img
                  src={post.image}
                  alt=""
                  className="w-[33px] h-[33px] lg:w-[60px] lg:h-[60px]"
                />
                <div className="flex flex-col gap-[5px]">
                  <h6 className="text-[15px] leading-[17.846px] md:leading-[32.373px] lg:text-[24px] font-bold">
                    {post.title}
                  </h6>
                  <p className="text-[10.8px] leading-[13.45px] md:leading-[21.582px] lg:text-[16px] font-medium">
                    {post.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
