import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "~/components/about/About";
import Contact from "~/components/contacts/Contact";
import HomeComponent from "~/components/home/HomeComponent";
import ParticlesBackground from "~/components/ParticlesBackground";
import Projects from "~/components/projects/Projects";
import prisma from "~/lib/prisma";
import { fillUser } from "~/slices/userSlice";

const Home: NextPage = (props: any) => {
  const dipsatch = useDispatch();
  useEffect(() => {
    dipsatch(fillUser(props.user));
  }, []);

  return (
    <section className="mt-32 md:mt-0">
      <article id="home">
        <HomeComponent />
      </article>
      <article id="about">
        <About />
      </article>
      <article id="projects">
        <Projects />
      </article>
      <article id="contact">
        <Contact />
      </article>
      <article
        style={{
          position: "absolute",
          width: "100%",
          zIndex: -2,
        }}
      >
        <ParticlesBackground />
      </article>
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  const user = await prisma?.user.findFirstOrThrow({
    where: {
      email: "hishame.afifi1997@gmail.com",
    },
  });
  if (user)
    return {
      props: {
        user: user,
      },
    };
}
