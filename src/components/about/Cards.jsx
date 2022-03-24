import React from "react";
import "../about/About.css";

export const Cards = (props) => {
  return (
    <article className="about__card">
      <div className="about__icons">{props.icon}</div>
      <h5>{props.title}</h5>
      <small>{props.body}</small>
    </article>
  );
};
