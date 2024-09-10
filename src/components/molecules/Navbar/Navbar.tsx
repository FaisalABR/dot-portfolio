"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [changeBg, setChangeBg] = useState(false);

  useEffect(() => {
    const animateBg = () => {
      if (window.scrollY >= 80) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    };

    window.addEventListener("scroll", animateBg);

    return () => {
      window.removeEventListener("scroll", animateBg);
    };
  }, []);

  const navbarClassname = cn({
    "w-full fixed top-0 left-0 right-0 z-50 transition-all py-2": true,
    "bg-white/50 backdrop-blur-md py-1": changeBg === true,
    "bg-transparent": changeBg === false,
  });

  return (
    <div className={navbarClassname}>
      <div className="w-[90%] lg:max-w-[1220px]  mx-auto px-2 py-3 flex items-center justify-between ">
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
