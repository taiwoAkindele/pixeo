import React from "react";
import { AuthNavbar } from "../../components/navbar";
import FilterButton from "../../components/filter";
import Dashboard from "../../assets/dashboard.svg";
import Giraffe from "../../assets/girraffe.svg";
import Grid from "../../assets/grid.svg";
import MobileApp from "../../assets/mobile-app.svg";
import PhoneWallPaper from "../../assets/phone-wallpaper.svg";
import Phone from "../../assets/phone.svg";
import Transaction from "../../assets/transaction.svg";
import Page from "../../assets/page.svg";
import Cat from "../../assets/cat.svg";
import BookmarkIcon from "../../assets/bookmark-icon.svg";
import profileImg from "../../assets/profileImage.svg";
import Footer from "../../components/footer";
import Search from "../../components/input/search";

const data = [
  { image: Giraffe, profile: profileImg, name: "Gül Işık", bookmark: "330" },
  { image: Page, profile: profileImg, name: "Amaka", bookmark: "13" },
  { image: Phone, profile: profileImg, name: "Amaka", bookmark: "111" },
  { image: Cat, profile: profileImg, name: "Lisa Fotios", bookmark: "700" },
  {
    image: Transaction,
    profile: profileImg,
    name: "Goodness",
    bookmark: "670",
  },
  {
    image: PhoneWallPaper,
    profile: profileImg,
    name: "Muhammad Salim",
    bookmark: "123",
  },
  { image: Dashboard, profile: profileImg, name: "Amaka", bookmark: "209" },
  { image: MobileApp, profile: profileImg, name: "Goodness", bookmark: "246" },
  { image: Grid, profile: profileImg, name: "Goodness", bookmark: "33" },
];

const Inspiration = () => {
  return (
    <div className="md:px-[72px] px-[18px]">
      <AuthNavbar />
      <div className="flex items-center mt-[30px] gap-[12px]">
        <Search
          className="ml-[10px] bg-inherit w-[auto]"
          containerClass="flex md:hidden items-center"
        />
        <FilterButton className="ml-auto hover:border-[#000]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-[23px] gap-[18.36px] md:gap-y-[39px] pt-[16px] pb-[109px]">
        {data?.map((item, i) => (
          <div key={i} className="flex flex-col gap-[9.58px] md:gap-[12px]">
            <div className="overflow-hidden rounded-[12px]">
              <img
                src={item.image}
                alt=""
                className="hover:scale-105 max-w-[416px] cursor-pointer transition"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[4px]">
                <img
                  src={item.profile}
                  alt=""
                  className="w-[24px] h-[24px] object-contain"
                />
                <span className="text-[12px] md:text-[16px] font-medium text-[#000] tracking-[0.023px]">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center">
                <img
                  src={BookmarkIcon}
                  alt=""
                  className="w-[28px] h-[28px] object-contain"
                />
                <span className="text-[12px] md:text-[16px] font-medium tracking-[0.023px] text-[#FF4970]">
                  {item.bookmark}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Inspiration;
