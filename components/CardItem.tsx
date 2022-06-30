import Link from "next/link";
import { useState } from "react";
import { AiFillCheckCircle, AiFillHeart } from "react-icons/ai";
import { FiEye, FiMoreHorizontal } from "react-icons/fi";
import SocialMedia from "./SocialMedia";

export default function CardItem(props: any) {
  const [displayBlock, setDisplayBlock] = useState(false);
  const [heart, setHeart] = useState(false);

  function toggleOpenBlock() {
    setDisplayBlock(!displayBlock);
  }
  function toggleLikeWithHeart() {
    setHeart(!heart);
  }

  return (
    <div
      onMouseLeave={() => setDisplayBlock(false)}
      className="card w-auto shadow-xl bg-base-300 md:p-5"
    >
      <figure className="px-8 pt-10">
        <div className="flex justify-center items-center relative w-[255px] h-[264px]">
          <div
            className={`absolute inset-0 ${
              displayBlock ? "flex" : "hidden"
            } items-center justify-center  rounded-lg z-10`}
            style={{ background: "rgba(0,0,0,.5)" }}
          >
            <div>
              <button
                onClick={toggleOpenBlock}
                className="btn text-white bg-primary-light border-none hover:bg-sky-600 w-full"
              >
                Contact
              </button>
              <h1 className="text-center text-white font-bold text-lg mt-5">
                Share
              </h1>
              <div className="mt-5">
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="w-full h-full z-0">
            <a href={props.link} target="_blank">
              {/* eslint-disable-next-line  */}
              <img
                src={props.prj_thumb}
                style={{ objectFit: "cover" }}
                alt={props.prj_title}
                className="w-full h-full rounded-xl shadow-md relative cursor-pointer hover:transform transition duration-500 hover:scale-105"
              />
            </a>
          </div>
        </div>
        <div className="avatar absolute top-2 left-2 md:top-5 md:left-5 hover:scale-105 z-20">
          <div className="cursor-pointer w-14 md:w-16 rounded-full hover:ring ring-primary-light ring-offset-base-100 ring-offset-2">
            {/* eslint-disable-next-line  */}
            <img src={props.avatar} />
            <AiFillCheckCircle className="h-5 w-5 text-primary-light bg-white rounded-full absolute right-0 bottom-0" />
          </div>
        </div>

        <div className="absolute top-2 right-1 z-20">
          <div className="cursor-pointer w-auto rounded-lg">
            {/* eslint-disable-next-line  */}
            <div className="badge bg-primary-light border-4 border-sky-600 rounded-2xl p-4">
              <a href={props.github_link} target="_blank">
                <span className="text-lg font-bold text-white">
                  Code Source
                </span>
              </a>
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-gray-700 dark:text-white ">
            {props.prj_title}
          </h1>
          <FiMoreHorizontal
            onClick={toggleOpenBlock}
            className="w-8 h-8 text-base-content cursor-pointer hover:bg-gray-400 rounded-full"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-semibold text-gray-500">{props.techs}</h1>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-blue-400 flex cursor-pointer hover:text-primary-light">
            <a href={props.link} target="_blank">
              <span className="flex  space-x-2">
                <FiEye className="text-xl" />
                <span>Preview</span>
              </span>
            </a>
          </h1>
          <div
            className={`flex items-center  ${
              heart ? "text-red-400" : "text-gray-500"
            } cursor-pointer`}
            onClick={toggleLikeWithHeart}
          >
            <AiFillHeart className={`w-8 h-8`} />
            <div className="ml-1">{props.likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
