import React from "react";

export const PortofiloItem = (props) => {
  return (
    <article className="portofilo__item">
      <div className="portofilo__item-image">
        <img src={props.image} alt="" />
      </div>
      <h3>{props.title}</h3>
      <div className="portofilo__item-cta">
        <a href={props.linkGitHub} className="btn" target={"_blank"}>
          GitHub
        </a>
        <a
          href={props.linkLiveDemo}
          className="btn btn-primary"
          target={"_blank"}
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};
