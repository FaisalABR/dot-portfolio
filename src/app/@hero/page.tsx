"use client";

import { POSITION } from "@/lib/constants";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { motion } from "framer-motion";
import Image from "next/image";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % POSITION.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-fit relative">
      <Image
        src="/assets/bg-blur.svg"
        width={100}
        height={100}
        alt="bg-blur"
        className="w-full h-full object-cover left-0 right-0 absolute z-10"
      />
      <div className="w-[90%] lg:max-w-[1220px] relative z-20 h-screen mx-auto flex items-center justify-between px-2 py-3 ">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-6/12 w-full flex flex-col gap-4 items-start"
        >
          <h1 className="text-5xl font-bold text-blue-primary">
            Hi, I&apos;m Faisal
          </h1>
          <div style={{ overflow: "hidden", height: "30px" }}>
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ position: "absolute" }}
            >
              <p className="text-3xl text-blue-primary font-medium">
                {POSITION[currentIndex]}
              </p>
            </motion.div>
          </div>
          <p className="text-lg text-blue-900">
            I will Help your business <br /> problems through technology
          </p>

          <Button className="mt-5 bg-blue-primary">Resume</Button>
        </motion.div>
        {/* Right */}
        <div className="w-6/12  md:flex hidden items-center justify-center">
          <Image
            src="/images/faisal.png"
            width={400}
            height={400}
            alt="Faisal"
            className="grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
