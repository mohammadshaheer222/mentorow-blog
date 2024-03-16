import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Hero = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  const breakpoints = [
    { minWidth: 375, fontSize: 3.5 },
    { minWidth: 425, fontSize: 4 },
    { minWidth: 450, fontSize: 5 },
    { minWidth: 550, fontSize: 6 },
    { minWidth: 650, fontSize: 7 },
    { minWidth: 700, fontSize: 7 },
    { minWidth: 768, fontSize: 6.5 },
    { minWidth: 800, fontSize: 7 },
    { minWidth: 990, fontSize: 8 },
    { minWidth: 1000, fontSize: 8 },
    { minWidth: 1024, fontSize: 8.5 },
    { minWidth: 1080, fontSize: 9 },
    { minWidth: 1180, fontSize: 11.5 },
    { minWidth: 1344, fontSize: 13 },
    { minWidth: 1440, fontSize: 14 },
    { minWidth: 1500, fontSize: 14.5 },
  ];

  const mediaQueries = breakpoints.map(
    ({ minWidth, fontSize }) =>
      `@media screen and (min-width: ${minWidth}px) {
        .hero-text {
          font-size: ${fontSize}rem;
        }
      }`
  );

  return (
    <div
      style={{ background: theme.ui, color: theme.text }}
      className="py-[68px] md:pt-[77px] px-6 md:px-24 mt-2 md:mt-10 "
    >
      <div className="p-2 md:p-0 flex justify-center items-center border-y-2 ">
        <p className="hero-text text-5xl font-bold text-nowrap tracking-widest">
          THE BLOG
        </p>
      </div>
      <style>{mediaQueries.join("\n")}</style>
    </div>
  );
};

export default Hero;
