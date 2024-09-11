"use client";

import { LogoSlider } from "@/components/molecules/LogoSlider";

const Page = () => {
  return (
    <div className="w-full ">
      <div className="w-[90%] lg:max-w-[1220px]  mx-auto mt-20 flex flex-col items-center justify-center px-2 py-10">
        <h2 className="text-right font-semibold my-10 text-3xl text-blue-primary">
          My Skillset
        </h2>
        <div className="flex flex-col gap-10 w-full relative">
          <div className="flex space-x-16 overflow-hidden w-full ">
            <LogoSlider from="-100%" to="0" />
            <LogoSlider from="-100%" to="0" />
          </div>
          <div className="flex space-x-16 overflow-hidden w-full">
            <LogoSlider to="-100%" from="0" />
            <LogoSlider to="-100%" from="0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
