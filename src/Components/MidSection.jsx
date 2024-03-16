import React, { useContext } from "react";
import image from "/src/assets/images/middle.png";
import { ThemeContext } from "../Context/ThemeContext";
import { FiArrowUpRight } from "react-icons/fi";

function MiddleSection() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  return (
    <>
      <div
        style={{ background: theme.ui, color: theme.text }}
        className=" w-[100%] flex flex-col justify-center items-centern p-6 space-y-5 xl:flex-row xl:gap-8 md:px-24 lg:md:px-32 xl:px-24"
      >
        <div className="xl:w-[51%]">
          <img
            className="h-[202px] w-full md:w-[3000px] md:h-[400px] lg:h-[310px] lg:w-[2500px] "
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-4 xl:w-[49%]">
          <h1 className="text-[#6941C6] font-bold">Olivia Rhye • 1 Jan 2023</h1>
          <div className="flex gap-4 justify-between">
            <h1 className="text-xl font-bold tracking-wide ">
              Grid system for better Design User Interface
            </h1>
            <FiArrowUpRight className="text-3xl" />
          </div>
          <p className=" text-[#667085]">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate.
          </p>
          <div className="space-x-2 flex ">
            <button className=" px-2 rounded-full items-center text-[16px] font-semibold justify-center flex bg-[#FDF2FA] text-[#6941C6]">
              Design
            </button>
            <button className="text-[#C11574] px-2 rounded-full text-[16px] font-semibold items-center justify-center flex bg-[#FDF2FA]">
              Interface
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleSection;
