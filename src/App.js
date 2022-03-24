import React from "react";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { About } from "./components/about/About";
import { Experiance } from "./components/experiance/Experiance";
import { Portfoilo } from "./components/portfoilo/Portfoilo";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Testimonials } from "./components/testimonials/Testimonials";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Portfoilo />
      <Testimonials />
      <Content />
      <Footer />
    </>
  );
}
