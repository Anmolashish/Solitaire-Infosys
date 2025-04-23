// app/about/page.tsx
import React from "react";

export default function AboutPage1() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className=" mb-15">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          Delivering great work experiences to our clients.
        </h1>
        <p className=" text-gray-600 max-w-3xl leading-loose">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
          arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
          feugiat egestas.
        </p>
      </section>

      {/* Mission Section */}
      <section className="flex justify-evenly max-md:flex-col items-center gap-5">
        <section className="w-[50%] max-md:w-full">
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Our mission
            </h2>
            <div className="flex flex-col gap-8 leading-loose">
              <p className="text-gray-600">
                Solitaire Infosystems Pvt. Ltd. is an acclaimed IT service
                provider contributing its part in the development of many
                businesses around the globe. We socialize with our clients to
                get a superior cognizance of their business and requirements and
                help them in fabricating websites and applications for their
                business. Founded in 2011 by a dynamic duo with the same aim and
                zeal, we have come a long way in satisfying our clients.
              </p>
              <p className="text-gray-600">
                We visualize becoming the most trusted and respected IT service
                provider across the globe with our vibrant, dynamic, and
                value-based IT solutions that revolve around our clients, team,
                and international standards. Solitaire Infosystems Pvt. Ltd.
                envisions becoming a reliable partner to all its clients and
                focusing on doing everything ethically and rightly. We are
                always open to accept our mistakes and have the nerve to do the
                necessary changes.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gray-50 rounded-3xl  p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              The numbers
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="text-center p-2">
                <p className="text-6xl font-sans font-semibold text-blue-600">
                  $150M
                </p>
                <p className="text-gray-600 mt-2">Raised</p>
              </div>
              <div className="text-center p-2">
                <p className="text-6xl font-sans font-semibold text-blue-600">
                  1.5M
                </p>
                <p className="text-gray-600 mt-2">Deals Closed</p>
              </div>
              <div className="text-center p-2">
                <p className="text-6xl font-sans font-semibold text-blue-600">
                  200M
                </p>
                <p className="text-gray-600 mt-2">Leads Generated</p>
              </div>
              <div className="text-center p-2">
                <p className="text-6xl font-sans font-semibold text-blue-600">
                  30K
                </p>
                <p className="text-gray-600 mt-2">Companies</p>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full md:w-1/2 h-screen flex justify-center items-center p-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full max-w-[600px]">
            {/* Box 1 - Normal position */}
            <div className="aspect-square w-full bg-blue-500 rounded-3xl" />

            {/* Box 2 - Offset upward */}
            <div className="aspect-square w-full bg-blue-500 rounded-3xl md:-mt-15" />

            {/* Box 3 - Normal position */}
            <div className="aspect-square w-full bg-blue-500 rounded-3xl" />

            {/* Box 4 - Offset upward */}
            <div className="aspect-square w-full bg-blue-500 rounded-3xl md:-mt-15" />
          </div>
        </section>
      </section>
    </div>
  );
}
