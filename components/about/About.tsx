import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function About() {
  const [readmore, setReadmore] = useState(false);

  const toggleReadMore = (e: any) => {
    setReadmore(!readmore);
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target)?.offsetTop;
    if (location)
      window.scrollTo({
        left: 0,
        top: location - 85,
      });
  };

  return (
    <div className="h-scree container mx-auto lg:flex p-3">
      <div className="lg:flex relative p-3 lg:p-5 space-x-10 bg-white dark:bg-primary  w-full rounded-lg">
        <div className="lg:w-1/2">
          <Image
            src={"/images/my_pic_2.jpg"}
            width={700}
            height={700}
            priority
            className="rounded-full"
          />
        </div>
        <div className="lg:w-1/2 relative -left-10 lg:left-0 mt-4 lg:mt-0">
          <h1 className="text-xl lg:text-4xl font-bold text-primary dark:text-white ">
            Senior Full-stack Developer
          </h1>
          <p className="text-primary dark:text-white text-lg lg:text-xl">
            Angular - Asp.net core | React - NextJs - Node
          </p>
          <div className="text-lg text-primary dark:text-white mt-5">
            I am a full-stack developer, During this time I have worked on all
            layers of codes from database to UI. I have also been involved in
            all stages of a product life cycle from conceptualization and design
            and up to deployment in production and support. I have been worked
            with startups from different industries.{" "}
            <h1 className="text-xl my-4">
              I am skilled in the following technologies/frameworks:
            </h1>
            <h1>🏅 Frontend Stack 🏅</h1>
            <ul className="pl-5">
              <li>✅ Languages: HTML, CSS, SASS, JavaScript, Typescript</li>
              <li>✅ UI: Bootstrap, Tailwind CSS</li>
              <li>✅ Framework: Angular, ReactJs</li>
              <li>✅ State management: Redux, React-Query</li>
              <li>
                ✅ Components Library: Chakra UI, MaterialUI, PrimeReact,
                Angular Material, PrimeNg
              </li>
              <li>
                ✅ Other Libraries: React-hook-form, StyledComponents, Emotion,
                React Chart
              </li>
              <li>✅ Baas: Firebase, Supabase, Sanity</li>
            </ul>
            <h1>🏅 Nodejs Stack 🏅</h1>
            <a
              onClick={toggleReadMore}
              className={`${
                readmore ? "hidden" : "block"
              } text-sky-500 cursor-pointer`}
            >
              More...
            </a>
            <div className={`${readmore ? "block" : "hidden"}`}>
              <ul className="pl-5">
                <li>✅ Languages: JavaScript, TypeScript</li>
                <li>✅ Framework: Next JS, ExpressJS, NestJs, Fastify </li>
                <li>✅ API: Restful Api, GraphQL </li>

                <li>✅ ORM: Prisma, Mongoose</li>
                <li>
                  ✅ GraphQL Server: Apollo, Nexus, TypeGraphql, Mercurius{" "}
                </li>
                <li>
                  ✅ Other Libraries: Lodash, Dayjs, Moments, jsonwebtoken, zod,
                  yup
                </li>
                <li>✅ Package Mangement: npm, yarn, pnpm</li>
              </ul>
              <h1>🏅 .Net Stack 🏅</h1>
              <ul className="pl-5">
                <li>✅ .Net 6</li>
                <li>✅ C# 11</li>
                <li>✅ Asp.net Core 6.0 (API, MVC, RAZOR, BLAZOR)</li>
                <li>✅ ASP.NET Core SignalR</li>
                <li>✅ ORM : Entity Framework Core</li>
              </ul>
              <h1>🏅 Databases 🏅</h1>
              <ul className="pl-5">
                <li>✅ Mongo DB, Postgres, MySql, Redis, Sql Server</li>
              </ul>
              <h1>🏅 DevOps 🏅</h1>
              <ul className="pl-5">
                <li>✅ Docker</li>
                <li>✅ CI & CD</li>
                <li>
                  ✅ DigitalOcean, Google Cloud, AWS, Azure, Vercel, Netlify,
                  Heroku, Cloudflare Worker
                </li>
              </ul>
              <h1>🏅 Tools 🏅</h1>
              <ul className="pl-5">
                <li>✅ Git, Github, Bitbucket, GitLab</li>
                <li>✅ Project Management: Jira</li>
                <li>✅ IDE: VsCode, Visual Studio</li>
                <li>✅ API: Postman, Insomnia</li>
                <li>✅ Swagger, Grahpql Playground</li>
              </ul>
            </div>
            <a
              href="#about"
              onClick={toggleReadMore}
              className={`${
                !readmore ? "hidden" : "block"
              } text-sky-500 cursor-pointer`}
            >
              Less
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
