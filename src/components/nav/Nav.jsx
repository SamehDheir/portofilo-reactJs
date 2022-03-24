import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";

export const Nav = () => {
  const [activClass, setActiveClass] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={activClass === "#" ? "active" : ""}
        onClick={() => setActiveClass("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activClass === "#about" ? "active" : ""}
        onClick={() => setActiveClass("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiance"
        className={activClass === "#experiance" ? "active" : ""}
        onClick={() => setActiveClass("#experiance")}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        className={activClass === "#contact" ? "active" : ""}
        onClick={() => setActiveClass("#contact")}
      >
        <IoMdContact />
      </a>
    </nav>
  );
};
