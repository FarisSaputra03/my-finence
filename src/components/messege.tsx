import React from "react";
import Image from "next/image";
export default function Messege() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image width={816} height={509} src="/img/work.jpg" alt="" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="text-xs text-red-500 tracking-widest font-bold title-font mb-1">
            SAVE MORE TIME
          </h2>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            And Boost Productivity
          </h1>
          <p className="mb-8 leading-relaxed">
            Your employees can bring any success into your business, so we need
            to take care of them
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <input
                type="email"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Email Address"
              />
            </div>
            <button className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded-full text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
