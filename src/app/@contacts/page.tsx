import { Form } from "@/components/organism/Form";
import { MdOutlineMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Page = () => {
  return (
    <div className="w-full relative">
      <div className="w-[90%] lg:max-w-[1220px] relative z-20  mx-auto flex flex-col items-center justify-center px-2 py-10">
        <h2 className="text-right font-semibold my-10 text-3xl text-blue-primary border-b-2 border-orange-400">
          Contact
        </h2>
        <div className="w-full flex md:flex-row flex-col items-center gap-10">
          <div className="md:w-7/12 w-full">
            <Form />
          </div>
          <div className="md:w-5/12 w-full flex flex-col gap-5">
            <div className="flex items-center gap-3 text-sm font-medium text-blue-primary">
              <MdOutlineMail size={36} /> faisalabubakar.works@gmail.com
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-blue-primary">
              <BsGithub size={36} /> FaisalABR
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-blue-primary">
              <FiInstagram size={36} /> faisalabubakarriza
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
