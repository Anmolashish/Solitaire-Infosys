import React from "react";

export default function ServiceCard(props) {
  return (
    <div className="min-w-[150px] min-h-[250px] bg-white rounded-4xl shadow-md hover:shadow-2xl transition duration-300 flex-grow flex-1/4">
      <div className="flex flex-col justify-center gap-3 h-full p-4">
        <div className={`bg-${props.color} rounded-full p-2 w-fit`}>
          <img
            width="20"
            height="20"
            src={props.image}
            alt="windows10-personalization"
          />
        </div>
        <div className=" text-xl font-semibold">{props.name}</div>
        <div className="text-xs  text-gray-500">{props.description}</div>
        <div className="text-sm flex gap-3 items-center font-semibold">
          Learn more{" "}
          <img
            width="24"
            height="10"
            src="https://img.icons8.com/forma-thin-filled-sharp/40/2563eb/long-arrow-right.png"
            alt="long-arrow-right"
          />
          <div className="">
            <div className="bg-amber-200"></div>
            <div className="bg-red-200"></div>
            <div className="bg-green-200"></div>
            <div className="bg-pink-200"></div>
            <div className="bg-fuchsia-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
