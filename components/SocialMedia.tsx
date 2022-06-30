import React from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { connectedUser } from "~/slices/userSlice";

export default function SocialMedia() {
  const user = useSelector(connectedUser).user;
  return (
    <div className="flex mt-4 md:mt-0">
      <a
        href={user.twitter}
        target="_blank"
        className="btn btn-square bg-white hover:bg-white mx-1"
      >
        <FaTwitterSquare className="h-full w-full text-blue-800" />
      </a>
      <a
        href={user.discord}
        target="_blank"
        className="btn btn-square bg-white hover:bg-white mx-1"
      >
        <FaDiscord className="h-full w-full text-blue-800" />
      </a>
      <a
        href={user.facebook}
        target="_blank"
        className="btn btn-square bg-white hover:bg-white mx-1"
      >
        <FaFacebookSquare className="h-full w-full text-blue-800" />
      </a>
      <a
        href={user.instagram}
        target="_blank"
        className="btn btn-square bg-white hover:bg-white mx-1"
      >
        <FaInstagramSquare className="h-full w-full text-blue-800" />
      </a>
    </div>
  );
}
