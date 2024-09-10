import { Button as ShadCnButton } from "@/components/ui/button";
import { ReactNode } from "react";

const Button = ({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className: string;
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <ShadCnButton type={type} className={className}>
      {children}
    </ShadCnButton>
  );
};

export default Button;
