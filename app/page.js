import Image from "next/image";
import Navbar from "./Components/Navbar";
import HomePage1 from "./HomeComponents/HomePage1";
import HomePage2 from "./HomeComponents/HomePage2";
import HomePage3 from "./HomeComponents/HomePage3";
import HomePage4 from "./HomeComponents/HomePage4";
import FloatingData from "./Components/FloatingData";
import HomePage5 from "./HomeComponents/HomePage5";
import HomePage6 from "./HomeComponents/HomePage6";
import TextTape from "./HomeComponents/TextTape";
import HomePage7 from "./HomeComponents/HomePage7";
import HomePage8 from "./HomeComponents/HomePage8";
import HomePage9 from "./HomeComponents/HomePage9";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      {/* <FloatingData /> */}
      <HomePage1 />
      <HomePage2 />
      <HomePage3 />
      <HomePage4 />
      <TextTape />
      <HomePage5 />
      <HomePage6 />
      <HomePage7 />
      <HomePage8 />
      <HomePage9 />
    </>
  );
}
