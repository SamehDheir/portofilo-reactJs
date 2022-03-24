import React from "react";
import "./About.css";
import aboutMeImage from "../../assets/me-about.jpg";
import { Cards } from "./Cards";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={aboutMeImage} alt="About Image" />
          </div>
        </div>

        <div className="about__contect">
          <div className="about__cards">
            <Cards
              title="Experiance"
              body="2+ Years Working"
              icon={<VscFolderLibrary />}
            />
            <Cards title="Client" body="+20 WorldWide" icon={<FiUsers />} />
            <Cards title="Project" body="+12 Completed" icon={<FaAward />} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            quibusdam consequatur tempore aspernatur itaque commodi blanditiis
            accusantium excepturi odit tempora nisi tenetur fuga nesciunt qui
            ipsum voluptatibus. Distinctio, ut explicabo.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
