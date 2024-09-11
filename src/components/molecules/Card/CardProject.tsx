import Image from "next/image";
import Link from "next/link";

const CardProject = ({
  image,
  title,
  description,
  date,
  link,
}: {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <div className="flex flex-col shadow-lg transition-all group hover:shadow-blue-primary hover:-translate-y-1">
        <div className="w-full relative cursor-pointer overflow-hidden ">
          <div className="absolute top-3 right-3 z-30 bg-gray-100 text-blue-primary px-3 py-2 text-xs">
            {date}
          </div>
          <Image
            width={200}
            height={200}
            src={image}
            alt="carshowcase"
            className="w-full object-cover transition-all grayscale group-hover:grayscale-0"
          />
        </div>
        <div className="px-4 py-3 bg-white">
          <h3 className="text-lg font-semibold text-blue-primary mb-3">
            {title}
          </h3>
          <p className="text-xs text-blue-900">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProject;
