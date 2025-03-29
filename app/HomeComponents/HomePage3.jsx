import React from "react";
import ServiceCard from "../Components/ServiceCard";

export default function HomePage3() {
  const data = [
    {
      id: 1,
      name: "UI/UX Design",
      description:
        "Make a lasting impression with a customized, fresh looking, and SEO-friendly website.",
      color: "blue-200",
      image:
        "https://img.icons8.com/fluency-systems-regular/50/2563eb/windows10-personalization.png",
    },
    {
      id: 2,
      name: "Mobile Applications",
      description:
        "We are a reliable mobile application development provider who can deliver feature-rich apps.",
      color: "amber-200",
      image: "https://img.icons8.com/ios-glyphs/50/FD7E14/two-smartphones.png",
    },
    {
      id: 3,
      name: "Web Development",
      description: "The apps we build work, and the businesses we serve grow.",
      color: "red-200",
      image:
        "https://img.icons8.com/fluency-systems-regular/50/FA5252/laptop-coding.png",
    },
    {
      id: 4,
      name: "Enterprise Applications",
      description:
        "Our cost-effective solutions are employed with a futuristic approach to developing best apps.",
      color: "green-200",
      image:
        "https://img.icons8.com/material-outlined/50/12B886/application-form.png",
    },
    {
      id: 5,
      name: "Digital Marketing",
      description:
        "We have unparalleled expertise in technology and precised vision on customization and creativity.",
      color: "pink-200",
      image: "https://img.icons8.com/ios-filled/50/F25081/speaker_1.png",
    },
    {
      id: 6,
      name: "Support & Maintenance",
      description:
        "We update, enhance, backup and repair your website quickly and efficiently.",
      color: "fuchsia-200",
      image: "https://img.icons8.com/ios-filled/50/C850F2/online-support.png",
    },
  ];
  return (
    <div className="bg-[#f7fdff] w-full min-h-screen">
      <div className="bg-amber-50 rounded-b-4xl border-b-1 border-amber-200 min-h-screen h-fit w-full flex justify-center items-center pb-10">
        <div className="w-[90%] max-w-[1200px] flex justify-center flex-col gap-10">
          <div className="w-full flex justify-between items-center max-sm:flex-wrap">
            <div className="font-bold font-sans text-5xl w-[40%] min-w-[200px] max-md:w-full max-md:text-4xl max-md:text-center">
              What We Serve For{" "}
              <span className="text-blue-500 "> Your Buisness </span>
            </div>
            <div className="button max-sm:w-full max-sm:mt-5 flex justify-center items-center">
              <button className="bg-blue-600 py-3 px-7 text-white rounded-2xl font-bold">
                Know more
              </button>
            </div>
          </div>
          <div className="services flex justify-evenly flex-wrap gap-6">
            {data.map((item) => {
              return (
                <ServiceCard
                  key={item.id}
                  color={item.color}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
