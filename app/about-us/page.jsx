import React from "react";
import Header from "../Components/Header";
import AboutPage1 from "../AboutComponents/AboutPage1";
import TestimonialCarousel from "../HomeComponents/HomePage8";

export default function page() {
  return (
    <>
      <Header heading={"Know about our Corporate"} subheading="About us" />
      <AboutPage1 />
      <TestimonialCarousel />
    </>
  );
}
