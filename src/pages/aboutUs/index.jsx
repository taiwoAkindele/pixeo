import React from "react";
import Layout from "../../components/layout";
import About1 from "../../assets/about1.svg";
import About2 from "../../assets/about2.svg";
import About3 from "../../assets/about3.svg";
import About4 from "../../assets/about4.svg";
import About5 from "../../assets/about5.svg";
import About6 from "../../assets/about6.svg";
import mobileAbout1 from "../../assets/aboutmobile.svg";
import mobileAbout2 from "../../assets/aboutmobile2.svg";
import mobileAbout3 from "../../assets/aboutmobile3.svg";
// import mobileAbout4 from "../../assets/aboutmobile4.svg";
// import mobileAbout5 from "../../assets/aboutmobile5.svg";
// import mobileAbout6 from "../../assets/aboutmobile6.svg";

const AboutUs = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[316px] md:w-[555px] flex flex-col items-center justify-center gap-[16px] md:gap-[32px] pt-[55px] md:pt-[77px]">
          <h5 className="text-[39.85px] md:text-[70px] leading-[113%] text-black font-bold text-center">
            LEARN MORE ABOUT <span className="text-[#FF4970]">US</span>
          </h5>
          <p className="text-[12.45px] md:text-[16px] font-medium text-center">
            We are a passionate community of designers, artists, and creatives
            who have come together to create, inspire, and redefine the
            possibilities of design.
          </p>
        </div>
        <div className="pt-[32px] md:pt-[64px] px-[25px] md:px-[71px]">
          <img
            src={About1}
            alt=""
            className="hidden md:flex w-[1298px] h-[584px] object-contain"
          />
          <img
            src={mobileAbout1}
            alt=""
            className="md:hidden flex w-[100vw] object-contain"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center pt-[32px] md:pt-[100px] gap-[24px] md:gap-[87px] pl-[25px] pr-[22px] md:pl-[72px] md:pr-[64px]">
          <div className="flex flex-col items-left gap-[18px] md:gap-[32px]">
            <h6 className="text-[24px] md:text-[44px] font-bold">
              Our Mission
            </h6>
            <p className="md:w-[576px] w-full text-[10px] md:text-[16px] font-medium leading-[173%]">
              At Pixeo, our mission is deeply rooted in the belief that design
              is a powerful force for positive change. We strive to empower
              designers and creatives to transcend boundaries, break barriers,
              and express their unique perspectives through their work. Our
              mission is to facilitate a community where design enthusiasts,
              amateurs, and professionals alike can connect, collaborate, and
              grow together. We are committed to providing the tools, resources,
              and inspiration required to ignite creativity, solve complex
              design challenges, and drive innovation.
              <br />
              <br />
              Our journey began with a simple but profound mission: to provide a
              platform where design enthusiasts, regardless of their background
              or experience, can find a home for their creativity and a canvas
              for their imagination.
            </p>
          </div>
          <div className="pt-[6px]">
            <img
              src={About2}
              alt=""
              className="hidden md:flex w-[641px] h-[427px] object-cover"
            />
            <img
              src={mobileAbout2}
              alt=""
              className="w-[100vw] flex md:hidden object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center py-[32px] md:py-[100px] gap-[24px] md:gap-[46px] pl-[25px] pr-[22px] md:pl-[70px] md:pr-[70px]">
          <div className="">
            <img
              src={About3}
              alt=""
              className="hidden md:flex w-[614px] h-[435px] object-cover"
            />
            <img
              src={mobileAbout3}
              alt=""
              className="w-[100vw] flex md:hidden object-contain"
            />
          </div>
          <div className="md:w-[631px] w-full flex flex-col items-left gap-[18px] md:gap-[32px]">
            <h6 className="text-[24px] md:text-[44px] font-bold">Vision</h6>
            <p className="text-[10px] md:text-[16px] font-medium">
              Our vision for Pixeo extends beyond being just a platform; we
              envision it as a vibrant ecosystem where innovation and creativity
              thrive. We aspire to be the premier destination for designers
              seeking to expand their horizons, connect with a global network of
              like-minded individuals, and make their mark in the design world.
              Our vision encompasses a future where every designer, regardless
              of their background or experience, finds a supportive and
              inclusive community where they can learn, create, and impact the
              world through design. We see Pixeo as a catalyst for pushing the
              boundaries of design, and we are committed to driving the design
              industry forward. This elaboration of the mission and vision
              emphasizes Pixeo's dedication to fostering creativity,
              collaboration, and innovation within the design community. It
              highlights the platform's role in empowering designers and its
              commitment to inclusivity and positive change through design.
            </p>
          </div>
        </div>
        <div className="md:px-[72px] pl-[25px] pr-[22px]">
          <div className="flex flex-col gap-[18px] md:gap-[32px]">
            <h6 className="text-[24px] md:text-[44px] font-bold">
              The Journey
            </h6>
            <p className="text-[10px] md:text-[16px] font-medium">
              Founded in 2023, Pixeo was born out of a shared passion for
              design's transformative power. We envisioned a platform that not
              only provided the tools and resources for exceptional design but
              also connected people who shared a common love for the craft.
              Pixeo emerged from a simple yet profound idea: to create a space
              where creativity could flourish without limits. We are here to
              support, inspire, and connect, together, we are redefining the
              world of design.
            </p>
          </div>
          <img
            src={About4}
            alt=""
            className="md:pt-[40px] pb-[7px] md:pb-[32px] pt-[13px]"
          />
          <div className="flex items-center gap-[7px] md:gap-[31px]">
            <div className="">
              <img
                src={About5}
                alt=""
                className="w-[633px] w-auto object-contain"
              />
            </div>
            <div className="">
              <img src={About6} alt="" className="w-[633px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
