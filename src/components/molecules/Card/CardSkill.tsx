import Image from "next/image";

const CardSkill = ({ name, image }) => {
  return (
    <div className="w-44 group cursor-pointer bg-white shadow-md rounded-2xl flex px-3 py-2 items-center justify-center gap-5">
      <Image
        width={60}
        height={60}
        src={image}
        alt="React logo"
        className="grayscale transition-all group-hover:grayscale-0"
      />
      <p className="text-gray-600 transition-all group-hover:text-blue-900 text-sm font-bold">
        {name}
      </p>
    </div>
  );
};

export default CardSkill;
