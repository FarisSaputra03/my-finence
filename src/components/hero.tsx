import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Manage Payroll
            <br className="hidden lg:inline-block" />
            Like an Expert
          </h1>
          <p className="mb-8 leading-relaxed">
            Payna is helping you to setting up the payroll without required any
            finance skills or knowledge before
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded-full text-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image width={691} height={461} src="/img/human.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
