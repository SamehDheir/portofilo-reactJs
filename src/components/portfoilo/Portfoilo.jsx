import React from "react";
import "./Portfoilo.css";
import reactRouter from "../../assets/reactRouter.png";
import descover from "../../assets/descover.png";
import firstProject from "../../assets/firstProject.png";
import frontend from "../../assets/frontend.png";
import calculator from "../../assets/calculator.png";
import { PortofiloItem } from "./PortofiloItem";

export const Portfoilo = () => {
  return (
    <section id="portofilo">
      <h5>My Resnt Work</h5>
      <h2>Portofilo</h2>
      <div className="container portofilo__container">
        <PortofiloItem
          title="React Router"
          linkGitHub="https://github.com/SamehDheir/first-reacr-router"
          linkLiveDemo="https://gracious-shirley-3374e5.netlify.app"
          image={reactRouter}
        />

        <PortofiloItem
          title="Calculator"
          linkGitHub="https://github.com/SamehDheir/Calculater"
          linkLiveDemo="https://gracious-shirley-3374e5.netlify.app"
          image={calculator}
        />

        <PortofiloItem
          title="Ui|Republic"
          linkGitHub="https://github.com/SamehDheir/first-project"
          linkLiveDemo="https://wizardly-torvalds-3935db.netlify.app/"
          image={firstProject}
        />

        <PortofiloItem
          title=""
          linkGitHub="https://github.com/SamehDheir/frontend_devloper"
          linkLiveDemo="https://mystifying-liskov-3d149b.netlify.app"
          image={frontend}
        />

        <PortofiloItem
          title="Discover_the_smartest_platform"
          linkGitHub="https://github.com/SamehDheir/Discover_the_smartest_platform"
          linkLiveDemo="https://quizzical-joliot-47da94.netlify.app/"
          image={descover}
        />
      </div>
    </section>
  );
};
