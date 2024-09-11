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
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [changeBg, setChangeBg] = useState(false);
  const [open, setOpen] = useState(false);

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

  const dropdownMenuClass = cn({
    "md:hidden block absolute transition-all left-0 right-0 -top-44 bg-white py-10":
      true,
    "top-0": open === true,
    "-top-44": open === false,
  });

  return (
    <div className={navbarClassname}>
      <div className="w-[90%] lg:max-w-[1220px]  mx-auto px-2 py-3 flex items-center justify-between ">
        <Image src="/images/logo.png" width={40} height={40} alt="logo" />

        <div className="flex flex-col">
          {open ? (
            <IoCloseOutline
              size={25}
              className="text-blue-primary z-50"
              onClick={() => setOpen(false)}
            />
          ) : (
            <RxHamburgerMenu
              size={25}
              className="text-blue-primary z-50"
              onClick={() => setOpen(true)}
            />
          )}
          <NavigationMenu className={dropdownMenuClass}>
            <NavigationMenuList className="flex flex-col gap-5 items-center">
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

        {/* Desktop Nav */}
        <NavigationMenu className="md:block hidden">
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
