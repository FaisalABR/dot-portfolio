import { Button as ShadCnButton } from "@/components/ui/button";
import { ReactNode } from "react";

const Button = ({ children, ...rest }: { children: ReactNode }) => {
  return <ShadCnButton {...rest}>{children}</ShadCnButton>;
};

export default Button;
