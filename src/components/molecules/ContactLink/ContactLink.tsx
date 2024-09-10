import Link from "next/link";
import { ReactNode } from "react";

const ContactLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div className="flex cursor-pointer items-center gap-3 text-sm font-medium text-blue-primary">
        {children}
      </div>
    </Link>
  );
};

export default ContactLink;
