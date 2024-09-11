"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="w-full ">
      <Image
        src="/assets/bg-blur2.svg"
        width={100}
        height={100}
        alt="bg-blur"
        className="w-full h-full object-cover left-0 right-0 absolute z-10"
      />
      <div className="w-[90%] lg:max-w-[1220px] relative z-20 h-[600px] mx-auto flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-between px-2 py-3 ">
        {/* Left */}
        <div className="md:w-6/12 w-full flex flex-col gap-4 items-center justify-center">
          <motion.div
            className="w-[320px] h-[380px] bg-blue-primary rounded-2xl flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/faisal-presentation.jpeg"
              width={280}
              height={300}
              alt="Faisal Presentation"
              className="object-cover w-[280px] h-[340px] object-top rounded-xl grayscale"
            />
          </motion.div>
        </div>
        {/* Right */}
        <div className="md:w-6/12 w-full">
          <motion.h2
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.25 }}
            className="text-3xl font-semibold text-blue-primary mb-3"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.25 }}
            className="text-justify text-sm"
          >
            I am a third-year undergraduate student at UIN Syarif Hidayatullah
            Jakarta, majoring in Information Systems. I have been specializing
            in Web development for over a year, proficient in utilizing web
            stacks such as{" "}
            <strong className="text-blue-primary">React Js</strong>,{" "}
            <strong className="text-blue-primary">Next Js</strong>,
            <strong className="text-blue-primary">Express Js</strong>,
            <strong className="text-blue-primary">MongoDb</strong>, and{" "}
            <strong className="text-blue-primary">MySQL</strong>. Experienced in
            team management and effectively communicating work results. I have a
            background in completing freelance projects collaboratively with a
            team.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Page;
