import { Project } from "@prisma/client";
import React from "react";
import CardItem from "../CardItem";

const projects: any = [
  {
    id: "1",
    likes: 22,
    link: "https://nft-marketplace-v2-psi.vercel.app/",
    ownerId: "1",
    repository: "https://github.com/weweb3/nft-marketplace",
    title: "Nft Marketplace",
    thumb: "/images/nftmarketplace.png",
  },
  {
    id: "2",
    likes: 56,
    link: "https://amazon-store-v2-eallltdbq-afifi1234.vercel.app/",
    ownerId: "1",
    repository: "https://github.com/AFIFIHishame-Z/amazon-store-v2.0",
    title: "Amazon store",
    thumb: "/images/amazon_2.png",
  },
  {
    id: "3",
    likes: 126,
    link: "https://qatar-2022-predict-group-rankings.vercel.app/",
    ownerId: "1",
    repository:
      "https://github.com/AFIFIHishame-Z/qatar-2022-predict-group-rankings",
    title: "Predict the FIFA World Cup Qatar 2022 group rankings",
    thumb: "/images/FIFA-World-Cup-Qatar-2022-emblem.webp",
  },
];

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
            {projects.map((project: any) => (
              <div key={project.id} className="mx-2 mt-2">
                <CardItem
                  prj_thumb={project.thumb}
                  prj_title={project.title}
                  avatar="/images/my_pic_3.png"
                  github_link={project.repository}
                  likes={project.likes}
                  techs="ReactJs | NextJs"
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
