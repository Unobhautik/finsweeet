import React from "react";
import Header from "../../pages/Homepage/header";
import HowWeWorks from "../../pages/Homepage/howWeWorks";
import HeroContent from "../../pages/Homepage/HeroContent";
import YourProject from "../../pages/Homepage/yourproject";
import Problems from "../../pages/Homepage/problems";
import Clients from "../../pages/Homepage/client";
import Frequently from "../../pages/Homepage/Frequently";
import Inquiry from "../../pages/Homepage/inquiry";
import Blog from "../../pages/Homepage/blog";

function Hero() {
  return (
    <>
      <Header />
      <HeroContent />
      <HowWeWorks />
      <YourProject />
      <Problems />
      <Clients />
      <Frequently />
      <Inquiry />
      <Blog />
    </>
  );
}

export default Hero;
