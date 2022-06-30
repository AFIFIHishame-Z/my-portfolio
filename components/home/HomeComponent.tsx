import Image from "next/image";
import React from "react";
import { BiCollection } from "react-icons/bi";
import { RiAuctionFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { connectedUser } from "~/slices/userSlice";

export default function HomeComponent() {
  const user = useSelector(connectedUser).user;
  return (
    <article>
      <div
        style={{ zIndex: -1 }}
        className="
              absolute
              top-0
              opacity-70
              w-full
              h-full
              before:absolute
              before:w-full
              before:h-full
              before:-z-10
              before:bg-gradient-to-r
              before:from-primary-light
              before:to-blue-900
              before:left-0
              before:top-0
              before:blur-[30px]
              "
      />
      <div className="container mx-auto my-5 md:py-12  lg:mt-14 ">
        <div className="w-full lg:flex">
          <div className="w-full min-h-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full">
              <div className="block w-full">
                <h1 className="uppercase text-center lg:text-start font-bold text-indigo-200 text-2xl lg:text-4xl lg:my-5 w-auto">
                  {user.firstName + " " + user.lastName}
                </h1>
                <h1 className="uppercase text-center lg:text-start font-bold text-indigo-200 text-xl lg:text-3xl lg:my-5 w-auto">
                  Senior Full-stack Developer
                </h1>
                <div className="lg:hidden  my-5  z-0 flex justify-center">
                  <div className="relative">
                    <div className="absolute rounded-l-full w-full h-full bg-gradient-to-r bottom-1  from-sky-700 via-transparent to-transparent z-20 " />

                    <Image
                      src="/images/my_pic.png"
                      alt="women-with-vr"
                      width={200}
                      height={200}
                      priority
                      objectFit="contain"
                      className="rounded-full "
                    />
                  </div>
                </div>
              </div>
              <p className="text-white font-bold	text-3xl lg:text-6xl text-center">
                Create, Design and Deploy Web / Mobile Applications
              </p>
              <div className="mt-8 text-slate-300 font-normal text-xl md:text-2xl text-center lg:text-start">
                ReactJS - NextJs | Angular - Asp.net Core | React Native
              </div>
              <div className="md:mt-12 mt-8 flex justify-center lg:justify-start space-x-3">
                <a
                  href={"#contact"}
                  className="btn md:btn-wide bg-gradient-to-r from-primary-light to-blue-900 text-white border-none"
                >
                  Contact
                </a>
                <a
                  href={user.upwork}
                  target="_blank"
                  className="btn md:btn-wide bg-gradient-to-r from-green-500 to-green-900 text-white border-none"
                >
                  Upwork
                </a>
              </div>
              <div className="md:mt-12 mt-8 w-full  md:px-0 ">
                <div className="bg-white dark:bg-primary stats rounded-lg stats-vertical lg:stats-horizontal shadow w-full md:py-2">
                  <div className="stat ">
                    <div className="stat-figure text-primary-light dark:text-sky-300">
                      <BiCollection className="text-4xl" />
                    </div>
                    <div className="stat-title dark:text-sky-300">Projects</div>
                    <div className="stat-value text-primary-light dark:text-sky-300">
                      26
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-green-800 dark:text-green-300">
                      <RiAuctionFill className="text-4xl" />
                    </div>
                    <div className="stat-title dark:text-green-300">
                      Components
                    </div>
                    <div className="stat-value text-green-800 dark:text-green-300">
                      530
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure ">
                      <div className="avatar-group -space-x-6">
                        <div className="avatar">
                          <div className="w-12">
                            {/* eslint-disable-next-line  */}
                            <img src="https://api.lorem.space/image/face?hash=4818" />
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="w-12">
                            {/* eslint-disable-next-line  */}
                            <img src="https://api.lorem.space/image/face?hash=40311" />
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="w-12">
                            {/* eslint-disable-next-line  */}
                            <img src="https://api.lorem.space/image/face?hash=84348" />
                          </div>
                        </div>
                        <div className="avatar placeholder">
                          <div className="w-12 bg-neutral-focus text-neutral-content">
                            <span>+999</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="stat-value">4K</div>
                    <div className="stat-title">Network</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative lg:w-1/2 min-h-full hidden lg:flex justify-center items-center">
            <div className="absolute rounded-l-full w-full left-8 h-full bg-gradient-to-r bottom-0 from-sky-700 via-transparent to-transparent z-20 " />

            <Image
              src="/images/my_pic.png"
              alt="women-with-vr"
              width={700}
              height={700}
              priority
              objectFit="contain"
              className="rounded-l-full"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
