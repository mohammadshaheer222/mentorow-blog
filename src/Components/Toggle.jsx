import React, { useContext, useState } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../Context/ThemeContext";
import { LuSunDim } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";

function Toggle() {
  const [checked, setChecked] = useState(true);
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;

  const handleChange = (val) => {
    setChecked(val);
    toggleTheme();
  };

  return (
    <div>
      <ReactSwitch
        className="react-switch-custom"
        checked={checked}
        onChange={handleChange}
        handleDiameter={18}
        height={28}
        width={60}
        offColor={theme.text}
        onColor={theme.text}
        uncheckedIcon={
          <div className="relative w-full h-full">
            <IoMoonOutline
              style={{ color: theme.ui }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg"
            />
          </div>
        }
        checkedIcon={
          <div className="relative w-full h-full">
            <LuSunDim
              style={{ color: theme.ui }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg"
            />
          </div>
        }
      />
      <style>
        {`
          .react-switch-custom .react-switch-handle {
            background-color: ${theme.ui} !important;
            border-color: ${theme.ui} !important;
          }
        `}
      </style>
    </div>
  );
}

export default Toggle;
