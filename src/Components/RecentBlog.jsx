import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { ThemeContext } from "../Context/ThemeContext";
import image1 from "/src/assets/images/Image(1).png";
import image2 from "/src/assets/images/Image(2).png";
import image3 from "/src/assets/images/Image(3).png";

const RecentBlog = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  return (
    <div
      style={{ background: theme.ui, color: theme.text }}
      className=" md:py-4 md:px-24 space-y-8 md:flex md:flex-col md:justify-start md:items-center px-6"
    >
      <div className="flex flex-col xl:flex  gap-4 xl:gap-0  md:max-w-2xl lg:max-w-full xl:max-w-none">
        <div className="font-bold text-2xl">Recent blog post</div>
        <div className="xl:flex xl:space-x-6">
          <div className="flex flex-col justify-center space-y-4 xl:w-1/2 xl:pt-3">
            <img
              src={image1}
              alt=""
              className="xl:h-[228px] w-full object-cover"
            />

            <h1 className="text-[#6941C6] font-bold">Sunday , 1 Jan 2023</h1>
            <div className="space-x-4 flex items-center xl:justify-between">
              <h1 className="font-bold text-[22px]">UX review presentations</h1>
              <FiArrowUpRight className="text-3xl" />
            </div>

            <div className="text-[#667085] text-md text-balance line-clamp-3 sm:text-wrap">
              <p>
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
            </div>

            <div className="flex space-x-2">
              <h1 className="bg-[#F9F5FF] text-[#6941C6] rounded-full text-center w-20 font-semibold">
                Design
              </h1>
              <h1 className="bg-[#EEF4FF] text-[#3538CD] rounded-full text-center w-20 font-semibold">
                Research
              </h1>
              <h1 className="bg-[#FDF2FA] text-[#C11574] rounded-full text-center w-28 font-semibold">
                Presentation
              </h1>
            </div>
          </div>

          <div className="space-y-8 mt-5 xl:w-1/2">
            <div className="flex flex-col justify-center space-y-4 xl:flex-row xl:items-start xl:space-x-6 xl:space-y-0">
              <img src={image2} alt="" className="object-cover" />
              <div className="xl:w-1/2  space-y-2">
                <h1 className="text-[#6941C6] font-bold">
                  Phoenix Baker • 1 Jan 2023
                </h1>
                <div className="space-x-4 flex items-center">
                  <h1 className="font-bold text-[23px]">
                    Migrating to Linear 101
                  </h1>
                </div>
                <div className="text-[#667085] text-md line-clamp-3">
                  <p>
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here's how to get...
                  </p>
                </div>
                <div className="flex space-x-2">
                  <h1 className="bg-[#F0F9FF] text-[#026AA2] rounded-full text-center w-20 font-semibold">
                    Design
                  </h1>
                  <h1 className="bg-[#FDF2FA] text-[#C11574] rounded-full text-center w-20 font-semibold">
                    Research
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4 xl:flex-row xl:space-x-6 xl:space-y-0">
              <img src={image3} alt="" className="object-cover" />
              <div className="xl:w-1/2 space-y-2">
                <h1 className="text-[#6941C6] font-bold">
                  Sunday , 1 Jan 2023
                </h1>
                <div className="space-x-4 flex items-center">
                  <h1 className="font-bold text-[23px]">
                    Building your API Stack
                  </h1>
                </div>
                <div className="text-[#667085] text-md line-clamp-3">
                  <p>
                    The rise of RESTful APIs has been met by a rise in tools for
                    creating, testing, and manage...
                  </p>
                </div>
                <div className="flex space-x-2">
                  <h1 className="bg-[#ECFDF3] text-[#027A48] rounded-full text-center w-20 font-semibold">
                    Design
                  </h1>
                  <h1 className="bg-[#FDF2FA] text-[#C11574] rounded-full text-center w-20 font-semibold">
                    Research
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
