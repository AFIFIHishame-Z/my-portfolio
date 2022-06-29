import Link from "next/link";
import React, { useState } from "react";
import AnimatedMenuBurger from "./AnimatedMenuBurger";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "#about",
  },
  {
    title: "projects",
    path: "#projects",
  },
  {
    title: "contact",
    path: "#contact",
  },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between md:justify-start p-5 bg-white dark:bg-primary drop-shadow-md">
      <MobileNav open={open} />
      <div>
        <h1 className="font-extrabold text-2xl md:text-4xl text-primary-light dark:text-white">
          H.AFIFI
        </h1>
      </div>

      <div className="hidden md:flex flex-grow justify-center space-x-5 items-center">
        {navItems.map((item) => (
          <a
            className="font-bold text-xl capitalize border-collapse w-[100px] text-center text-primary-light dark:text-white"
            href={item.path}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="flex space-x-2 items-center">
        <ThemeSwitcher />
        <div className="md:hidden">
          <AnimatedMenuBurger open={open} onClick={() => setOpen(!open)} />
        </div>
      </div>
    </div>
  );
}
function MobileNav({ open }: { open: boolean }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white  dark:bg-primary transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-base-100 h-20">
        {/*logo container*/}
        <h1 className="font-extrabold text-2xl text-primary-light dark:text-white ">
          H.AFIFI
        </h1>
      </div>
      <div className="flex flex-col ml-2">
        <ul>
          {navItems.map((item, i) => (
            <li
              key={i}
              className="mx-4 text-xl font-medium my-4 text-primary-light dark:text-white"
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
