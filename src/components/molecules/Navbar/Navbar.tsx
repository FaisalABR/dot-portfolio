"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  return (
    <div className={`w-full ${poppins.className}`}>
      <div className="w-[90%] lg:max-w-[1220px] fixed top-0 left-0 right-0 mx-auto px-2 py-3 flex items-center justify-between z-50">
        <Image src="/images/logo.png" width={40} height={40} alt="logo" />

        <NavigationMenu>
          <NavigationMenuList className="flex gap-5 items-center">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-lg font-semibold text-blue-900 transition-all  hover:text-blue-primary">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/test" legacyBehavior passHref>
                <NavigationMenuLink className="text-lg font-semibold text-blue-900 transition-all  hover:text-blue-primary">
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
