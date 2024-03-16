import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Footer = () => {
  let now = new Date();
  var year = now.getFullYear();
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;

  return (
    <div
      style={{ background: theme.ui, color: theme.text }}
      className=" pt-5 flex-wrap p-6 md:px-20 lg:px-28 xl:px-20 border-t-2"
    >
      <div
        style={{ background: theme.ui, color: theme.text }}
        className=" flex flex-col gap-5 w-full pt-16 md:px-4 flex-wrap items-center text-md md:flex-row"
      >
        <h1>Twitter</h1>
        <h1>LinkedIn</h1>
        <h1>Email</h1>
        <h1>RSS feed</h1>
        <h1>Add to Feedly</h1>
        <h1>© {year}</h1>
      </div>
    </div>
  );
};

export default Footer;
