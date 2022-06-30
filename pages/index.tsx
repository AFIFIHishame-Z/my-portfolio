import type { NextPage } from "next";
import About from "~/components/about/About";
import Contact from "~/components/contacts/Contact";
import HomeComponent from "~/components/home/HomeComponent";
import ParticlesBackground from "~/components/ParticlesBackground";
import Projects from "~/components/projects/Projects";

const Home: NextPage = () => {
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
