"use client";

import { motion } from "framer-motion";
import { CardSkill } from "@/components/molecules/Card";
import { SKILLS } from "@/lib/constants";
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
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="flex space-x-16 group-hover:paused"
            >
              {SKILLS.map(({ name, image }) => (
                <CardSkill key={name} name={name} image={image} />
              ))}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="flex space-x-16 group-hover:paused"
              aria-hidden="true"
            >
              {SKILLS.map(({ name, image }) => (
                <CardSkill key={name} name={name} image={image} />
              ))}
            </motion.div>
          </div>
          <div className="flex space-x-16 overflow-hidden w-full">
            <LogoSlider />
            <LogoSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
