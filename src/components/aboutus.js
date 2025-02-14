import React from "react";
import Header from "../pages/Homepage/header";
import AboutSlide from "../pages/About-us Page/aboutsMain";
import Focus from "../pages/About-us Page/focus";
import Process from "../pages/About-us Page/process";
import Missions from "../pages/About-us Page/mission";
import Benefits from "../pages/About-us Page/benefits";
import Meet from "../pages/About-us Page/meet";

function AboutUs() {
  return (
    <>
      <Header />
      <AboutSlide />
      <Focus />
      <Process />
      <Missions />
      <Benefits />
      <Meet />
    </>
  );
}

export default AboutUs;
