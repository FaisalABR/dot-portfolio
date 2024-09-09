import Image from "next/image";

const CardProject = () => {
  return (
    <div className="flex flex-col shadow-lg transition-all group hover:shadow-blue-primary hover:-translate-y-1">
      <div className="w-full relative cursor-pointer overflow-hidden ">
        <div className="absolute top-3 right-3 z-30 bg-gray-100 text-blue-primary px-3 py-2 text-xs">
          20 Aug 2024
        </div>
        <Image
          width={200}
          height={200}
          src="/assets/trus.png"
          alt="carshowcase"
          className="w-full object-cover transition-all grayscale group-hover:grayscale-0"
        />
      </div>
      <div className="px-4 py-3 bg-white">
        <h3 className="text-lg font-semibold text-blue-primary mb-3">
          Car Showcase
        </h3>
        <p className="text-xs text-blue-900">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
          sapiente!
        </p>
      </div>
    </div>
  );
};

export default CardProject;
