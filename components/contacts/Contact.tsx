import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import SocialMedia from "../SocialMedia";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";
import { Marker } from "./Marker";
export default function Contact() {
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(10); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 34.037615,
    lng: -5.008092,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log("onIdle");
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()?.toJSON());
  };

  return (
    <div className="h-scree container mx-auto lg:flex p-3">
      <div className="  p-3 lg:p-5 space-x-10 bg-white dark:bg-primary  w-full rounded-lg">
        <div className="lg:flex">
          <div className="flex-grow">
            <div className="mb-8">
              <h1 className="font-bold text-2xl lg:text-3xl dark:text-white">
                Contact
              </h1>
            </div>
            <div>
              <Wrapper apiKey={"AIzaSyD5IfFK8uaIMg6PjOcW805-XbWC2paGrN8"}>
                <Map
                  center={center}
                  onClick={onClick}
                  onIdle={onIdle}
                  zoom={zoom}
                  style={{
                    flexGrow: "1",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                >
                  {clicks.map((latLng, i) => (
                    <Marker key={i} position={latLng} />
                  ))}
                </Map>
              </Wrapper>
            </div>
            <div className="mt-8">
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <div className="lg:flex mt-8 lg:space-x-5">
              <input
                type="text"
                placeholder="Enter your name"
                className="input w-full input-bordered"
              />

              <input
                type="text"
                placeholder="Enter email address"
                className="input w-full input-bordered mt-8 lg:mt-0"
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                placeholder="Enter Subject"
                className="input w-full input-bordered"
              />
            </div>
            <div className="mt-8 flex justify-center lg:justify-end">
              <button className="btn btn-wide bg-gradient-to-r from-primary-light to-blue-900 text-white border-none">
                Send
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center items-center">
            <div>
              <div className="flex items-center mt-4 space-x-2">
                <span>
                  <SiGooglemaps className="text-xl" />
                </span>
                <span className="text-lg">Morocco, Fes</span>
              </div>
              <div className="flex items-center mt-4 space-x-2">
                <span>
                  <BsTelephoneForwardFill className="text-xl" />
                </span>
                <span className="text-lg">+212646251144</span>
              </div>
              <div className="flex items-center mt-4 space-x-2">
                <span>
                  <MdAlternateEmail className="text-xl" />
                </span>
                <span className="text-lg">hishame.afifi1997@gmail.com</span>
              </div>

              <div className="flex items-center mt-4 space-x-2">
                <span>
                  <FaLinkedinIn className="text-xl" />
                </span>
                <span className="text-lg hover:text-primary-light">
                  <a href="www.linkedin.com/in/afifihishame" target={"_blank"}>
                    www.linkedin.com/in/afifihishame
                  </a>
                </span>
              </div>
              <div className="mt-4">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const render = (status: Status) => {
  return <h1>{status}</h1>;
};
