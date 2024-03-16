import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Points from "./Points";

function BigPostCard(props) {
  return (
    <div className="w-full md:w-2/5 h-[450px]">
      <img
        src={props.imagesrc}
        alt="Laptop"
        className="h-[200px] w-full object-cover"
      />
      <div className="py-2">
        <div className="mt-2">
          <span className="mb-2 mr-2 inline-block rounded-full text-[14px] font-semibold text-[#6941C6]">
            {props.author}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full text-[14px] font-semibold text-[#6941C6]">
            • {props.date}
          </span>
        </div>
        <div className=" text-[20px] font-bold flex justify-between">
          <h1 className="inline-flex items-center text-[20px] font-bold">
            {props.title}
          </h1>
          <FiArrowUpRight className="h-6 w-6" />
        </div>

        <p className="mt-3 text-[16px] text-[#667085] font-normal text-s leading-6">
          {props.description}
        </p>
      </div>
      <div className="text-[14px] text-[#424244]">
        <Points points={props.points} />
      </div>
    </div>
  );
}

export default BigPostCard;