"use client";
import { Button } from "@/components/atoms/Button";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardSkill } from "@/components/molecules/Card";
import { SKILLS } from "@/lib/constants";

const textArray = ["React Dev", "Software Eng", "Backend Dev"];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-fit relative">
        <Image
          src="/assets/bg-blur.svg"
          width={100}
          height={100}
          alt="bg-blur"
          className="w-full h-full object-cover left-0 right-0 absolute z-10"
        />
        <div className="w-[90%] lg:max-w-[1220px] relative z-20 h-[600px] mx-auto flex items-center justify-between px-2 py-3 ">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-6/12 flex flex-col gap-4 items-start"
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
                  {textArray[currentIndex]}
                </p>
              </motion.div>
            </div>
            <p className="text-lg text-blue-900">
              I will Help your business <br /> problems through technology
            </p>

            <Button className="mt-5 bg-blue-primary">Resume</Button>
          </motion.div>
          {/* Right */}
          <div className="w-6/12 flex items-center justify-center">
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
      <div className="w-full ">
        <Image
          src="/assets/bg-blur2.svg"
          width={100}
          height={100}
          alt="bg-blur"
          className="w-full h-full object-cover left-0 right-0 absolute z-10"
        />
        <div className="w-[90%] lg:max-w-[1220px] relative z-20 h-[600px] mx-auto flex items-center justify-between px-2 py-3 ">
          {/* Left */}
          <div className="w-6/12 flex flex-col gap-4 items-center justify-center">
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
          <div className="w-6/12">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.25 }}
              className="text-3xl font-medium text-blue-primary mb-3"
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
              <strong className="text-blue-primary">MySQL</strong>. Experienced
              in team management and effectively communicating work results. I
              have a background in completing freelance projects collaboratively
              with a team.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="w-full ">
        {/* <Image
          src="/assets/bg-blur2.svg"
          width={100}
          height={100}
          alt="bg-blur"
          className="w-full h-full object-cover left-0 right-0 absolute z-10"
        /> */}
        <div className="w-[90%] lg:max-w-[1220px]  mx-auto mt-20 flex flex-col items-center justify-center px-2 py-10">
          <h2 className="text-right font-semibold my-10 text-3xl text-blue-primary">
            My Skillset
          </h2>
          <div className="flex flex-col gap-10 w-full relative">
            <div className="flex space-x-16 overflow-hidden w-full group">
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
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                className="flex space-x-16 group-hover:paused"
              >
                {SKILLS.map(({ name, image }) => (
                  <CardSkill key={name} name={name} image={image} />
                ))}
              </motion.div>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                className="flex space-x-16 group-hover:paused"
                aria-hidden="true"
              >
                {SKILLS.map(({ name, image }) => (
                  <CardSkill key={name} name={name} image={image} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
