import React from "react";
import { banner6, banner5 } from "../imports";

const ExclusiveSection: React.FC = () => {
  return (
    <div className="rounded-md overflow-hidden lg:block mb-12 md:mb-14 xl:mb-16">
      <div className="flex justify-between">
        {/* Wocases exlusive */}
        <div className="group w-2/4 flex justify-between items-end relative transition duration-200 ease-in flex-row-reverse bg-gray-150">
          <div className="h-full object-cover exclusiveImage relative z-10 flex transform transition duration-200 ease-in group-hover:scale-105 ltr:ml-auto rtl:mr-auto ltr:2xl:pr-24 rtl:2xl:pl-24 ltr:3xl:pr-40 rtl:3xl:pl-40">
            {/* Image */}
            <img
              alt="button-women-exclusive"
              src={banner6}
              decoding="async"
              className="w-full h-full"
            />
            {/* Label */}
            <a
              href="/search"
              className="absolute z-10 bottom-3 sm:bottom-5 inline-block bg-white shadow-product rounded-md text-heading lowercase text-sm xl:text-xl 2xl:text-xl sm:uppercase px-3 sm:px-5 xl:px-6 2xl:px-8 py-2.5 sm:py-4 xl:py-5 2xl:py-7 transform transition duration-300 ease-in-out hover:bg-heading hover:text-white ltr:right-3 rtl:left-3 ltr:sm:right-5 rtl:sm:left-5 ltr:xl:right-7 rtl:xl:left-7 xl:bottom-7 xl:top-auto"
            >
              #Thinkpad exlusive
            </a>
            {/* Year */}
            <div className="z-0 absolute top-10 xl:top-12 2xl:top-16 3xl:top-24 uppercase text-black opacity-10 text-xl xl:text-2xl 3xl:text-3xl tracking-widest leading-5 ltr:right-5 rtl:left-5 ltr:xl:right-7 rtl:xl:left-7">
              New Year
            </div>
            <div className="exclusiveYear absolute top-16 xl:top-20 2xl:top-24 3xl:top-32 ltr:left-0 rtl:right-0 z-10 text-black font-bold leading-none tracking-widest ltr:text-right rtl:text-left ltr:right-0 rtl:left-0">
              24
            </div>
          </div>
        </div>

        {/* cases exlusive */}
        <div className="group w-2/4 flex justify-between items-end relative transition duration-200 ease-in flex-row-reverse bg-linenSecondary">
          <div className="h-full object-cover exclusiveImage relative z-10 flex transform transition duration-200 ease-in group-hover:scale-105 ltr:ml-auto rtl:mr-auto ltr:2xl:pr-24 rtl:2xl:pl-24 ltr:3xl:pr-40 rtl:3xl:pl-40">
            {/* Image */}
            <img
              alt="button-men-exclusive"
              src={banner5}
              decoding="async"
              className="w-full h-full"
            />
            {/* Label */}
            <a
              href="/search"
              className="absolute z-10 bottom-3 sm:bottom-5 inline-block bg-white shadow-product rounded-md text-heading lowercase text-sm xl:text-xl 2xl:text-xl sm:uppercase px-3 sm:px-5 xl:px-6 2xl:px-8 py-2.5 sm:py-4 xl:py-5 2xl:py-7 transform transition duration-300 ease-in-out hover:bg-heading hover:text-white ltr:left-3 rtl:right-3 ltr:sm:left-5 rtl:sm:right-5 ltr:xl:left-7 rtl:xl:right-7 xl:bottom-7 xl:top-auto"
            >
              #Yoga exlusive
            </a>
            {/* Year */}
            <div className="z-0 absolute top-10 xl:top-12 2xl:top-16 3xl:top-24 uppercase text-black opacity-10 text-xl xl:text-2xl 3xl:text-3xl tracking-widest leading-5 ltr:left-5 rtl:right-5 ltr:xl:left-7 rtl:xl:right-7">
              Exclusive
            </div>
            <div className="exclusiveYear absolute top-16 xl:top-20 2xl:top-24 3xl:top-32 ltr:left-0 rtl:right-0 z-10 text-black font-bold leading-none tracking-widest ltr:text-left rtl:text-right pl-4 ltr:left-0 rtl:right-0">
              24
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveSection;
