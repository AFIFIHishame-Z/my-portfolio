import Link from "next/link";
import React from "react";
import { IoSend } from "react-icons/io5";
import SocialMedia from "../SocialMedia";

export default function Footer() {
  return (
    <div className="w-full h-50 bg-white dark:bg-primary pt-10 divide-y divide-indigo-200 ">
      <div className="w-full md:flex md:px-36 px-10 ">
        <div className="md:w-1/4 w-1/2  ">
          <h1 className="py-2 text-gray-800  dark:text-white font-bold text-xl">
            Links
          </h1>
          <ul>
            {marketplaceItems.map((el, i) => (
              <li
                key={i}
                className="text-slate-700 dark:text-slate-300 text-semibold text-lg py-1"
              >
                <Link href={el.href}>{el.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/4 w-1/2 ">
          <h1 className="py-2 text-gray-800 dark:text-white font-bold text-xl">
            Resources
          </h1>
          <ul>
            {resourcesItems.map((el, i) => (
              <li
                key={i}
                className="text-slate-700  dark:text-slate-300 text-semibold text-lg py-1"
              >
                <Link href={el.href}>{el.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/4 ">
          <h1 className="py-2 text-gray-800 dark:text-white font-bold text-xl">
            Community
          </h1>
          <ul>
            {communityItems.map((el, i) => (
              <li
                key={i}
                className="text-slate-700 dark:text-slate-300 text-semibold text-lg py-1"
              >
                <Link href={el.href}>{el.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/4 ">
          <h1 className="py-2 text-gray-800 dark:text-white font-bold text-xl">
            Newsletter
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-semibold text-lg py-1">
            Signup for our newsletter to get the latest news in your inbox.
          </p>
          <div className="mt-5">
            <label className="relative text-gray-400 focus-within:text-gray-600 block">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@weweb3.dev"
                className="form-input border border-gray-900 py-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-3 focus:outline-none"
              />

              <IoSend className="w-8 h-8 absolute cursor-pointer	 top-1/2 transform -translate-y-1/2 text-gray-800 right-3" />
            </label>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm text-semibold py-1">
            Your email is safe with us. We don&apos;t spam.
          </p>
        </div>
      </div>

      <div className="w-full mt-10 py-3 h-auto md:px-36">
        <div className="md:flex md:justify-between h-full items-center">
          <div className="text-slate-700 dark:text-slate-300 font-bold text-lg text-center md:text-start">
            &copy; Copyright {new Date().getFullYear()} -
            <Link href={"/"}>H.AFIFI</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const marketplaceItems = [
  {
    label: "Github",
    href: "/",
  },
  {
    label: "Upwork",
    href: "/",
  },
  {
    label: "All projects",
    href: "/",
  },
  {
    label: "About me",
    href: "/",
  },
];

const resourcesItems = [
  {
    label: "Help Center",
    href: "/",
  },
  {
    label: "Partners",
    href: "/",
  },

  {
    label: "Discord",
    href: "/",
  },
  {
    label: "Docs",
    href: "/",
  },
];
const communityItems = [
  {
    label: "Community",
    href: "/",
  },
  {
    label: "Documentation",
    href: "/",
  },

  {
    label: "Blog",
    href: "/",
  },
  {
    label: "Forum",
    href: "/",
  },
];
