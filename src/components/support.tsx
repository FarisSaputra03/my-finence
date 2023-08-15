import React from "react";
import Image from "next/image";
export default function Support() {
  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font mb-4 font-bold text-gray-900">
          Trusted by
          <br className="hidden lg:inline-block" />
          Global Companies
        </h1>
      </div>
      <Image width={723} height={30} src="/img/logo.jpg" alt="" />
    </div>
  );
}
