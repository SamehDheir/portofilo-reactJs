import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SAMEH
      </a>
      <ul className="premalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiance">Experience</a>
        </li>
        <li>
          <a href="#portofilo">Portofilo</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SAMEH Portofilo. All right reserved</small>
      </div>
    </footer>
  );
};
