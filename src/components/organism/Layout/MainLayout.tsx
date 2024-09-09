import { Footer } from "@/components/molecules/Footer";
import { Navbar } from "@/components/molecules/Navbar";
import { ReactNode } from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className={poppins.className}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
