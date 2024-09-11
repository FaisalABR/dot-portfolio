import { FAQ } from "@/components/organism/FAQ";

const Page = () => {
  return (
    <div className="w-full relative">
      <div className="w-[90%] lg:max-w-[1220px] relative z-20  mx-auto mt-10 flex flex-col items-center justify-center px-2 py-10">
        <h2 className="text-right font-semibold my-10 text-3xl text-blue-primary border-b-2 border-orange-400">
          FAQ
        </h2>
        <div className="w-full flex">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Page;
