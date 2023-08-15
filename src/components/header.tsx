import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            width="48"
            height="34"
            viewBox="0 0 48 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="34" rx="10" fill="#F5F6FB" />
            <circle cx="15" cy="17" r="6" fill="#207DFF" />
            <circle cx="33" cy="17" r="6" fill="#F06157" />
          </svg>
          <span className="ml-3 text-xl">Payna</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 font-bold">Home</a>
          <a className="mr-5 hover:text-gray-900">Features</a>
          <a className="mr-5 hover:text-gray-900">Showcase</a>
          <a className="mr-5 hover:text-gray-900">Pricing</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">
          Sign In
        </button>
      </div>
    </header>
  );
}
