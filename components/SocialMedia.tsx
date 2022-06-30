import React from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex mt-4 md:mt-0">
      <button className="btn btn-square bg-white hover:bg-white mx-1">
        <FaTwitterSquare className="h-full w-full text-blue-800" />
      </button>
      <button className="btn btn-square bg-white hover:bg-white mx-1">
        <FaDiscord className="h-full w-full text-blue-800" />
      </button>
      <button className="btn btn-square bg-white hover:bg-white mx-1">
        <FaFacebookSquare className="h-full w-full text-blue-800" />
      </button>
      <button className="btn btn-square bg-white hover:bg-white mx-1">
        <FaInstagramSquare className="h-full w-full text-blue-800" />
      </button>
    </div>
  );
}
