import type { NextPage } from "next";
import About from "~/components/about/About";
import HomeComponent from "~/components/home/HomeComponent";
import ParticlesBackground from "~/components/ParticlesBackground";

const Home: NextPage = () => {
  return (
    <section className="mt-32 md:mt-0">
      <article id="home">
        <HomeComponent />
      </article>
      <article id="about">
        <About />
      </article>
      <article id="projects" className="p-5">
        <div className="bg-white dark:bg-primary rounded-lg p-5">
          {Array.from({ length: 100 }).map((_, i) => (
            <h1 className="font-bold text-center text-red-600 dark:text-white">
              ❤️ I Love You Ghizlane ❤️
            </h1>
          ))}
        </div>
      </article>
      <article id="contact" className="p-5">
        <div className="bg-white dark:bg-primary rounded-lg p-5">
          {Array.from({ length: 100 }).map((_, i) => (
            <h1 className="font-bold text-center text-red-600 dark:text-white">
              ❤️ Chtiii anaa Kan7maaa9 3lik ❤️
            </h1>
          ))}
        </div>
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
