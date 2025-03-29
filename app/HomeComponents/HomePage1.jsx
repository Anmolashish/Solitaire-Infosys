import React from "react";

export default function HomePage1() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-end items-center gap-3 relative">
        <div className="gap-3 flex flex-col justify-end items-center h-[60vh] max-xs:h-[90vh] max-sm:h-[80vh]">
          <div className="reviews flex gap-3 items-center">
            <div className="images flex ">
              <div className="border-2 border-white rounded-full">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  alt=""
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
              </div>
              <div className="border-2 border-white rounded-full ml-[-10px]">
                <img
                  src="https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                  alt=""
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
              </div>
              <div className="border-2 border-white rounded-full ml-[-10px]">
                <img
                  src="https://t3.ftcdn.net/jpg/02/99/04/20/240_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                  alt=""
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
              </div>
            </div>
            <div className="text">
              <h1 className="text-sm font-bold ">12K+ Satisfied customers</h1>
            </div>
          </div>

          <div className="header flex justify-center flex-col items-center gap-1">
            <h1 className="text text-7xl max-lg:text-7xl max-xs:text-6xl text-center">
              <span className="font-bold">Design, Develop & </span>
              <br />
              <span className="font-bold text-blue-600">Grow</span>
            </h1>
            <p className="text-center w-[80%]">
              <span className="text-md text-gray-600 ">
                We are a company of experts with proficient web and mobile
                application development and design skills.
              </span>
            </p>
          </div>
        </div>
        <div className="images min-h-[50vh] w-full flex justify-center relative ">
          <div className="absolute bottom-0 h-[400px] max-xs:hidden flex justify-center">
            <img src="/Images/MainImage.svg" alt="" />
          </div>
        </div>
        <div className="h-1 w-full relative flex justify-center items-center">
          <div className="popup-data z-20 absolute w-[90%] max-w-[1200px] flex gap-4 max-sm:gap-6 p-5 max-sm:p-8 items-center justify-center h-[35vh] min-h-fit bg-blue-500 shadow-2xl text-white rounded-4xl flex-wrap group">
            {/* First Div */}
            <div className="w-[20%] flex-grow h-[90%] max-md:h-[50%] rounded-2xl min-w-[150px] flex flex-col justify-center transition-all duration-300 text-center max-sm:min-w-[120px]">
              <h1 className="text-5xl max-md:text-3xl font-bold font-sans">
                12K+
              </h1>
              <p className="text-sm font-sans">Satisfied Customers</p>
              <p className="text-sm max-md:text-xs font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus qui aut
              </p>
            </div>

            {/* Other Divs */}
            {[
              { number: "12K+", text: "Satisfied Customers" },
              { number: "52K+", text: "Projects created" },
              { number: "12+", text: "Years of experience" },
            ].map((item, index) => (
              <div
                key={index}
                className="w-[20%]  flex-grow h-[90%] max-md:h-[50%] rounded-2xl min-w-[150px] max-sm:min-w-[120px] flex flex-col justify-center text-center "
              >
                <h1 className="text-5xl max-md:text-3xl font-bold font-sans">
                  {item.number}
                </h1>
                <p className="text-sm font-sans">{item.text}</p>
                <div className="text-sm max-md:text-xs font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus qui aut
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bg-blue-400 w-[400px] h-[400px] rounded-full bottom-0 right-0 opacity-30 
        z-[-1] blur-3xl "
        ></div>

        <div
          className="absolute bg-blue-200 w-[200px] h-[200px] rounded-full top-50 left-40 opacity-30 
        z-[-1] blur-3xl animate-float"
        ></div>
      </div>
      <div className="w-full h-[20vh] bg-amber-50"></div>
    </>
  );
}
