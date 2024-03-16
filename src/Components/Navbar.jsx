import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import Toggle from "./Toggle";
import { ThemeContext } from "../Context/ThemeContext";
import logoLight from "/src/assets/images/logoLight.png";
import logoDark from "/src/assets/images/Logo 1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <nav
        style={{ background: theme.ui, color: theme.text }}
        className={`flex justify-between items-center p-5 md:p-0 md:py-[40px] fixed left-0 right-0 top-0 z-50 md:px-24 `}
      >
        {isLightTheme ? (
          <img className="w-24 md:w-32" src={logoDark} alt="mentorow logo" />
        ) : (
          <img className="w-24 md:w-32" src={logoLight} alt="mentorow Logo" />
        )}

        <button onClick={toggleMenu} className="block md:hidden">
          {isOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
        </button>
        <div className="hidden md:flex md:gap-3.5 ">
          <Link>Blog</Link>
          <Link>Projects</Link>
          <Link>Blog</Link>
          <Link>About</Link>
          <Link>Newsletter</Link>
          <Toggle />
        </div>
      </nav>
      {isOpen && (
        <div
          style={{ background: theme.ui, color: theme.text }}
          className="flex flex-col items-center justify-center w-screen h-screen gap-10 fixed left-0 right-0  top-0 z-40 md:hidden "
        >
          <Link>Blog</Link>
          <Link>Projects</Link>
          <Link>Blog</Link>
          <Link>About</Link>
          <Link>Newsletter</Link>
          <Toggle />
        </div>
      )}
    </div>
  );
};
export default Navbar;
