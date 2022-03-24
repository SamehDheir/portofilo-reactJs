import React from "react";
import "./Experiance.css";
import { BsPatchCheckFill } from "react-icons/bs";

import dataSkillsFrontend from "./DataSkillsFrontend";
import dataSkillsBackend from "./DataSkillsBackend";

export const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__contianer">
        <div className="experience__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experience__content">
            {dataSkillsFrontend.map(({ title, experiance }, index) => {
              return (
                <article key={index} className="experience__details">
                  <div className="experience__icons">
                    <BsPatchCheckFill />
                  </div>
                  <div>
                    <h5>{title}</h5>
                    <small className="text-light">{experiance}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Devlopment</h3>
          <div className="experience__content">
            {dataSkillsBackend.map(({ title, experiance }, index) => {
              return (
                <article key={index} className="experience__details">
                  <div className="experience__icons">
                    {" "}
                    <BsPatchCheckFill />
                  </div>
                  <div>
                    <h5>{title}</h5>
                    <small className="text-light">{experiance}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
