import React from "react";
import CardItem from "../CardItem";

export default function Projects() {
  return (
    <div className="h-scree container mx-auto lg:flex p-3">
      <div className=" relative p-3 lg:p-5 space-x-10 bg-white dark:bg-primary  w-full rounded-lg">
        <div>
          <div className="mb-8">
            <h1 className="font-bold text-2xl lg:text-3xl dark:text-white">
              Projects
            </h1>
          </div>
          <div className="rounded-box  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="mx-2 mt-2">
                <CardItem
                  prj_thumb="https://api.lorem.space/image/shoes"
                  prj_title="Amazon store v2"
                  avatar="/images/my_pic_3.png"
                  github_link="https://github.com/AFIFIHishame-Z/amazon-store-v2.0"
                  likes="90"
                  techs="ReactJs | NextJs"
                  link="https://amazon-store-v2-cb81ks4k5-afifi1234.vercel.app/"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
