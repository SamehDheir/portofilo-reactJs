import React from "react";
import "./Content.css";
import contactData from "./ContactData";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Content = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_9mzkgvj",
        "template_lik22bo",
        form.current,
        "GiG_8U1vmeUjY4sgX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="cc">
        <div className="contianer contact__contianer">
          <div className="contact__options">
            {contactData.map(({ title, body, icon, link }, index) => {
              return (
                <article key={index} className="contact__option">
                  <div className="contact__option-icon">{icon}</div>
                  <h4>{title}</h4>
                  <h5>{body}</h5>
                  <a href={link} target="_blank">
                    Send a mesaage
                  </a>
                </article>
              );
            })}
          </div>

          <form onSubmit={sendEmail} ref={form}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
