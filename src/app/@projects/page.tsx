import Image from "next/image";
import CardProject from "@/components/molecules/Card/CardProject";
import { PROJECTS } from "@/lib/constants";

const Page = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/assets/bg-blur3.svg"
        width={100}
        height={100}
        alt="bg-blur"
        className="w-full h-full object-cover left-0 right-0 absolute z-10"
      />
      <div className="w-[90%] lg:max-w-[1220px] relative z-20  mx-auto mt-20 flex flex-col items-center justify-center px-2 py-10">
        <h2 className="text-right font-semibold my-10 text-3xl text-blue-primary border-b-2 border-orange-400">
          My Projects
        </h2>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-10">
          {PROJECTS.map((item) => (
            <CardProject
              key={item.id}
              title={item.title}
              date={item.date}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
