import { Form } from "@/components/organism/Form";
import { ContactLink } from "@/components/molecules/ContactLink";
import { CONTACTS } from "@/lib/constants";

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
            {CONTACTS.map((item) => (
              <ContactLink key={item.id} href={item.href}>
                {item.icon} {item.text}
              </ContactLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
