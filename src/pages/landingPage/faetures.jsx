import React from "react";
import Image1 from "../../assets/box1.svg";
import Image2 from "../../assets/box2.svg";
import Image3 from "../../assets/box3.svg";
import Image4 from "../../assets/box4.svg";
import Bulb from "../../assets/bulb.svg";
import Star from "../../assets/star.svg";
import Community from "../../assets/community.svg";

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
    <div className="px-[72px] flex items-start gap-[82.24px] pt-[110px] pb-[62px]">
      <div className="flex items-center gap-[16px]">
        <div className="h-max-[694px] flex flex-col items-center gap-[16px]">
          {FeaturedImages?.map((image, i) => (
            <div key={i}>
              <img
                src={image}
                alt=""
                className={`${i === 0 && "h-max-[352px]"}  ${
                  i === 1 && "h-[277px]"
                } w-[306px] object-cover`}
              />
            </div>
          ))}
        </div>
        <div className="h-max-[694px] flex flex-col items-center gap-[16px]">
          {nextImages?.map((image, i) => (
            <div key={i}>
              <img
                src={image}
                alt=""
                className={` ${i === 1 && "h-max-[400px]"} ${
                  i === 0 && "h-[277px]"
                }  w-[306px] object-cover`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[587px]">
        <h5 className="text-[40px] font-bold pb-[48px] border-b-[1px] border-b-[text-black/0.20]">
          Features
        </h5>
        <div className="">
          {FeaturedPosts?.map((post, i) => (
            <div
              key={i}
              className="flex items-start gap-[24px] pt-[60px] pb-[48px] border-b-[1px] border-b-[text-black/0.20]"
            >
              <img src={post.image} alt="" className="" />
              <div className="">
                <h6 className="text-[24px] font-bold">{post.title}</h6>
                <p className="text-[16px] font-medium">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
