import React from "react";
import Header from "../Components/Header";
import ContactPage from "../Components/ContactPage";

export default function page() {
  return (
    <>
      <Header heading="Got a question? " subHeading={"Contact us"} />
      <ContactPage />
    </>
  );
}
