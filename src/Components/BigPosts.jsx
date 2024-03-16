import React, { useContext } from "react";
import { PostDetails } from "../datas";
import BigPostCard from "./BigPostCard";
import { ThemeContext } from "../Context/ThemeContext";

function BigPosts() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  return (
    <div style={{ background: theme.ui, color: theme.text }} className="overflow-hidden md:px-6 lg:px-16 xl:px-8">
      
      <h1 className=" text-[24px] font-semibold pt-6  text-center md:text-left md:ml-20 ">
          All big posts
        </h1>
      <div className="flex flex-col  justify-center items-center mb-2 md:mb-10">
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-6 md:px-16">
          {PostDetails.map((data, index) => (
            <BigPostCard
              key={index}
              imagesrc={data.imagesrc}
              author={data.author}
              date={data.date}
              title={data.title}
              description={data.description}
              points={data.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BigPosts;