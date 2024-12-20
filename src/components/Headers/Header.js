import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { logoImg } from "../../assets/images/Assets";
import { headerLinks } from "../../constants";
import ContactButton from "../buttons/ContactButton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  // ================ Header feeding color style start here ================
  const [navSize, setnavSize] = useState("90px");
  const [navColor, setnavColor] = useState("#ffff");

  return (
    <nav
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
      className="bg-black w-full z-50 top-0 sticky"
    >
      <div className="max-w-screen-xl h-[90px] mx-auto flex justify-between items-center text-black">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex w-1/4 justify-start pl-4 lg:pl-0"
        >
          <Link to="/">
            <img className="w-[192px] h-[70px] object-cover " src={logoImg} alt="logoImg" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="hidden lg:flex justify-end items-center gap-10 md:pr-6 xl:pr-0"
        >
          <ul className="flex gap-8 font-semibold text-[18px]">
            {headerLinks.map((header) => (
              <li className="hover:text-darkBg duration-300 " key={header.id}>
                <Link to={header.link}> {header.title} </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <ContactButton />
          </Link>
        </motion.div>
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="lg:hidden flex flex-1 justify-end items-center cursor-pointer px-3"
        >
          {toggle ? <MdClose size={40} /> : <AiOutlineMenuUnfold size={40} />}

          <div
            className={`${toggle ? "flex" : "hidden"
              } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar flex flex-col`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {headerLinks.map((header) => (
                <li
                  key={header.id}
                  className={` uppercase text-white hover:text-darkLight2 font-semibold cursor-pointer border-b-lightGray border-b-[1px] text-[16px] mb-3  hover:border-b-[1px] hover:border-b-darkLight2 duration-300 w-full text-center`}
                >
                  <Link to={header.link}>{header.title}</Link>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <ContactButton />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
