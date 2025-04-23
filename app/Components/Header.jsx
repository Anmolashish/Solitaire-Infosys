import React from "react";

export default function Header(props) {
  return (
    <div className="h-[60vh] w-full flex flex-col justify-center items-center gap-2 pt-20 max-md:pt-22 ">
      <small className="text-blue-500 font-bold">{props.subHeading}</small>
      <h1 className="text-6xl font-bold text-gray-900  text-center max-md:text-4xl">
        {props.heading}
      </h1>
    </div>
  );
}
